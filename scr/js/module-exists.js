"use strict";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

export const moduleExists = (moduleName) => {
  try {
    require.resolve(moduleName);
    return true;
  } catch (err) {
    if (err.code === "MODULE_NOT_FOUND") {
      return false;
    }
  }
};

export default moduleExists;
