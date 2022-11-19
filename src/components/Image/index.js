import PropTypes from 'prop-types'
import { forwardRef, useState } from 'react'
import classNames from 'classnames'

import images from '~/assets/images'
import styles from './Image.module.scss'

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.errorImage, ...passProps }, ref) => {
    const [fallback, setFallback] = useState('')

    const handleError = () => {
        setFallback(customFallback)
    }

    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            onError={handleError}
            {...passProps}
        />
    )
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image
