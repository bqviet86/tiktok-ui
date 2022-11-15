import { Icon } from '@iconify/react'
import classNames from 'classnames/bind'

import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4cf0dd9ecdb19a7048daf57ead3ca5c0~c5_300x300.webp?x-expires=1668675600&x-signature=4SamXN%2FAhooBsWkbaO4DWZU%2FzCU%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>h_chaukiuu</span>
                    <Icon icon="akar-icons:circle-check-fill" className={cx('icon-checked')} />
                </h4>
                <span className={cx('username')}>Trần Huyền Châu</span>
            </div>
        </div>
    )
}

export default AccountItem
