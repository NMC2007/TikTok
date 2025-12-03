// layout
import { HeaderOnly } from '~/layouts';

import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: config.routes.home, element: Home },
    { path: config.routes.following, element: Following },
    { path: config.routes.profile, element: Profile },
    { path: config.routes.upload, element: Upload, layout: HeaderOnly },
    { path: config.routes.search, element: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
