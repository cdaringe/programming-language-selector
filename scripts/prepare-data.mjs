/**
 * @usage
 *
 */
import assert from "node:assert";
import { readFile, writeFile } from "node:fs/promises";
import { default as papa } from "papaparse";
import {
  datacsvFilename,
  datadomaincsvFilename,
  datadomainjsonFilename,
  datajsonFilename,
} from "./common.mjs";
import { download } from "./download-data.mjs";

async function main() {
  await download(
    datacsvFilename,
    "https://docs.google.com/spreadsheets/d/1ZVdRbDx5KffYxcecuP6AHXcJWl35nhv9U5f62h6azOU/export?format=csv&gid=0",
  );
  await download(
    datadomaincsvFilename,
    "https://docs.google.com/spreadsheets/d/1ZVdRbDx5KffYxcecuP6AHXcJWl35nhv9U5f62h6azOU/export?format=csv&gid=1053800725",
  );
  const csvStr = await readFile(datacsvFilename, { encoding: "utf-8" });
  const {
    data: parsed,
    errors: [parseError],
  } = papa.parse(csvStr.trim(), {
    delimiter: ",",
    header: true,
    quoteChar: '"',
  });
  assert(!parseError, String(parseError));
  const columns = Object.keys(parsed[0]);
  const langs = columns
    .filter((x) => x.includes("_comment"))
    .map((x) => x.replace("_comment", ""));

  const csvDomainStr = await readFile(datadomaincsvFilename, {
    encoding: "utf-8",
  });
  const {
    data: parsedDomain,
    errors: [parseDomainError],
  } = papa.parse(csvDomainStr.trim(), {
    delimiter: ",",
    header: true,
    quoteChar: '"',
  });
  assert(!parseDomainError, String(parseDomainError));

  const jsonReady = parsed.reduce(
    (acc, row) => {
      /**
       * {
       *   js: {
       *     [traitName]: {
       *        comment: ...,
       *        value: ...
       *        category: ...
       *     }
       *   }
       * }
       */
      for (const lang of langs) {
        const langBucket = acc[lang];
        const { trait_scalar, category } = row;
        const value = row[lang];
        const comment = row[`${lang}_comment`];
        assert(trait_scalar, "missing trait_scalar");
        assert(value, "missing value");
        assert(category, "missing category");
        langBucket[row.trait] = {
          traitScalar: parseInt(trait_scalar, 10),
          comment,
          value: value.match(/\d+/) ? parseFloat(value) : value,
          category,
        };
      }
      return acc;
    },
    langs.reduce((acc, it) => ({ ...acc, [it]: {} }), {}),
  );

  const jsonDomainReady = parsedDomain.reduce((acc, { domain, ...rest }) => {
    const domainRatingsByLang = acc[domain] || {};
    acc[domain] = domainRatingsByLang;
    for (const k in rest) {
      const rating = parseInt(rest[k], 10);
      if (!Number.isInteger(rating)) {
        throw new Error(`bad rating for domain ${domain} / ${k}`);
      }
      domainRatingsByLang[k] = rating;
    }
    return acc;
  }, {});

  await writeFile(datajsonFilename, JSON.stringify(jsonReady, null, 2));
  await writeFile(
    datadomainjsonFilename,
    JSON.stringify(jsonDomainReady, null, 2),
  );
  console.log(`json @ ${datajsonFilename}`);
}

main();
