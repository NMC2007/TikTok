import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from './PreviewAccounts.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(style);

/**
 * thằng này sẽ nhận vào cùng 1 api với thằng cha ( là thằng hover vào thì mới hiện ra thằng này )
 * sau khi có api từ thằng cha truyền xuống sẽ render ra ở các vị trí
 */
function PreviewAccounts({ children }) {
    return (
        <div>
            <Tippy
                interactive
                // visible
                delay={[800, 0]}
                offset={[12, 8]}
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            <header className={cx('header')}>
                                <Image
                                    className={cx('avatar')}
                                    // đây
                                    src="https://vnclass.edu.vn/wp-content/uploads/2025/02/avatar-doi-cute-meo%E2%80%8B-23.jpg"
                                    alt=""
                                />
                                <Button primary>Folowing</Button>
                            </header>
                            <div className={cx('body')}>
                                <p className={cx('nickname')}>
                                    {/* đây */}
                                    <strong>NguyenManhCuong</strong>
                                    {/* check true false để hiện tích xanh ở đây */}
                                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                                </p>
                                {/* đây */}
                                <p className={cx('name')}>Nguyen Manh Cuong</p>

                                <p className={cx('analytics')}>
                                    {/* đây */}
                                    <strong className={cx('valule')}>1M</strong>
                                    <span className={cx('lable')}>Folowing</span>
                                    <strong className={cx('valule')}>1M</strong>
                                    <span className={cx('lable')}>Likes</span>
                                </p>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

PreviewAccounts.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PreviewAccounts;
