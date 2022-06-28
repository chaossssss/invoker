import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapboxLanguage from '@mapbox/mapbox-gl-language'


mapboxgl.setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js"
);

      let map = new this.$mapboxgl.Map({
        container: 'mapbox',
        style: "mapbox://styles/mapbox/streets-v11",
        center: [104.07, 30.67],
        zoom: 5,
      })

  // 设置语言
  var language = new MapboxLanguage({
    defaultLanguage: "zh-Hans"
  });
  map.addControl(language);



  https://blog.csdn.net/weixin_47487643/article/details/120436906