//data value
const form = document.getElementById('form');
const person = {
	name: form.querySelector('[name="name"]'),
	surname: form.querySelector('[name="surname"]'),
	age: form.querySelector('[name="age"]'),
	card: form.querySelector('[name="card"]'),
	select: form.querySelector('[id="select"]'),
};
let textOutputFunction = (a) => (document.querySelector('.container_text').innerHTML = a);
let conclusionSum = (a) => (document.querySelector('.container_text').innerHTML += a);
// array persons=============================================================
let arrya = [];
// list person===============================================================
document.querySelector("#list").onclick = function () {
	textOutputFunction('');
	for (key of arrya) {
		let indexKey = arrya.indexOf(key) + 1;
		conclusionSum(("visitor " + ' ' + "№" + indexKey));
		for (i in key) {
			conclusionSum((' ' + key[i] + ''));
		}
		conclusionSum('</br>');
	}
// children's filter
const result = arrya.filter(word => word.age < 16);
console.table(result);
};
// delete()
function Delete() { textOutputFunction('') };
// editing participants ======================================================
document.querySelector("#editing").onclick = function () {
	let valueIndex = form.querySelector('[name="index"]').value - 1;
	if (valueIndex > -1 && valueIndex < arrya.length) {
		const nevPlayerData = {
			name: person.name.value,
			surname: person.surname.value,
			age: person.age.value,
			card: person.card.value,
			select: person.select.value,
		};
		let sum = (arrya[valueIndex] = nevPlayerData);
		textOutputFunction('');
		for (i in sum) {
			conclusionSum((' ' + sum[i] + ''));
		}
	} else {
		textOutputFunction(('<h1>Incorrect input</h1>'));
	};
};
// saving data to an array ===================================================
function savingDataToAnArray() {
	let personName = form.querySelector('[name="name"]').value,
	personAge = form.querySelector('[name="age"]').value,
	personSurname = form.querySelector('[name="surname"]').value,
	personCard = form.querySelector('[name="card"]').value,
	Cardd = form.querySelector('[name="card"]').value;
	if (personName != '' && personAge < 100 && personAge > 6 && Cardd.length > 4 && Cardd.length < 10 ) {
		const values = {
			name: person.name.value,
			surname: person.surname.value,
			age: person.age.value,
			card: person.card.value,
			select: person.select.value,
		};
		arrya.push(values);
		console.table("visitor" + arrya.length, values);
	} else { textOutputFunction(('<h1>Enter the name</h1> <h1>(follow the input restrictions)</h1>')) };
	for (let i = 0; i < arrya.length - 1; i++) {
		let objectKey = arrya[i],
		valuesSurnameName = objectKey.name + objectKey.surname,
		valuesCard = objectKey.card,
		personSurnameName = personName + personSurname;
		if (valuesSurnameName.toUpperCase().replace(/\s+/g, '').trim() == personSurnameName.toUpperCase().replace(/\s+/g, '').trim() || valuesCard == personCard) {
			arrya.splice(arrya.length - 1, 1)
			textOutputFunction(('<h1>This person exists</h1>'));
		} else {
			textOutputFunction(('<h1>Person added</h1>'));
		};
	};
};
// function to remove an element from the array ===============================
function deleteItem() {
	let namberImet = form.querySelector('[name="index_three"]').value - 1;
	if (namberImet > -1 && namberImet < arrya.length) {
		let deleteItem = arrya.splice(namberImet, 1)[0];
		textOutputFunction('');
		conclusionSum('Member removed ' + ' №' + `${namberImet - 1}`);
		for (i in deleteItem) {
			conclusionSum((' ' + deleteItem[i] + ''));
		}
	} else { textOutputFunction(('<h1>Incorrect input</h1>')) };
};
//number search function=======================================================
function playerFindByNumber() {
	let index = form.querySelector('[name="index_four"]').value - 1;
	if (index > -1 && index < arrya.length) {
		let arr = arrya[index]
		textOutputFunction('');
		for (i in arr) {
			conclusionSum((' ' + arr[i] + ''));
		}
	} else { textOutputFunction(('<h1>Incorrect input</h1>')) };
};
//search function==============================================================
function searchByName() {
	let index = form.querySelector('[name="index_search"]').value;
	for (let i = 0; i < arrya.length; i++) {
		let objectKey = arrya[i],
			initialsNameSurname = objectKey.name + objectKey.surname,
			initialsSurnameName = objectKey.surname + objectKey.name,
			initialsSurname = objectKey.surname,
			initialsCard = objectKey.card;
		if (initialsNameSurname.toUpperCase().replace(/\s+/g, '').trim() == index.toUpperCase().replace(/\s+/g, '').trim() || initialsSurname.toUpperCase().replace(/\s+/g, '').trim() == index.toUpperCase().replace(/\s+/g, '').trim() || initialsSurnameName.toUpperCase().replace(/\s+/g, '').trim() == index.toUpperCase().replace(/\s+/g, '').trim() || initialsCard == index) {
			textOutputFunction('');
			for (i in objectKey) {
				conclusionSum((' ' + objectKey[i] + ''));
			};
		} else { textOutputFunction(('<h1>Incorrect input</h1>')) };
	};
};

