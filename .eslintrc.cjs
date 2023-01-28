/* eslint-env node */
module.exports = {
  root: true,
  // parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:@peeky/recommended',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-irregular-whitespace': 0,
  },
}
