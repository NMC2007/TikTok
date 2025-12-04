import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';

/**
 * vứt sidebar ra bên compnents
 * nạp vào đây
 * file này chỉ ex ra layout chính
 * những trang khác ko có layout được note bên routers
 */
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
