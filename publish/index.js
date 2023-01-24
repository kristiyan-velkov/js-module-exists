"use strict";
import o from "ora";
import r from "chalk";
import e from "fs";
import t from "path";
export const moduleExists = (o) => {
  let r = t.dirname(""),
    s = e.readFileSync(`${r}/package.json`, "utf8"),
    l;
  return !!s.includes(o);
};
let defaultColors;
export const setTextColors = (o) =>
  (defaultColors = {
    success: o?.success || "#008000",
    error: o?.error || "#DC143C",
    warn: o?.warn || "#FFD700",
    info: o?.info || "#00FFFF",
  });
setTextColors();
export const moduleExistsWithText = (
  e,
  t = {
    success: {
      color: defaultColors.success,
      text: "",
      warn: { color: defaultColors.warn, text: "" },
      info: { color: defaultColors.info, text: "" },
    },
    error: {
      color: defaultColors.error,
      text: "",
      warn: { color: defaultColors.warn, text: "" },
      info: { color: defaultColors.info, text: "" },
    },
  }
) => {
  let s = r.hex(t.success?.color || defaultColors.success),
    l = r.hex(t.error?.color || defaultColors.error),
    c = o("Checking modules...").start();
  if (moduleExists(e)) {
    if (
      (c.succeed(s(t.success?.text || "Installed!")), t.success?.warn?.text)
    ) {
      let n = r.hex(t.success?.warn?.color || defaultColors.warn);
      c.warn(n(t.success?.warn?.text || ""));
    }
    if (t.success?.info?.text) {
      let f = r.hex(t.success?.info?.color || defaultColors.info);
      c.info(f(t.success?.info?.text || ""));
    }
    return c.stop(), !0;
  }
  if ((c.fail(l(t.error?.text || "Not installed")), t.error?.warn?.text)) {
    let a = r.hex(t.error?.warn.color || defaultColors.warn);
    c.warn(a(t.error?.warn.text || ""));
  }
  if (t.error?.info?.text) {
    let u = r.hex(t.error?.info.color || defaultColors.info);
    c.info(u(t.error?.info.text || ""));
  }
  return c.stop(), !1;
};
