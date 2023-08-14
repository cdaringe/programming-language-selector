import * as path from "node:path";
import * as fs from "node:fs";

const dirname = path.dirname(import.meta.url.replace("file://", ""));

export const workspaceDirname = path.resolve(dirname, "..");
export const datacsvFilename = path.join(workspaceDirname, "data.csv");
export const datadomaincsvFilename = path.join(
  workspaceDirname,
  "data_domain_v_lang.csv"
);
export const datajsonFilename = path.join(workspaceDirname, "data.json");
export const datadomainjsonFilename = path.join(
  workspaceDirname,
  "datadomain.json"
);
