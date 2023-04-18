import { Entity, engine, Transform, GltfContainer, TransformType } from '@dcl/sdk/ecs';

export const MODELS = {
  grass: 'models/default/grass.glb',
  scene: 'models/scene.glb'
} as const;

export const createModelEntity = (transform: Partial<TransformType>, modelPath: string): Entity => {
  const entity = engine.addEntity();
  Transform.create(entity, transform);
  GltfContainer.create(entity, { src: modelPath });

  return entity;
};

export const setupBaseModels = (): void => {
  createModelEntity({ position: { x: 64, y: 0, z: 64 } }, MODELS.scene);
  createModelEntity({ position: { x: 64, y: 0, z: 64 } }, MODELS.grass);
};
