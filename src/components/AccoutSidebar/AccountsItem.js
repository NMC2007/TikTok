// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './SidebarAccounts.module.scss';

const cx = classNames.bind(style);

function AccountsItem() {
    return <div className={cx('account-item')}>AccountsItem</div>;
}

export default AccountsItem;
