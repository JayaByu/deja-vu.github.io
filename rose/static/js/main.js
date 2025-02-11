var container;
var camera, controls, scene, renderer;
var effect;
var start = Date.now();

init();

function init() {
    var width = window.innerWidth || 2;
    var height = window.innerHeight || 2;

    container = document.getElementById("ascii-container");

    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.y = 0;
    camera.position.z = 2000;

    controls = new THREE.TrackballControls(camera);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    var light = new THREE.PointLight(0xffffff);
    light.position.set(500, 500, 500);
    scene.add(light);

    var loader = new THREE.OBJLoader();
    loader.load(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/253981/testrosentitled.obj",
        function (gltf) {
            rose = gltf;
            rose.scale.set(400, 400, 400);
            rose.position.set(-200, -200, 0);
            scene.add(rose);
            animate();
        },
        undefined,
        function (e) {
            console.error(e);
        }
    );

    renderer = new THREE.CanvasRenderer();
    renderer.setSize(width, height);

    effect = new THREE.AsciiEffect(renderer);
    effect.setSize(width, height);
    container.appendChild(effect.domElement);

    window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    effect.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    var timer = Date.now() - start;
    rose.rotation.y = timer * 0.0008;
    controls.update();
    effect.render(scene, camera);
}

