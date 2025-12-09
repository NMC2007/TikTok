import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from './PreviewAccounts.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function PreviewAccounts({ children }) {
    return (
        <Tippy
            interactive
            delay={[800, 0]}
            offset={[12, 8]}
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <header className={cx('header')}>
                            <img className={cx('avatar')} src="" alt="" />
                            <Button primary>Folowing</Button>
                        </header>
                        <div className={cx('body')}>
                            <p className={cx('nickname')}>
                                <strong>NguyenManhCuong</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            </p>
                            <p className={cx('name')}>Nguyen Manh Cuong</p>

                            <p>
                                <strong>1M</strong>
                                <span>Folowing</span>
                                <strong>1M</strong>
                                <span>Likes</span>
                            </p>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

PreviewAccounts.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PreviewAccounts;
