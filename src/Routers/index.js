// layout
import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    // :nickname là đối tượng không cố định tuỳ vào to
    { path: '/profile/:nickname', element: Profile },
    { path: '/upload', element: Upload, layout: HeaderOnly },
    { path: '/search', element: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
