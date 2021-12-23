import * as THREE from "three";
import { Sky } from "./three-libs/Sky";
import styles from "./BackgroundFX.module.css";

export default function BackgroundFX() {
  return <div className={styles.wrapper} ref={(el) => el && main(el)} />;
}

function main(el: HTMLElement) {
  let camera: THREE.PerspectiveCamera;
  let scene: THREE.Scene;
  let renderer: THREE.WebGLRenderer;
  let pointer: THREE.Vector2;

  let sky: Sky;
  let sun: THREE.Vector;
  const effectController = {
    turbidity: 10,
    rayleigh: 3,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.7,
    elevation: 2,
    azimuth: 180,
    exposure: 0,
  };
  const periodicity = 1e-3;
  const preturbationScale = 0.003;
  const [lo, hi] = [1.2, 4.3];
  const mp = (hi - lo) / 2;
  const sunMin = new THREE.Vector3(-0.04, -0.02, -2);
  const sunMax = new THREE.Vector3(0.04, 0.06, 2);

  init();
  render(0);
  setTimeout(() => {
    el.style.opacity = "1";
  }, 250);

  return cleanup;

  function initSky() {
    // Add Sky
    sky = new Sky();
    sky.scale.setScalar(450000);
    scene.add(sky);

    sun = new THREE.Vector3();

    /// GUI

    effectController.exposure = renderer.toneMappingExposure;

    function guiChanged() {
      const uniforms = (sky.material as any).uniforms;
      uniforms["turbidity"].value = effectController.turbidity;
      uniforms["rayleigh"].value = effectController.rayleigh;
      uniforms["mieCoefficient"].value = effectController.mieCoefficient;
      uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;

      const phi = THREE.MathUtils.degToRad(90 - effectController.elevation);
      const theta = THREE.MathUtils.degToRad(effectController.azimuth);

      (sun as any).setFromSphericalCoords(1, phi, theta);

      uniforms["sunPosition"].value.copy(sun);

      renderer.toneMappingExposure = effectController.exposure;
      renderer.render(scene, camera);
    }

    guiChanged();
  }

  function init() {
    pointer = new THREE.Vector2();
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      100,
      2000000
    );
    camera.position.set(0, 100, 2000);

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.5;
    el.appendChild(renderer.domElement);

    initSky();

    window.addEventListener("resize", onWindowResize);
    window.addEventListener("pointermove", onPointerMove);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onPointerMove(event: PointerEvent) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  function render(time: number) {
    requestAnimationFrame(render);
    // Modulate "rayleigh" for a cool animated sunshine effect
    const uniforms = (sky.material as any).uniforms;
    const preturbation = Math.random() * preturbationScale;
    uniforms["rayleigh"].value =
      lo + mp + Math.sin(time * periodicity + preturbation) * mp;

    sun.set(pointer.x, pointer.y, 1);
    uniforms["sunPosition"].value
      .addScaledVector(sun, -0.001)
      .clamp(sunMin, sunMax);

    // ...And then write it out
    renderer.render(scene, camera);
  }

  function cleanup() {
    renderer.dispose();
    window.removeEventListener("resize", onWindowResize);
    window.removeEventListener("pointermove", onPointerMove);
    el.removeChild(renderer.domElement);
  }
}
