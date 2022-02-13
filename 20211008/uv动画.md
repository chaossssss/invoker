[Three.js着色器——UV动画](http://www.yanhuangxueyuan.com/doc/three.js/shaderanimationuv.html)


var texture = textureLoader.load()
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

function render() {
  texture.offset.x -= 0.001
  texture.offset.y -= 0.001
  group.rotateY(-0.005)
}



uniform变量更新
// 声明一个时间变量用来控制UV动画
uniform float time;
// 声明一个纹理对象变量
uniform sampler2D texture
// 顶点片元化后有多少个片元就有多少个纹理坐标数据uVu
varying vec2 vUv
void main() {
  vec2 newT = vUv + vec2(-0.02, 0.02) * time
  // 通过偏移后的纹理坐标newT采样像素
  gl_FragColor = texture2D(texture, newT)
  // 大气层整体透明度增加
  gl_FragColor.a *= 0.6
}


uniforms: {
  time: {
    value: 0.0
  }
}

var T = new THREE.Clock()
function render() {
  var deltaTime = T.getDelta()
  material.uniforms.time.value += deltaTime
}