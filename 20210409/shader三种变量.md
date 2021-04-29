[shader三种变量类型（uniform，attribute和varying）](https://www.cnblogs.com/softimagewht/p/4750847.html)
[threejs中的着色器入门二](https://blog.csdn.net/qq_41741576/article/details/97895157)

vertexShader 顶点着色器
gl_Position 放置顶点坐标信息
fragmentShader 片元着色器
gl_FragColor 设置当前片点颜色


Uniforms变量 既可以传入顶点着色器，也可以传入片元着色器，包含了哪些在整个渲染过程中保持不变的变量，比如一个点光源的位置
Attributes变量 对应于每个顶点，它们只可以传入顶点着色器，比如每个顶点都具有一个颜色。Attributes变量和顶点的关系是一一对应的。
Varying变量 在顶点着色器中定义，传入给片元着色器的变量。为了确保这点，我们需要确保在两个着色器中变量的类型和命名完全一致。一个经典的应用是法线向量，因为在计算光照的时候需要用到法线。

```
<!--顶点着色器-->
<script id="vertexShader" type="x-shader/x-vertex">
  void main(){
    //最终顶点位置信息=投影矩阵*模型视图矩阵*每个顶点坐标
    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
  }
</script>
<!--片元着色器-->
<script id="fragmentShader" type="x-shader/x-fragment">
  void main(){
    //将任意一个像素色设置为该颜色RGBA（红色）
    gl_FragColor=vec4(1.0,0.0,1.0,1.0);//r,g,b,a
  }
</script>
var shaderMaterial=new THREE.ShaderMaterial({
  vertexShader:document.getElementById("vertexShader").textContent,
  fragmentShader:document.getElementById("fragmentShader").textContent
});

```



attributes：Object
接受如下形式的对象，{ “attribute1”: { value: []} } 指定要传递给顶点着色器代码的attributes；键为attribute修饰变量的名称，值也是对象格式，如{ value: [] }，value是固定名称，因为attribute相对于所有顶点，所以应该回传一个数组格式。在threejs中，只有bufferGeometry类型的能使用该属性。
.uniforms : Object
如下形式的对象：
{ “uniform1”: { value: 1.0 }, “uniform2”: { value: 2.0 } } 指定要传递给shader代码的uniforms；键为uniform的名称，值(value)是如下形式：
{ value: 1.0 } 这里 value 是uniform的值。名称必须匹配着色器代码中 uniform 的name，和GLSL代码中的定义一样。 注意，uniforms逐帧被刷新，所以更新uniform值将立即更新GLSL代码中的相应值。

.fragmentShader : String
片元着色器的GLSL代码。这是shader程序的实际代码。在上面的例子中， vertexShader 和 fragmentShader 代码是从DOM（HTML文档）中获取的； 它也可以作为一个字符串直接传递或者通过AJAX加载。

.vertexShader : String
顶点着色器的GLSL代码。这是shader程序的实际代码。 在上面的例子中，vertexShader 和 fragmentShader 代码是从DOM（HTML文档）中获取的； 它也可以作为一个字符串直接传递或者通过AJAX加载。




uniform mat4 viewProjMatrix // 投影+视图矩阵
uniform mat4 viewMatrix //视图矩阵
uniform vec3 lightPosition // 光源位置


```
<script id="vertexShader" type="x-shader/x-vertex">
//normal three.js内置法线， position three.js内置位置
varying vec3 vNormal;
void main() {
  // 将vNormal设置为normal，normal是Three.js创建并传递给着色器的attribute变量
  vNormal = normal;
  gl_Position = projectionMatrix *modelViewMatrix *vec4(position, 1.0);
}
</script>
```
normal 内置法线
position 内置位置


position	顶点位置	vec3
normal	法线向量	vec3
uv	纹理坐标	vec2