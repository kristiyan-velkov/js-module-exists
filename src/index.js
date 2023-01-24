import moduleExists from "./js/module-exists.js";
export { moduleExists } from "./js/module-exists.js";
export {
  moduleExistsWithText,
  setTextColors,
} from "./js/module-exists-with-text.js";

if (moduleExists("@gfk/style")) {
  console.log(true);
} else {
  console.log(false);
}
