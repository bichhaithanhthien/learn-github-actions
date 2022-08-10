module.exports = {
  root: true,
  env: { node: true },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: { parser: 'babel-eslint' },
  rules: {
    'array-bracket-newline': ['error', { multiline: true }],
    'array-element-newline': ['error', 'consistent'],
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'comma-spacing': ['error', { before: false, after: true }],
    'curly': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'no-console': 'error',
    'no-multi-spaces': 'error',
    'object-curly-newline': ['error', { consistent: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'vue/valid-v-slot': 'off',
  },
  overrides: [
    {
      files: ['**/src/**/*.spec.js'],
      env: { jest: true },
    },
  ],
}
