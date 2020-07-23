const
  path = require("path"),
  paths = require("react-scripts/config/paths");

function resolve (dir) {
  return path.join(__dirname, "./", dir);
}

// 修改CRA build输出目录
// https://segmentfault.com/q/1010000019904178/
paths.appBuild = resolve("dist");

function webpack (config) {
  // 解决tsconfig paths别名丢失问题
  // 添加IDE对于模块别名智能识别支持
  // https://blog.csdn.net/chrislincp/article/details/97312235
  // https://www.typescriptlang.org/v2/en/tsconfig#paths

  config.resolve.alias = {
    "@": resolve("src")
  };

  // 开启babelrc
  // https://blog.csdn.net/weixin_39836173/article/details/86110011
  // https://github.com/ant-design/babel-plugin-import
  if (config.module && config.module.rules) {
    let rule = config.module.rules[2];
    rule = rule.oneOf && rule.oneOf[1];

    if (rule && rule.options) {
      rule.options.babelrc = true;
    }
  }

  return config;
}

/**
 * create-react-app配置重写
 * @see https://github.com/timarney/react-app-rewired
 */
module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack
};
