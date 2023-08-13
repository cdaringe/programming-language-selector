import * as fs from "node:fs/promises";

const ONE_HOUR_MS = 60 /* min */ * 60 /* s/min */ * 1000; /* ms/s */

export const download = async (filename, url) => {
  const stat = await fs.stat(filename).catch(() => null);
  if (stat) {
    const nowMs = Date.now();
    const ageMs = nowMs - stat.ctimeMs;
    if (ageMs < ONE_HOUR_MS) {
      console.warn(
        `using existing, age (minutes): ${(ageMs / 1000 / 60).toFixed(0)}`
      );
      return;
    }
  }

  return fetch(url).then(async (res) => {
    if (!res.ok) {
      throw new Error(`${res.status} / ${res.statusText}`);
    }
    await fs.writeFile(filename, await res.text());
  });
};
