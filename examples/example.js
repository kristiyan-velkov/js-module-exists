import {
  moduleExists,
  moduleExistsWithText,
  setTextColors,
} from "js-module-exists";

/*
I. ModuleExists() Method examples
    
    Info: js-module-exists was installed previously.
    Expected output: true
*/

if (moduleExists("js-module-exists")) {
  //=> true
} else {
  //=> false
}

/*
    
II. ModuleExistsWithText() Method examples

    Info: js-module-exists was installed previously.
    Expected output: true 
 */

// _Sample use without if block
moduleExistsWithText("js-module-exists");
//=> Terminal output: Installed!

// _Sample use with if block
if (moduleExistsWithText("js-module-exists")) {
  //=> true
  //=> Terminal output: Installed!
} else {
  //=> false
  //=> Terminal output: Not Installed!
}

// _Use with options provided

moduleExistsWithText("js-module-exists", {
  success: {
    color: "#ffffff", // string of terminal emulators supported hex color || defaultColors.success
    text: "Module exists!", // string
    warn: {
      color: "#DEADED", // string of terminal emulators supported hex color || defaultColors.warn
      text: "Some exists warning text.", // string
    },
    info: {
      color: "#00cafc", // string of terminal emulators supported hex color || defaultColors.info
      text: "Some exists info text!", // string
    },
  },
  error: {
    color: "#ffffff", // string of terminal emulators supported hex color || defaultColors.error
    text: "Module not exist!", // string
    warn: {
      color: "#DEADED", // string of terminal emulators supported hex color || defaultColors.warn
      text: "Some exists warning text.", // string
    },
    info: {
      color: "#00cafc", // string of terminal emulators supported hex color || defaultColors.info
      text: "Some exists info text!", // string
    },
  },
});

/* 
    //=> Terminal output:
    
    ✔ Module exists!
    ⚠ Some exists warning text.
    ℹ Some exists info text!
  */

// _All options object properties

/*
        IMPORTANT: All of the object properties do not need to be provided only those which you want to modify!!!
    
        options: {
            success: {
                color: string of terminal emulators supported hex color,
                text: string,
                warn: {
                    color: string of string of terminal emulators supported hex color,
                    text: string,
                },
                info: {
                    color: string of terminal emulators supported hex color,
                    text: string,
                },
            },
            error: {
                color: string of terminal emulators supported hex color,
                text: string,
                warn: {
                    color: string of terminal emulators supported hex color,
                    text: string,
                },
                info: {
                    color: string of terminal emulators supported hex color,
                    text: string,
                },
            }
    
        */

/*

EXAMPLE OF THE MOST POPULAR TERMINAL COLORS:

    black - #000000
    red	- #cc0000
    green - #4e9a06
    yellow	- #c4a000
    blue* - #729fcf
    magenta - #75507b
    cyan - #06989a
    white - #d3d7cf
    bright black - #555753
    bright red - #ef2929
    bright green - #8ae234
    bright yellow - #fce94f
    bright blue* - #32afff
    bright magenta - #ad7fa8
    bright cyan	- #34e2e2
    bright white* - #ffffff
*/

// _Change only the text of the success message
/* 
      IMPORTANT: 
      All of the examples for success messages are relevant to the use of error messages. Will use the default hex color for success, error, info, and warn.
If you want to change the color you need to add provided color property.
  
  */

moduleExistsWithText("js-module-exists", {
  success: {
    text: "Module exists!", // string
  },
});

/* 
    //=> Terminal output:
  
    ✔ Module exists!
  */

// _Change only the color of the success message
moduleExistsWithText("js-module-exists", {
  success: {
    color: "#fff",
  },
});

/* 
    //=> terminal success text color: #fff
    //=> Terminal output:
  
    ✔ Module exists!
  */

// _Add info message

/* To show info message the text is mandatory! For color will use the default one. */

moduleExistsWithText("js-module-exists", {
  success: {
    color: "#DEADED",
    info: {
      text: "Some info text!",
    },
  },
});

/* 
    //=> terminal success text color: #DEADED
    //=> Terminal output:
  
    ✔ Installed!
    ℹ Some info text!
  */

// _Add info and warn message

/* To show info and warn message the text is mandatory! For color will use the default one. */

moduleExistsWithText("js-module-exists", {
  success: {
    color: "#000",
    text: "Module exists!",
    info: {
      color: "#ccc",
      text: "Some info text!",
    },
    warn: {
      text: "Some warning text!",
    },
  },
});

/* 
    //=> terminal success text color: #000
    //=> terminal info text color: #ccc
    //=> Terminal output:
    
    ✔ Module exists!
    ⚠ Some warning text.
    ℹ Some info text!
  */

/*
    III. setTextColors() Method
    
    Info: Used only with moduleExistsWithText() method to change default colors.
    Expected result: Set default colors for success, error, info, warn or some of them.
    Option: Can change only for specific text output( example success) the rest will be by default colors.
  */

// _ Example of use

// Before using moduleExistsWithText();

setTextColors({
  sucess: "#fff",
  error: "#000",
  info: "#00cafc",
  warn: "#DEADED",
});

/* Expected result: 
   Default colors was changed to:
    sucess: "#fff"
    error: "#000"
    info: "#00cafc"
    warn: "#DEADED"
*/

moduleExistsWithText("js-module-exists");

/* 
    //=> terminal success text color: #fff
    //=> Terminal output:
    
    ✔ Installed!
*/

// _ Example of use with option color change in moduleExistsWithText() method

setTextColors({
  sucess: "#fff",
});

/* Expected result: 
     Default colors was changed to:
      sucess: "#fff"
  */

moduleExistsWithText("js-module-exists", { success: { color: "#000" } });

/* 
      //=> Terminal success text color: #000
      //=> Terminal output:
      
      ✔ Installed!
  */
