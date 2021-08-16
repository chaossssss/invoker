用create-react-app引用less 一波三折
1. 执行 npm run eject 暴露出配置文件
这时候如果有报错，那么把文件提交到仓库
再less和less-loader安装
webpack.config.js
添加
// 添加 less 解析规则
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;


添加在rules里面 并且放在sass规则后面
// Less 解析配置
{
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
        {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        'less-loader'
    ),
    sideEffects: true,
},
{
    test: lessModuleRegex,
    use: getStyleLoaders(
        {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
            modules: true,
            getLocalIdent: getCSSModuleLocalIdent,
        },
        'less-loader'
    )
},


2. 本以为这样就可以了
结果package.json 里面的Babel配置被改掉了

"babel": {
    "presets": [
      [
        "react-app",
        {
          "runtime": "automatic"
        }
      ]
    ]
  }