configureWebpack: config => {
  config["externals"] = {
    AMap: "AMap" // 高德地图配置
  };
}

在页面中引用
import AMap from 'AMap'