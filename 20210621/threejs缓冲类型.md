var geometry = new THREE.BoxGeometry(10, 8, 9);
console.log('几何体数据结构',geometry);
console.log('顶点位置数据',geometry.vertices);
console.log('顶点纹理坐标',geometry.faceVertexUvs);
console.log('几何体三角形信息',geometry.faces);



var geometry = new THREE.BoxBufferGeometry(7, 6, 8);
console.log('几何体数据结构',geometry);
console.log('顶点位置、法向量、UV、颜色顶点等数据集合',geometry.attributes);
console.log('顶点位置数据',geometry.attributes.position);
console.log('顶点索引数据',geometry.index);