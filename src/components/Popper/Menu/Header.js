import classNames from 'classnames/bind'

import { Icon } from '@iconify/react'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <Icon icon="ph:caret-left" />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    )
}

export default Header
