// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import style from './SidebarAccounts.module.scss';

const cx = classNames.bind(style);

function AccountsItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://vnclass.edu.vn/wp-content/uploads/2025/02/avatar-doi-cute-meo%E2%80%8B-23.jpg"
                alt=""
            />
            <div className={cx('item_infor')}>
                <p className={cx('nickname')}>
                    <strong>NguyenManhCuong</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyen Manh Cuong</p>
            </div>
        </div>
    );
}

export default AccountsItem;
