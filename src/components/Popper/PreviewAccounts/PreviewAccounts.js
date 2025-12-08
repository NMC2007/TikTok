import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from './PreviewAccounts.module.scss';

const cx = classNames.bind(style);

function PreviewAccounts({ children }) {
    return (
        <Tippy
            interactive
            delay={[800, 0]}
            offset={[12, 8]}
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <div className={cx('menu-body')}>Hello</div>
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
