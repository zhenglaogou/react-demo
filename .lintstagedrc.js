/**
 * @see https://github.com/okonet/lint-staged#configuration
 * PATH="/usr/local/bin:$PATH"
 */
module.exports = {
  "./src/**/*.{js,jsx,ts,tsx}": "eslint",
  "./src/**/*.scss": "stylelint"
};