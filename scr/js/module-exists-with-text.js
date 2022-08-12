"use strict";
import ora from "ora";
import chalk from "chalk";
import { moduleExists } from "./module-exists.js";

let defaultColors;

export const setTextColors = (colors) => {
  defaultColors = {
    success: colors?.sucess || "#008000",
    error: colors?.error || "#DC143C",
    warn: colors?.warn || "#FFD700",
    info: colors?.info || "#00FFFF",
  };

  return defaultColors;
};

setTextColors();

export const moduleExistsWithText = (
  moduleName,
  options = {
    success: {
      color: defaultColors.success,
      text: "",
      warn: {
        color: defaultColors.warn,
        text: "",
      },
      info: {
        color: defaultColors.info,
        text: "",
      },
    },
    error: {
      color: defaultColors.error,
      text: "",
      warn: {
        color: defaultColors.warn,
        text: "",
      },
      info: {
        color: defaultColors.info,
        text: "",
      },
    },
  }
) => {
  const chalkSuccess = chalk.hex(
    options.success?.color || defaultColors.success
  );

  const chalkError = chalk.hex(options.error?.color || defaultColors.error);
  const spinner = ora("Checking modules...").start();

  if (moduleExists(moduleName)) {
    spinner.succeed(chalkSuccess(options.success?.text || "Installed!"));

    if (options.success?.warn?.text) {
      const chalkWarn = chalk.hex(
        options.success?.warn?.color || defaultColors.warn
      );
      spinner.warn(chalkWarn(options.success?.warn?.text || ""));
    }

    if (options.success?.info?.text) {
      const chalkInfo = chalk.hex(
        options.success?.info?.color || defaultColors.info
      );
      spinner.info(chalkInfo(options.success?.info?.text || ""));
    }
    spinner.stop();
    return true;
  } else {
    spinner.fail(chalkError(options.error?.text || "Not installed"));

    if (options.error?.warn?.text) {
      const chalkWarn = chalk.hex(
        options.error?.warn.color || defaultColors.warn
      );
      spinner.warn(chalkWarn(options.error?.warn.text || ""));
    }

    if (options.error?.info?.text) {
      const chalkInfo = chalk.hex(
        options.error?.info.color || defaultColors.info
      );
      spinner.info(chalkInfo(options.error?.info.text || ""));
    }

    spinner.stop();
    return false;
  }
};

export default moduleExistsWithText;
