import { executeTask } from '@dcl/sdk/ecs';
import { setupBaseModels } from './models';
import { setupLinks } from './links';

// export all the functions required to make the scene work
export * from '@dcl/sdk';

// Initial function executed when scene is evaluated and after systems are created
executeTask(async function () {
  setupBaseModels();
  setupLinks();
});
