import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import style from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const HandleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={HandleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
