matrix: 模型矩阵
matrixWorld: 世界矩阵
modelViewMatrix 视图矩阵
normalMatrix 模型矩阵的逆转置矩阵
https://segmentfault.com/a/1190000021817365
projectionMatrix— 将3D世界坐标系转换为2D屏幕坐标系
viewMatrix—PerspectiveCamera世界矩阵的逆
modelMatrix—Mesh的局部坐标矩阵
modelViewMatrix— view 和 model 矩阵的联合


贴图（Texture Mapping）


UV映射（UV Mapping）
Uv映射的作用就是将三维的问题放到二维来处理: 三维 – 二维uv平面--映射到三维空间
UV映射最典型的例子就是把一张地图映射到3D球体的地球仪上去。其本质上就是把平面图像的不同区块映射到3D模型的不同面上去。