import { AudioSource, Transform, engine } from '@dcl/sdk/ecs';
import { setupLinks } from './links';
import { setupBaseModels } from './models';
import { createSkyBox } from './skyBox';
import { sceneMiddle } from './resources';

export function main() {
  const root = engine.addEntity();
  Transform.create(root, { position: { x: sceneMiddle, y: 0, z: sceneMiddle } });

  setupBaseModels(root);
  setupLinks(root);
  createSkyBox(root);

  // Attach entity with audio to player
  const audioEntity = engine.addEntity();
  AudioSource.create(audioEntity, {
    audioClipUrl: 'sounds/background-music.mp3',
    loop: true,
    playing: true,
    volume: 0.5
  });
  Transform.create(audioEntity, { parent: engine.PlayerEntity });
}
