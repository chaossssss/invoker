对比原生的json文件
把转换完成的json重新引用

// 对世界地图的json文件中的经纬度坐标进行处理(记得落点经度换算)
const processLng = (lng) => {
  if (lng > -30) {
    lng = lng - 180;
  } else {
    lng = lng + 180;
  }
  return lng;
};
//格林兰岛表现怪异
const processLngGe = (lng) => {
  return lng + 180;
};
var WJ = WORLDJSON.features.map((district, index) => {
  if (district.properties.name == "Greenland") {
    // WORLDJSON.features.splice(index, 1)
    if (district.geometry.type == "Polygon") {
      district.geometry.coordinates.map((border) => {
        border.map((coord) => {
          coord[0] = processLngGe(coord[0]);
        });
      });
    } else {
      district.geometry.coordinates.map((border) => {
        border.map((coordinates) => {
          coordinates.map((coord) => {
            coord[0] = processLngGe(coord[0]);
          });
        });
      });
    }
  } else {
    if (district.geometry.type == "Polygon") {
      district.geometry.coordinates.map((border) => {
        border.map((coord) => {
          coord[0] = processLng(coord[0]);
        });
      });
    } else {
      district.geometry.coordinates.map((border) => {
        border.map((coordinates) => {
          coordinates.map((coord) => {
            coord[0] = processLng(coord[0]);
          });
        });
      });
    }
  }
  return district
});
console.log("WJ",WJ)
WORLDJSON.features = WJ
console.log("new",JSON.stringify(WORLDJSON))