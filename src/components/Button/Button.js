import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({
    children,

    // ẩn nút
    disabled = false,

    // kiểu nút
    primary = false,
    outline = false,
    rounded = false,
    text = false,

    // kích thước nút
    small = false,
    large = false,

    // định dạng nút
    onClick,
    to,
    href,

    leftIcon,
    rightIcon,

    // custom nút
    className,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // xoá các sự kiện khi nút bị disabled
    if (disabled) {
        // lặp qua các key trong obj kiểm tra xem key nào bắt đầu bằng từ khoá on
        // và nó là function thì nó là 1 event -> gỡ bỏ nó
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        // custom
        // nếu có className thì lấy giá trị của className làm key và value
        [className]: className,

        // nếu primary tồn tại thì sẽ được thêm vào obj này tương đương với thêm vào className
        // các loại nút
        primary,
        outline,
        text,
        rounded,

        // trạng thái nút mặc định không truyền sẽ ko có là flase
        disabled,

        // kích thước nút
        small,
        large,
    });

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,

    disabled: PropTypes.bool,

    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,

    small: PropTypes.bool,
    large: PropTypes.bool,

    onClick: PropTypes.func,
    to: PropTypes.string,
    href: PropTypes.string,

    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,

    className: PropTypes.string,
};

export default Button;
