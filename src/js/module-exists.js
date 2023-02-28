"use strict";
import path from "path";
import fs from "fs";

export const moduleExists = (moduleName) => {
  const packageFilePath = path.dirname("");
  const data = fs.readFileSync(`${packageFilePath}/package.json`, "utf8");
  let dependencies = [];

  if (data) {
    let packageJson = JSON.parse(data);
    if (packageJson.dependencies) {
      dependencies.push(...Object.keys(packageJson.dependencies));
    }

    if (packageJson.devDependencies) {
      dependencies.push(...Object.keys(packageJson.devDependencies));
    }

    if (packageJson.peerDependencies) {
      dependencies.push(...Object.keys(packageJson.peerDependencies));
    }
  }

  return !!dependencies.includes(moduleName);
};

export default moduleExists;
