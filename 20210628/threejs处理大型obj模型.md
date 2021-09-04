记录压缩obj模型过程
1.首先获得模型
2.用blender处理obj模型
3.使用node压缩，
安装
    "gltf-pipeline": "^3.0.2",
    "obj2gltf": "^3.1.0"
先运行`node run.js`
然后运行`gltf-pipeline -i model.gltf -d -t`
4.项目中使用
***
下载three.js项目
拷贝three.js/example/js/libs/draco文件夹到自己的项目下
***
```
load111() {
  let _this = this
  const loader = new GLTFLoader().setPath("/model/111/");
  
  var dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath( '/draco/' );//设置解压库文件路径
  loader.setDRACOLoader( dracoLoader );
  loader.load(
    "model-processed.gltf",
    (gltf) => {
      console.log("gltf",gltf)
      gltf.scene.scale.set(0.0001, 0.0001, 0.0001);
      gltf.scene.position.set(-10,1,10)
      gltf.scene.layers.set(0);
      _this.scene.add(gltf.scene);
    },
    (xhr) => {
      // called while loading is progressing
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    (error) => {
      // called when loading has errors
      console.error("An error happened", error);
    }
  );
},
```

