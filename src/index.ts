import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs';

import { setUpLinks } from './links';
import { setUpMusic } from './music';
import { sceneMiddle } from './resources';
import { createSkyBox } from './skyBox';

export function main() {
  const scene = engine.addEntity();
  Transform.create(scene, { position: { x: sceneMiddle, y: 0, z: sceneMiddle } });
  GltfContainer.create(scene, { src: 'models/scene4x4.glb' });

  setUpLinks(scene);
  createSkyBox(scene);
  setUpMusic();
}
