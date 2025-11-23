import classNames from 'classnames/bind';
import style from './AccoutsItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(style);

function AccountsItem({ result }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={result.src} alt="Accout" />

            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{result.name}</span>

                    {/* tích xanh sẽ là bool nếu true thì hiển thị flase thì không */}
                    {result.check ? <FontAwesomeIcon className={cx('checkItem')} icon={faCheckCircle} /> : undefined}
                </h4>
                <span className={cx('username')}>{result.usename}</span>
            </div>
        </div>
    );
}

export default AccountsItem;
