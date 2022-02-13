[shader](https://zhuanlan.zhihu.com/p/145890220)
<script id="vertexShader" type="x-shader/x-vertex">

  precision mediump float;    // 精度
  precision mediump int;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;  // 只读变量

  attribute vec3 position;  // 

  varying vec3 vPosition; // varying 将顶点着色器传给片元着色器

  void main() {

      vPosition = position;   // 将attribute的赋值给varying
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );   // 通过矩阵运算，计算当前顶点在裁剪空间坐标点

  }

</script>

<script id="fragmentShader" type="x-shader/x-fragment">

  precision mediump float;
  precision mediump int;

  uniform float ratio;

  varying vec3 vPosition;

  void main() {
      vec3 center = vec3( 0.0,0.0,0.0 );  // 定义圆心
      float dist=  distance(vPosition,center)/100.0;   // 内置distance函数计算 当前顶点位置到圆心的位置
      dist = clamp(dist,0.0,1.0);   // 转化为(0-1)的区间
      float color = 1.0-dist ;   // 创建颜色值
      gl_FragColor =  vec4( color*ratio, color*ratio,0.0,dist );  // 顶点着色输出

  }

</script>


gl_Position 和 gl_FragColor glsl预定义的变量不用声明