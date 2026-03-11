// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_ProjectsProject_getConfig } from './pages/projects/[project]';
// prettier-ignore
import type { getConfig as File_ProjectsIndex_getConfig } from './pages/projects/index';

// prettier-ignore
type Page =
| { path: '/about'; render: 'static' }
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| { path: '/kyeosis'; render: 'static' }
| ({ path: '/projects/[project]' } & GetConfigResponse<typeof File_ProjectsProject_getConfig>)
| ({ path: '/projects' } & GetConfigResponse<typeof File_ProjectsIndex_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
