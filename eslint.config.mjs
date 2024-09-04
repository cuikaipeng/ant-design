// eslint.config.mjs
import antfu from '@antfu/eslint-config';

export default antfu({
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/_site/**',
    '**/es/**',
    '**/lib/**',
    '**/.dumi/tmp/**',
    '**/.dumi/tmp-production/**',
    '**/*.snap',
    '**/*.md',
  ],
  type: 'lib',
  stylistic: false,
  typescript: true,
  react: true,
  rules: {
    'node/prefer-global/process': 'off',
    'jsdoc/empty-tags': 'off',
    'ts/no-require-imports': 'off',
    'ts/explicit-function-return-type': 'off',
    'unicorn/prefer-number-properties': 'off',
    'test/prefer-lowercase-title': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'ts/ban-ts-comment': 'off', // TODO: remove this
    'react/prefer-destructuring-assignment': 'off', // TODO: remove this
  },
}, {
  files: ['**/*.test.ts', 'tests/**/*', '**/*.test.tsx', 'components/*/demo/*.tsx'],
  rules: {
    'react/no-create-ref': 'off',
    'no-console': 'off',
    'unicorn/consistent-function-scoping': 'off',
  },
}, {
  files: ['.dumi/**/*'],
  rules: {
    'react-refresh/only-export-components': 'off', // TODO: remove this
    'react-dom/no-dangerously-set-inner-html': 'off', // TODO: remove this
  }
});
