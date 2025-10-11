import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      prettierConfig,
    ],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'no-console': 'warn',
      eqeqeq: 'warn',
      curly: 'warn',
      'no-else-return': 'warn',
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
