import { PLATFORM_CATEGORY } from '~/enums/PlatformCategory.enum';

export const DEV_URLS: ReadonlyMap<PLATFORM_CATEGORY, string> = new Map([
  [PLATFORM_CATEGORY.API, '/api/profile/'],
  [PLATFORM_CATEGORY.APP, 'http://localhost:3000']
]);
