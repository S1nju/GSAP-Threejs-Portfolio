import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { ReactThreeFiber } from '@react-three/fiber';
import unused from 'eslint-plugin-unused-imports'; // Import unused-imports plugin

export default tseslint.config(
  { ignores: ['dist', '**/node_modules/**'] }, // Ignore dist and node_modules
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@react-three': ReactThreeFiber,
      'unused-imports': unused, // Add unused-imports plugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Unused imports rule
      'unused-imports/no-unused-imports': 'error', // Automatically remove unused imports
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used', // Don't warn for unused function arguments
          ignoreRestSiblings: false,
        },
      ], // Warn about unused variables
      // Make sure unused variables in specific situations don't get flagged
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true, // Avoid warnings for rest siblings (spread operator)
        },
      ],
    },
  },
);
