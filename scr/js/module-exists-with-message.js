"use strict";
import ora from "ora";
import chalk from "chalk";
import { moduleExists } from "./module-exists.js";

let defaultColors;

export const setModuleExistsColors = (colors) => {
  defaultColors = {
    success: colors?.sucess || "#008000",
    error: colors?.error || "#DC143C",
    info: colors?.info || "#00FFFF",
    warn: colors?.warn || "#FFD700",
  };

  return defaultColors;
};

setModuleExistsColors();

export const moduleExistsWithMessage = (
  moduleName,
  options = {
    success: {
      color: defaultColors.success,
      text: "",
      info: {
        color: defaultColors.info,
        text: "",
      },
      warn: {
        color: defaultColors.warn,
        text: "",
      },
    },
    error: {
      color: defaultColors.error,
      text: "",
      info: {
        color: defaultColors.info,
        text: "",
      },
      warn: {
        color: defaultColors.warn,
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

    if (options.success?.info?.text) {
      const chalkInfo = chalk.hex(
        options.success?.info?.color || defaultColors.info
      );
      spinner.info(chalkInfo(options.success?.info?.text || ""));
    }

    if (options.success?.warn?.text) {
      const chalkWarn = chalk.hex(
        options.success?.warn?.color || defaultColors.warn
      );
      spinner.warn(chalkWarn(options.success?.warn?.text || ""));
    }
  } else {
    spinner.fail(chalkError(options.error?.text || "Not installed"));

    if (options.error?.info?.text) {
      const chalkInfo = chalk.hex(
        options.error?.info.color || defaultColors.info
      );
      spinner.info(chalkInfo(options.error?.info.text || ""));
    }

    if (options.error?.warn?.text) {
      const chalkWarn = chalk.hex(
        options.error?.warn.color || defaultColors.warn
      );
      spinner.warn(chalkWarn(options.error?.warn.text || ""));
    }
  }
  spinner.stop();
};

export default moduleExistsWithMessage;
