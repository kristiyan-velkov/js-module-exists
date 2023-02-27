"use strict";
import path from "path";
import fs from "fs";

export const moduleExists = (moduleName) => {
  const packageFilePath = path.dirname("");
  const data = readFileSync(`${packageFilePath}/package.json`, "utf8");
  let dependenciesList = [];

  if (data) {
    let packageJson = JSON.parse(data);

    if (packageJson.dependencies && dependencies) {
      dependenciesList.push(...Object.keys(packageJson.dependencies));
    }
    if (packageJson.devDependencies && devDependencies) {
      dependenciesList.push(...Object.keys(packageJson.devDependencies));
    }
    if (packageJson.peerDependencies && peerDependencies) {
      dependenciesList.push(...Object.keys(packageJson.peerDependencies));
    }
  }

  return dependenciesList.includes(packageName);
};

export default moduleExists;
