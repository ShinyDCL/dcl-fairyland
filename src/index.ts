import { setupLinks } from './links';
import { setupBaseModels } from './models';

export function main() {
  setupBaseModels();
  setupLinks();
}
