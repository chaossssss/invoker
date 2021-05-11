[Three.js加载和使用纹理-重复映射](http://www.myjscode.com/page/three/10/8.html)
wrapS x轴方向
wrapT y轴方向

THREE.Repeating 允许重复自己
THREE.ClampToEdgeWrapping 纹理的边缘会被拉伸


设置THREE.RepeatWrapping可以通过下面的方式设置

cube.material.map.repeat.set(repeatX, repeatY);
设置THREE.ClampToEdgeWrapping需要

cube.material.map.needsUpdate = true;