# js-module-exists

[![Follow me](https://img.shields.io/badge/sponsors-99+-orange.svg)](https://github.com/christiyan14) [![Sponsors](https://img.shields.io/badge/Follow-150-blue?logo=github&style=social.svg)](https://github.com/christiyan14) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/) [![Node Version](https://img.shields.io/badge/node-%3E%3D%2016.16.0-brightgreen.svg)](https://nodejs.org/en/)

![JS-MODULE_EXISTS](readme-images/logo.png)

**Checks if an es module/ npm package exists and returns a boolean value.**
**Also you can provide a nice terminal message which can be customized as you like.**

## Table of contents

- [Installation 🦾](#installation)
- [How to Use? 💻](#how-to-use)
- [Examples 🚀](#examples)
- [Developer Support 🔗 ](#developer-support)
- [Support my work ❤️ ](#buy-me-a-coffee)

---

## Installation

- Via npm:

```code
npm install js-module-exists --save-dev

```

- Via yarn:

```code
yarn add js-module-exists -D

```

## How to use?

#### API

| Method                     | Usage                                                                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **moduleExists()**         | Еasy to use a method that will return a boolean value after checking the module/ npm package.                                             |
| **moduleExistsWithText()** | Will return a boolean value if the module/ package exists. Also will provide a nice terminal message which can be customized as you like. |
| **setTextColors()**        | Sets default text colors for success, error, warn, and info messages. **Used only with moduleExistsWithText() method.**                   |

1. **moduleExists() method**

- Accepts string and returns a boolean value.

```js
import { moduleExists } from "js-module-exists";

if (moduleExists("some-npm-package-name")) {
  //=> true
} else {
  //=> false
}
```

2. **moduleExistsWithText() method**

   - **Info:** Easy to use fully customizable method for checking if the module/npm package exists. Coming with default terminal response. The message in the console (color, text ) can be changed to whatever value you want.

| Properties | Description                     | Return value |
| ---------- | ------------------------------- | ------------ |
| moduleName | module, npm package name        | boolean      |
| options    | Custamizable terminal response. | object       |

```js
import { moduleExistsWithText } from "js-module-exists";

moduleExistsWithText("some-npm-package-name");
```

![JS-MODULE_EXISTS](readme-images/1.png)

- with options

```js
import { moduleExistsWithText } from "js-module-exists";

moduleExistsWithText("some-npm-package-name", {
  success: {
    text: "Module exists!",
    warn: {
      text: "Don't forget to support my work!",
    },
    info: {
      text: `Information
      name: js-module-exists
      author: Krisityan Velkov`,
    },
  },
});
```

![JS-MODULE_EXISTS](readme-images/2.png)

## Examples:

Full lists of examples how to use **js-module-exists** whit all supported options:

- [Readme file](https://github.com/christiyan14/js-module-exists/blob/main/examples/Examples.md)

- [JS file](https://github.com/christiyan14/js-module-exists/blob/main/examples/example.js)

## Developer Support:

- If you saw some issue/bug 🐛 related to the specific release version.
- If you want some new feature or change to be added/implemented. 😊

Please, contact the creator of the **js-module-exists**, so he will be able to fix or improve it:

**Kristiyan Velkov**

**Email:** christiyanweb@gmail.com

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kristiyan-velkov-763130b3/)

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/christiyan14)

## Buy me a coffee

If you like my work, please :

1. Donate me a coffe ☕️:
   <a href="https://www.buymeacoffee.com/kristiyanvelkov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

2. Donate via Revolut QR code 💲:

   ![Revolut](readme-images/kristiyan.velkov-revolut.png)

Thanks a bunch for supporting me❣️

---

Copyright ©️2022. All rights reserved.
