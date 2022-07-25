module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  overrides: [
    {
      rules: {
        "vue/multi-word-component-names": 0,
      },
      files: [
        "src/views/**/*.vue",
      ],
    },
  ],
}
