[three.js使用Shadertoy的着色器](https://blog.csdn.net/lin5165352/article/details/97640798)
[将ShaderToy中的着色器移至Three.js](https://blog.csdn.net/weixin_34327223/article/details/91386851)

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;

    // Time varying pixel color
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));

    // Output to screen
    fragColor = vec4(col,1.0);
}

var vertexShader = `
      varying vec2 vUv;
      void main(){
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
  `;
  var fragmentShader = `
      varying vec2 vUv;
      uniform float iTime;
      uniform vec3 iResolution;
      void main(){
              vec3 col = 0.5 + 0.5*cos(iTime+vUv.xyx+vec3(0,2,4));
              gl_FragColor = vec4(col,1.0);
          }
  `;
  var uniforms = {
      iTime:{value:0},
      iResolution:  { value: new THREE.Vector3( 40,40,1) },
  };
  var shadertoy = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side:2,
  });
  var plane = new THREE.Mesh(planeGeo, shadertoy);
  setInterval(()=>{
              uniforms.iTime.value += 0.1;
          },20);


