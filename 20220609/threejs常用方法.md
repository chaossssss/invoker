[THREEJS常用方法](https://blog.csdn.net/lgdaren/article/details/119727061)

var geometry = new THREE.BoxGeometry(50,25,25);
console.log("几何体顶点位置坐标数据", geometry.vertices)
console.log("几何体三角形", geometry.faces)
console.log("几何体UV坐标", geometry.faceVertexUvs[0])

var v1 = new THREE.Vector3(3,5,4)
console.log("向量x分量", v1.x)
<!-- 重置向量的y分量 -->
v1.y = 80
v1.set(2,4,8)

控制台查看Threejs对象位置、缩放属性的值
mesh.position.set(100,20,330)
console.log("对象位置属性", mesh.position)
console.log("对象缩放属性", mesh.scale)

克隆.clone()和复制.copy()
mesh.position.set(100,20,300)

var p1 = new THREE.Vector3(10, 20, 15)
var v1 = p1.clone()