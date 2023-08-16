import { Entity, engine, Transform, MeshRenderer, Material } from '@dcl/sdk/ecs';
import { Vector3, Quaternion } from '@dcl/sdk/math';
import { sceneMiddle, sceneSize } from './resources';

export const createSkyBox = (parent: Entity): Entity => {
  const folderPath = 'images/skybox';
  const defaultScale = Vector3.create(sceneSize, sceneMiddle, sceneSize);
  const skyBoxRoot = engine.addEntity();
  Transform.create(skyBoxRoot, { position: Vector3.create(0, sceneMiddle / 2, 0), parent });

  // Front
  const skyBoxPZ = engine.addEntity();
  Transform.create(skyBoxPZ, {
    position: Vector3.create(0, 0, sceneMiddle),
    scale: defaultScale,
    parent: skyBoxRoot
  });
  MeshRenderer.setPlane(skyBoxPZ);
  Material.setBasicMaterial(skyBoxPZ, { texture: Material.Texture.Common({ src: `${folderPath}/pz.jpg` }) });

  // Back
  const skyBoxNZ = engine.addEntity();
  Transform.create(skyBoxNZ, {
    position: Vector3.create(0, 0, -sceneMiddle),
    rotation: Quaternion.fromEulerDegrees(0, 180, 0),
    scale: defaultScale,
    parent: skyBoxRoot
  });
  MeshRenderer.setPlane(skyBoxNZ);
  Material.setBasicMaterial(skyBoxNZ, { texture: Material.Texture.Common({ src: `${folderPath}/nz.jpg` }) });

  // Right
  const skyBoxPX = engine.addEntity();
  Transform.create(skyBoxPX, {
    position: Vector3.create(sceneMiddle, 0, 0),
    rotation: Quaternion.fromEulerDegrees(0, 90, 0),
    scale: defaultScale,
    parent: skyBoxRoot
  });
  MeshRenderer.setPlane(skyBoxPX);
  Material.setBasicMaterial(skyBoxPX, { texture: Material.Texture.Common({ src: `${folderPath}/px.jpg` }) });

  // Left
  const skyBoxNX = engine.addEntity();
  Transform.create(skyBoxNX, {
    position: Vector3.create(-sceneMiddle, 0, 0),
    rotation: Quaternion.fromEulerDegrees(0, -90, 0),
    scale: defaultScale,
    parent: skyBoxRoot
  });
  MeshRenderer.setPlane(skyBoxNX);
  Material.setBasicMaterial(skyBoxNX, { texture: Material.Texture.Common({ src: `${folderPath}/nx.jpg` }) });

  // Top
  const skyBoxPY = engine.addEntity();
  Transform.create(skyBoxPY, {
    position: Vector3.create(0, sceneMiddle / 2, 0),
    rotation: Quaternion.fromEulerDegrees(-90, 0, 0),
    scale: Vector3.create(sceneSize, sceneSize, sceneSize),
    parent: skyBoxRoot
  });
  MeshRenderer.setPlane(skyBoxPY);
  Material.setBasicMaterial(skyBoxPY, { texture: Material.Texture.Common({ src: `${folderPath}/py.jpg` }) });

  return skyBoxRoot;
};
