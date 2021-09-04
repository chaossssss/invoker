.eslintrc.js
globals: {
  AMap: true,
  AMapUI:true
},


vue.config.js
configureWebpack: config => {
  config.externals = { AMap: 'AMap' }
}


创建Amap.d.ts