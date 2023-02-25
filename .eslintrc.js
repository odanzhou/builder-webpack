module.exports = {
  "parser": "esprima",
  // "parserOptions": {
  //   "ecmaVersion": 11,
  //   "sourceType": "module",
  //   "ecmaFeatures": {
  //     "jsx": true
  //   }
  // },
  "extends": "airbnb-base", // 继承多个用数组
 // "extends": "eslint:recommended",
  "rules": {
    "eol-last": "off",
    "semi": "off",
    "no-console": 0,
    "func-names": 0,
  },
  "env": {
    "node": true,
    "es6": true,
  }
}