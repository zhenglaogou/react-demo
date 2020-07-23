const
  dftCfg = require("gs-lint/eslint/.eslintrc"),
  cfg = Object.assign({}, dftCfg, {
    root: true,
    parser: "babel-eslint",
    extends: [
      ...(Array.isArray(dftCfg.extends) ? dftCfg.extends : [dftCfg.extends]),
      ...[
        // npm package eslint-config-react-app
        // https://www.npmjs.com/package/eslint-config-react-app
        "react-app"
      ]
    ],
    plugins: [
      // https://github.com/yannickcr/eslint-plugin-react
      "react"
    ],
    overrides: [
      // fix eslint Parsing error with some TypeScript syntax
      // borrowed from eslint-config-react-app
      {
        files: ["**/*.ts?(x)"],
        parser: "@typescript-eslint/parser",
        parserOptions: {
          ecmaVersion: 2018,
          sourceType: "module",
          ecmaFeatures: {
            jsx: true
          },

          // typescript-eslint specific options
          warnOnUnsupportedTypeScriptVersion: true
        },
        plugins: ["@typescript-eslint"]
      }
    ]
  });

cfg.globals = cfg.globals || {};
// 修改4个空格缩进为2个空格
cfg.rules.indent[1] = 2;

Object.assign(cfg.rules, {
  "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

  // http://eslint.cn/docs/rules/object-curly-spacing
  "object-curly-spacing": ["error",
    "never",
    {
      arraysInObjects: false,
      objectsInObjects: false
    }],

  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  // Prevent missing React when using JSX
  "react/react-in-jsx-scope": "error",
  // Prevent React to be marked as unused
  "react/jsx-uses-react": "error",
  // Prevent variables used in JSX to be marked as unused
  "react/jsx-uses-vars": "error"
});

module.exports = cfg;