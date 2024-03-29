[threejs多边形贴图](https://blog.csdn.net/ALLENJIAO/article/details/84320386)

```
<html>
<head>
    <title>Three.js Geometry Texture</title>
    <style>
        body {
            margin: 0;
        }

        canvas {
            width: 100%;
            height: 100%
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/three@0.123.0/build/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.122.0/examples/js/controls/OrbitControls.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
</head>
<body>

<script>
    var floorData;
    var resizeRatio = 50;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(0, 100, 100);

    var renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x177FB3, 1);
    document.body.appendChild(renderer.domElement);


    var lightDirect = new THREE.DirectionalLight(0xf2f2f2, 0.8);//设置平行光源
    lightDirect.position.set(0, 200, 0);//设置光源向量
    scene.add(lightDirect);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);

    addFloor();

    render();

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    ;

    function addFloor() {
        $.getJSON("data/floorshape.json", function (result) {
            floorData = result.data;
            showAreas();
            showWall();
        });
    }


    function showWall() {

        var wallgeometry = new THREE.BoxGeometry(1, 1, 1);
        for (var i = 0; i < this.floorData.wall_segments.length; i++) {
            var seg = this.floorData.wall_segments[i];
            var start = this.floorData.wall_points[seg.start_idx];
            var end = this.floorData.wall_points[seg.end_idx];

            var a = new THREE.Vector2(start.px, start.py);
            var b = new THREE.Vector2(end.px, end.py);
            var v = b.sub(a);

            var wall_width = v.length() * resizeRatio, wall_height = seg.height * resizeRatio, wall_depth = 2;
            var material = new THREE.MeshBasicMaterial({color: 0x898989, transparent: true, opacity: 0.6});
            var wall = new THREE.Mesh(wallgeometry, material);
            wall.scale.x = wall_width;
            wall.scale.y = wall_height;
            wall.scale.z = wall_depth;

            wall.position.x = (start.px + end.px) / 2 * resizeRatio
            wall.position.y = wall_height / 2;
            wall.position.z = -(start.py + end.py) / 2 * resizeRatio;

            var angle = Math.atan2(v.y, v.x);
            wall.rotateY(angle);
            wall.castShadow = true;
            scene.add(wall);
        }
    }


    var areas = [];
    function showAreas() {
        for (var i = 0; i < this.floorData.areas.length; i++) {
            var area = this.floorData.areas[i];
            var areaPts = [];
            for (var idx = 0; idx < area.points.length; idx++) {
                var p = area.points[idx];
                var v = new THREE.Vector2(p.px * resizeRatio, -p.py * resizeRatio);
                areaPts.push(v);
            }
            var areaShape = new THREE.Shape(areaPts);
            var geometry = new THREE.ShapeGeometry(areaShape);
            var color = area.type == 2 ? '#729CB9' : area.color;
            var h = area.type == 2 ? 0 : 0.05 * resizeRatio + Math.random() * 0.05 * resizeRatio;
            var opacity = area.type == 2 ? 1 : 0.6;
            var material = new THREE.MeshBasicMaterial({
                color: color,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: opacity
            });
            var mesh = new THREE.Mesh(geometry, material);
            mesh.rotateX(Math.PI / 2);
            mesh.position.set(area.px * resizeRatio, h, -area.py * resizeRatio);
            mesh.receiveShadow = true;
            scene.add(mesh);


            mesh.userData.name = area.name;
            mesh.userData.objType = "area";
            mesh.userData.area = area;
            areas.push(mesh);

            if (area.rows && area.rows.length > 0) {
                getColRowMaterial(area, geometry, mesh);
            }

            if (area.type == 2) {

                //caculate main floor area and make the camera fix the size
                var b = new THREE.Box3().setFromObject(mesh);
                var camera_z = Math.max(b.max.z, b.max.x) / 0.9;
                var camera_y = Math.tan(Math.PI / 5) * Math.abs(camera_z);
                camera.position.set(b.max.x * 0.2, camera_y, camera_z);

                camera.lookAt(new THREE.Vector3(0, 0, 0));

            }

        }
    }

    function getColRowMaterial(area, geometry, mesh) {
        assignUVs(geometry);
        geometry.computeBoundingBox();

        var canvas = getColRowCanvas(area.rows, area.cols, geometry.boundingBox.size().x, geometry.boundingBox.size().y);
        var texture = new THREE.CanvasTexture(canvas);
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.y = -1;
        var material = new THREE.MeshPhongMaterial({map: texture, side: THREE.DoubleSide});
        mesh.material = material;
    }


    function getColRowCanvas(rows, cols, sizeWidth, sizeHeight) {
        var width = sizeWidth, height = sizeHeight;
        var fixSize = 16;
        if (rows.length * fixSize > sizeWidth) {
            var s = rows.length * fixSize / sizeWidth;
            width = rows.length * fixSize;
            height = sizeHeight * s;
        }
        else if (cols.length * fixSize > sizeHeight) {
            var s = cols.length * fixSize / sizeHeight;
            width = sizeWidth * s;
            height = cols.length * fixSize;
        }

        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        var rowNumber = rows.length + 1;
        var colNumber = cols.length + 1;
        var rowStep = height / rows.length;
        var colStep = width / cols.length;
        //background
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fefefe';
        ctx.fillRect(0, 0, width, height);

        var fontSize = parseInt(Math.min(rowStep, colStep) * 0.5)
        ctx.fillStyle = '#2891FF';
        ctx.font = fontSize + "px Arial";

        //rows
        ctx.beginPath();
        for (var i = 0; i < rowNumber; i++) {
            ctx.fillText(rows[i], 0, (i * rowStep) + rowStep * 0.8);
            ctx.moveTo(0, i * rowStep);
            ctx.lineTo(width, i * rowStep);
        }
        //columns
        for (var j = 0; j < colNumber; j++) {
            ctx.fillText(cols[j], j * colStep + colStep * 0.1, rowStep * 0.4);
            ctx.moveTo(j * colStep, 0);
            ctx.lineTo(j * colStep, height);
        }
        ctx.stroke();
        return canvas;
    }


    function assignUVs(geometry) {

        geometry.computeBoundingBox();

        var max = geometry.boundingBox.max,
                min = geometry.boundingBox.min;
        var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
        var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
        var faces = geometry.faces;

        geometry.faceVertexUvs[0] = [];

        for (var i = 0; i < faces.length; i++) {

            var v1 = geometry.vertices[faces[i].a],
                    v2 = geometry.vertices[faces[i].b],
                    v3 = geometry.vertices[faces[i].c];

            geometry.faceVertexUvs[0].push([
                new THREE.Vector2((v1.x + offset.x) / range.x, (v1.y + offset.y) / range.y),
                new THREE.Vector2((v2.x + offset.x) / range.x, (v2.y + offset.y) / range.y),
                new THREE.Vector2((v3.x + offset.x) / range.x, (v3.y + offset.y) / range.y)
            ]);
        }
        geometry.uvsNeedUpdate = true;
    }


</script>
</body>
</html>
```