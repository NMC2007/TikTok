import config from '~/config';
import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    // HomeActiveIcon,
    // UserGroupActiveIcon,
    // LiveActiveIcon,
} from '~/components/Icon';
import SidebarAccounts from '~/components/AccoutSidebar/SidebarAccounts';
import AccountsPreview from '~/components/AccoutSidebar/AccountsItem';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>

            <SidebarAccounts Label="Sunggestedc accounts">
                <AccountsPreview />
            </SidebarAccounts>
            
            <SidebarAccounts Label="Following accounts">
                <AccountsPreview />
            </SidebarAccounts>
        </aside>
    );
}

export default Sidebar;
