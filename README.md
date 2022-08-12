# js-module-exists

[![Follow me](https://img.shields.io/badge/sponsors-99+-orange.svg)](https://github.com/christiyan14) [![Sponsors](https://img.shields.io/badge/Follow-150-blue?logo=github&style=social.svg)](https://github.com/christiyan14) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/) [![Node Version](https://img.shields.io/badge/node-%3E%3D%2016.16.0-brightgreen.svg)](https://nodejs.org/en/)

Checks if an es module/ npm package exists in the project.

![Example](assets/images/module-exists.gif)

## Table of contents

- [Installation 🦾](#installation)
- [How to Use? 💻](#how-to-use)
- [Developer Support 🔗 ](#developer-support)
- [Support my work ❤️ ](#buy-me-a-coffee)

---

## Documentation

- Simple check which will return boolean value if the module exist or not.

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

| Method                     | Usage                                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **moduleExists()**         | Easy to use method which will return boolean value after check the module/ npm package / file exists. Can be used to simple checks.   |
| **moduleExistsWithText()** | Will return boolean value if the module/ package exists. Also will provide nice terminal message which can be cusstimize as you like. |
| **setTextColors()**        | Set default text colors for success, erorr, warn and info messages. **Used only with moduleExistsWithText() method.**                 |

1. **moduleExists() method**

Accepts string argument and return boolean value.
moduleExists("some-npm-package-name") | return bolean true or false.

| Properties | Description              | Return value |
| ---------- | ------------------------ | ------------ |
| moduleName | module, npm package name | boolean      |

```js
import { moduleExists } from "js-module-exists";

if (moduleExists("some-npm-package-name")) {
  //=> true
} else {
  //=> false
}
```

2. **moduleExistsWithText() method**

   - **Info:** Easy to use fully custamizable method for checking if the the module/npm package/ file exist.Comming with default terminal response. The message in the console (color, text ) can be changed to whatever value you want.
     This method is fully customizable to your preferencess.

   More info in examples bellow:

| Properties | Description                  | Return value |
| ---------- | ---------------------------- | ------------ |
| moduleName | module, npm package name     | boolean      |
| options    | Custamize terminal response. | object       |

```js
import { moduleExistsWithText } from "js-module-exists";

moduleExistsWithText("some-npm-package-name");
```

- **Example of usages**:

  - default

  ```js
  import { moduleExistsWithText } from "js-module-exists";

  moduleExistsWithText("some-npm-package-name");
  ```

  - Customization

  ```js
  import { moduleExistsWithText } from "js-module-exists";

  moduleExistsWithText("some-npm-package-name");
  ```

  **Return:**

## Developer Support:

- If you saw some issue/bug 🐛 related to the specific release version.
- If you want some new feature or change to be added/implemented. 😊

Please, contact the creator of the **js-module-exists**, so he will be able to fix or improve it:

**Christiyan Velkov**

**Email:** christiyan.velkov@gmail.com

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kristiyan-velkov-763130b3/)

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/christiyan14)

## Buy me a coffee

If you like my work, please :

- ⭐ this repository to motivate me to work stronger on new features.
- Donate me a coffe ☕️:

- <a href="https://www.buymeacoffee.com/kristiyanvelkov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

- Donate via Revolut QR code 💲:

- ![Revolut](assets/images/kristiyan.velkov-revolut.png)

Thanks a bunch for supporting me❣️

---

Copyright ©️2022. All rights reserved.

```

```
