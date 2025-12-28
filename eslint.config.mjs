import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Reactのインポートいらん
      "react/prop-types": "off",        // propsの型チェックいらん
      "no-unused-vars": "warn",         // 使ってない変数があってもエラー（赤線）にせず警告（黄色）にする
      "react/no-unescaped-entities": "off", // ' とか " をそのまま書いても怒られない
      "@next/next/no-img-element": "warn",  // <img>タグ使っても、エラーじゃなく「NextのImageの方がええで」くらいの警告にする
    },
  },
]);
