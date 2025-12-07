import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './SidebarAccounts.module.scss';
import AccountsItem from './AccountsItem';

const cx = classNames.bind(style);

function SidebarAccounts({ Label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{Label}</p>

            <AccountsItem />
            <AccountsItem />
            <AccountsItem />
            <AccountsItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SidebarAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SidebarAccounts;
