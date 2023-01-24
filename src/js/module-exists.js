"use strict";
import path from "path";
import fs from "fs";

export const moduleExists = (moduleName) => {
  const packageFilePath = path.dirname("");
  const data = fs.readFileSync(`${packageFilePath}/package.json`, "utf8");
  let result;

  if (data.includes(moduleName)) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

export default moduleExists;
