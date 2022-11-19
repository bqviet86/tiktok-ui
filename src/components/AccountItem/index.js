import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import Image from '~/components/Image'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <Icon icon="akar-icons:circle-check-fill" className={cx('icon-checked')} />}
                </h4>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    )
}

export default AccountItem
