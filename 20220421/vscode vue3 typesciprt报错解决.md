[vscode vue3 typesciprt报错解决](https://blog.csdn.net/qq_38299934/article/details/124275555)


.vscode 文件夹 添加 settings.json
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": false
  },
  // "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false,
  "eslint.enable": true,
  "eslint.options": {
    //指定vscode的eslint所处理的文件的后缀
    "extensions": [".js", ".jsx", ".ts", ".tsx", ".vue"]
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.format.enable": true,

  "typescript.updateImportsOnFileMove.enabled": "always",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      // 保存时自动格式化
      "source.fixAll.eslint": true
    }
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      // 保存时自动格式化
      "source.fixAll.eslint": true
    }
  },
  // .tsx
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      // 保存时自动格式化
      "source.fixAll.eslint": true
    }
  },
  "[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    // "editor.defaultFormatter": "Wscats.vue",
     "editor.formatOnSave": true,
    // "editor.codeActionsOnSave": {
    //   "source.fixAll.eslint": false
    // }
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "vetur.validation.script": false,
  "vetur.validation.template": false,
  "vetur.validation.style": false,
  "typescript.tsdk": "node_modules/typescript/lib",
}
```
