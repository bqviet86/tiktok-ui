import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    size = 'md',
    disabled,
    IconLeft = '',
    IconRight = '',
    className,
    children,
    ...passProps
}) {
    let Comp = 'button'
    const props = {
        ...passProps,
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    // Remove event listeners when disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    const classes = cx(className, 'wrapper', {
        primary,
        outline,
        rounded,
        disabled,
        small: size === 'sm',
        small2: size === 'sm2',
        medium2: size === 'md2',
        large: size === 'lg',
        iconLeft: IconLeft,
        iconRight: IconRight,
    })

    return (
        <Comp className={classes} {...props}>
            {IconLeft}
            <span>{children}</span>
            {IconRight}
        </Comp>
    )
}

export default Button
