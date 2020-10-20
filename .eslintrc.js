module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    // parserOptions: {
    //   project: './tsconfig.json',
    // },
    plugins: ['@typescript-eslint', 'jest', 'security', 'node'],
    extends: [
      'plugin:you-dont-need-lodash-underscore/compatible',
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:jest/recommended',
      'plugin:jest/style',
      'plugin:security/recommended',
    ],
    rules: {
      '@typescript-eslint/ban-types': 'off',
      camelcase: 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variableLike', format: ['camelCase'] },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          prefix: ['T'],
        },
      ],
    },
  };