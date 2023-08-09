import { Entity, InputAction, TransformType, pointerEventsSystem } from '@dcl/sdk/ecs';
import { openExternalUrl } from '~system/RestrictedActions';
import { createModelEntity } from './models';

export enum LinkType {
  TWITTER = 'Twitter',
  GITHUB = 'Github',
  HYPERFY = 'Hyperfy'
}

export const URLS: Record<LinkType, string> = {
  [LinkType.GITHUB]: 'https://github.com/ShinyDCL/dcl-fairyland',
  [LinkType.TWITTER]: 'https://twitter.com/ShinyDCL/status/1640104068541476865',
  [LinkType.HYPERFY]: 'https://hyperfy.io/fairyland'
} as const;

export const LINK_MODELS: Record<LinkType, string> = {
  [LinkType.GITHUB]: 'models/default/githubLink.glb',
  [LinkType.TWITTER]: 'models/default/twitterLink.glb',
  [LinkType.HYPERFY]: 'models/default/hyperfyLink.glb'
} as const;

export const createLinkEntity = (transform: Partial<TransformType>, linkType: LinkType): Entity => {
  const modelPath = LINK_MODELS[linkType];
  const entity = createModelEntity(transform, modelPath);

  pointerEventsSystem.onPointerDown(
    { entity: entity, opts: { button: InputAction.IA_POINTER, hoverText: linkType } },
    () => openExternalUrl({ url: URLS[linkType] })
  );

  return entity;
};

export const setupLinks = (): void => {
  createLinkEntity({ position: { x: 29, y: 1.3, z: 46 } }, LinkType.HYPERFY);
  createLinkEntity({ position: { x: 30, y: 1.3, z: 46 } }, LinkType.GITHUB);
  createLinkEntity({ position: { x: 31, y: 1.3, z: 46 } }, LinkType.TWITTER);
};
