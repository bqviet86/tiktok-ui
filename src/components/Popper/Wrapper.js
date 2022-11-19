import classNames from 'classnames/bind'
import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

function Wrapper({ children, className, bg }) {
    return (
        <div className={cx('wrapper', className)} style={{ backgroundColor: bg }}>
            {children}
        </div>
    )
}

export default Wrapper