// ======================================================= animated screensaver ======================================================
const portalVertexShader = document.getElementById("portalVertexShader").
textContent;
const portalFragmentShader = document.getElementById("portalFragmentShader").
textContent;

const firefliesVertexShader = document.getElementById("firefliesVertexShader").
textContent;
const firefliesFragmentShader = document.getElementById(
"firefliesFragmentShader").
textContent;

const debugObject = {
  clearColor: "#1e2243",
  portalColorStart: "#b91fac",
  portalColorEnd: "#ffebf3" };


// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Loaders
 */
// Texture loader
const textureLoader = new THREE.TextureLoader();

// GLTF loader
const gltfLoader = new THREE.GLTFLoader();

const bakedTexture = textureLoader.load(
"https://assets.codepen.io/22914/baked-02.jpg");

bakedTexture.encoding = THREE.sRGBEncoding;

/**
 * Materials
 */

// baked material
const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });

// Do not flip the Y axes of the texture which is on by default for some reason
bakedTexture.flipY = false;

// Pole light material
const poleLightMaterial = new THREE.MeshBasicMaterial({ color: "#f0bf94" });

// PortalLightMaterial
const portalLightMaterial = new THREE.ShaderMaterial({
  vertexShader: portalVertexShader,
  fragmentShader: portalFragmentShader,
  transparent: false,
  blending: THREE.AdditiveBlending,
  uniforms: {
    uTime: { value: 0 },
    uColorStart: { value: new THREE.Color(debugObject.portalColorStart) },
    uColorEnd: { value: new THREE.Color(debugObject.portalColorEnd) } } });



/**
 * Model
 */
gltfLoader.load("https://assets.codepen.io/22914/portal-2.glb", gltf => {
  const bakedMesh = gltf.scene.children.find(child => child.name === "baked");
  bakedMesh.material = bakedMaterial;

  const portalLight = gltf.scene.children.find(
  child => child.name === "portalCircle");

  portalLight.material = portalLightMaterial;
  gltf.scene.children.
  filter(child => child.name.includes("lampLight")).
  forEach(light => {
    light.material = poleLightMaterial;
  });

  scene.add(gltf.scene);
});

/**
 * Fireflies
 */

// Geometry
const firefliesGeometry = new THREE.BufferGeometry();
const firefliesCount = 30;
const positionArray = new Float32Array(firefliesCount * 3);
const scaleArray = new Float32Array(firefliesCount);
for (let i = 0; i < firefliesCount; i++) {
  new THREE.Vector3(
  (Math.random() - 0.5) * 4,
  Math.random() * 1.5,
  (Math.random() - 0.5) * 4).
  toArray(positionArray, i * 3);
  scaleArray[i] = Math.random();
  scaleArray[i] = Math.random();
}
firefliesGeometry.setAttribute(
"position",
new THREE.BufferAttribute(positionArray, 3));

firefliesGeometry.setAttribute(
"aScale",
new THREE.BufferAttribute(scaleArray, 1));


const firefliesMaterial = new THREE.ShaderMaterial({
  vertexShader: firefliesVertexShader,
  fragmentShader: firefliesFragmentShader,
  transparent: true,
  uniforms: {
    uTime: { value: 0 },
    uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    uSize: { value: 100 } },

  blending: THREE.AdditiveBlending,
  depthWrite: false });

const fireflies = new THREE.Points(firefliesGeometry, firefliesMaterial);
scene.add(fireflies);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight };


window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /// Update fireflies
  firefliesMaterial.uniforms.uPixelRatio.value = Math.min(
  window.devicePixelRatio,
  2);

});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
45,
sizes.width / sizes.height,
0.1,
100);

camera.position.x = -4;
camera.position.y = 2;
camera.position.z = -4;
scene.add(camera);

// Controls
const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;

// Don't go below the ground
controls.maxPolarAngle = Math.PI / 2 - 0.1;

// Clamp panning
const minPan = new THREE.Vector3(-0.2, -0.2, -0.2);
const maxPan = new THREE.Vector3(2, 2, 2);
const _v = new THREE.Vector3();

controls.addEventListener("change", function () {
  _v.copy(controls.target);
  controls.target.clamp(minPan, maxPan);
  _v.sub(controls.target);
  camera.position.sub(_v);
});

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true });

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setClearColor(debugObject.clearColor);
/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  firefliesMaterial.uniforms.uTime.value = elapsedTime;
  portalLightMaterial.uniforms.uTime.value = elapsedTime;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();