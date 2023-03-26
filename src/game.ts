import { createEntity } from './utils';

createEntity({ position: new Vector3(64, 0, 64) }, 'models/scene.glb');
createEntity({ position: new Vector3(64, 0, 64) }, 'models/default/grass.glb');

// Github link
const githubLink = createEntity(
  { position: new Vector3(62, 1.3, 46) },
  'models/default/githubLink.glb'
);
githubLink.addComponent(
  new OnPointerDown(
    () => openExternalURL('https://github.com/ShinyDCL/fairyland-dcl'),
    { hoverText: 'Github' }
  )
);

// Twitter link
const twitterLink = createEntity(
  { position: new Vector3(63, 1.3, 46) },
  'models/default/twitterLink.glb'
);
twitterLink.addComponent(
  new OnPointerDown(
    () =>
      openExternalURL(
        'https://twitter.com/ShinyDCL/status/1625121692837109760'
      ),
    { hoverText: 'Twitter' }
  )
);
