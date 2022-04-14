module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react-hooks",
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react-hooks/rules-of-hooks": 'error',
        "react-hooks/exhaustive-deps": 'off'
    },
  
}
