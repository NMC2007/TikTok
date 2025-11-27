// layout
import { HeaderOnly } from '~/components/Layouts';

import routesConfig from '~/config/routes';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: routesConfig.home, element: Home },
    { path: routesConfig.following, element: Following },
    { path: routesConfig.profile, element: Profile },
    { path: routesConfig.upload, element: Upload, layout: HeaderOnly },
    { path: routesConfig.search, element: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
