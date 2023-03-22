const scene = new Entity();
const sceneShape = new GLTFShape('models/scene.glb');

sceneShape.withCollisions = true;
sceneShape.isPointerBlocker = true;
sceneShape.visible = true;

scene.addComponentOrReplace(
  new Transform({ position: new Vector3(16, 0, 16) })
);
scene.addComponentOrReplace(sceneShape);

engine.addEntity(scene);
