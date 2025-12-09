// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import PreviewAccounts from '../Popper/PreviewAccounts';
import Image from '../Image';

import style from './SidebarAccounts.module.scss';

const cx = classNames.bind(style);

// thằng này sẽ nhận vào thông tin và render thông tin ở các vị trí
function AccountsItem() {
    return (
        <PreviewAccounts>
            <div className={cx('account-item')}>
                <Image
                    className={cx('avatar')}
                    // đây
                    src="https://vnclass.edu.vn/wp-content/uploads/2025/02/avatar-doi-cute-meo%E2%80%8B-23.jpg"
                    alt=""
                />
                <div className={cx('item_infor')}>
                    <p className={cx('nickname')}>
                        {/* đây */}
                        <strong>NguyenManhCuong</strong>

                        {/* tuỳ true hay false mà có tích xanh hay ko ở đây */}
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    {/* đây */}
                    <p className={cx('name')}>Nguyen Manh Cuong</p>
                </div>
            </div>
        </PreviewAccounts>
    );
}

export default AccountsItem;
