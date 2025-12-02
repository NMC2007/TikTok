import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import { useState } from 'react';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

const defaultFun = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFun }) {
    // mặc định sẽ lấy data đầu tiên là mục đầu tiên của menu
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];

    const renderItem = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const HandleBackDefaultMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const HandleBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 500]}
            offset={[12, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={currentMenu.title} onBack={HandleBackMenu} />}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={HandleBackDefaultMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
