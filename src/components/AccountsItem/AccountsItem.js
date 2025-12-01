import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import style from './AccoutsItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(style);

function AccountsItem({ data }) {
    return (
        <Link to={`/profile/${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="Accout" />

            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>

                    {/* tích xanh sẽ là bool nếu true thì hiển thị flase thì không */}
                    {data.tick ? <FontAwesomeIcon className={cx('checkItem')} icon={faCheckCircle} /> : undefined}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountsItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountsItem;
