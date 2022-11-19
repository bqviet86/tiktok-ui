import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

function Wrapper({ children, className, bg = '#fff' }) {
    return (
        <div className={cx('wrapper', className)} style={{ backgroundColor: bg }}>
            {children}
        </div>
    )
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    bg: PropTypes.string,
}

export default Wrapper
