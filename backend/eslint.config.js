import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import jsdoc from 'eslint-plugin-jsdoc'

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      jsdoc.configs['flat/recommended-typescript'],
    ],
    files: ['src/**/*.{ts,js}', 'tests/**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.node,
      sourceType: 'module',
    },
    plugins: {
      jsdoc,
    },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/explicit-function-return-type': 'error',
      'jsdoc/require-jsdoc': [
        'error',
        {
          publicOnly: true,
          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true,
          },
        },
      ],
      'jsdoc/require-description': 'error',
      'jsdoc/check-tag-names': [
        'error',
        {
          definedTags: ['route', 'interface', 'module', 'component'],
        },
      ],
      'jsdoc/tag-lines': ['error', 'any', { startLines: 1 }],
    },
  }
)
