import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Arrow.module.scss'

const cx = classNames.bind(styles)

function Arrow({ bg = '#fff' }) {
    return (
        <div
            className={cx('arrow')}
            data-popper-arrow
            style={{ backgroundImage: `linear-gradient(135deg, ${bg} 51%, transparent 49%)` }}
        ></div>
    )
}

Arrow.propTypes = {
    bg: PropTypes.string,
}

export default Arrow
