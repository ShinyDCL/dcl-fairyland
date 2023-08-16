import { Entity, engine, Transform, GltfContainer, TransformType } from '@dcl/sdk/ecs';

export const createModelEntity = (transform: Partial<TransformType>, modelPath: string): Entity => {
  const entity = engine.addEntity();
  Transform.create(entity, transform);
  GltfContainer.create(entity, { src: modelPath });

  return entity;
};

export const setupBaseModels = (parent: Entity): Entity => createModelEntity({ parent }, 'models/scene4x4.glb');
