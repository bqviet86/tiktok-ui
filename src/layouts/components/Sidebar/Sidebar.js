import { Icon } from '@iconify/react'
import classNames from 'classnames/bind'

import config from '~/config'
import Menu, { MenuItem } from './Menu'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<Icon icon="mingcute:home-6-line" />}
                    activeIcon={<Icon icon="mingcute:home-6-fill" />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<Icon icon="heroicons:users" />}
                    activeIcon={<Icon icon="heroicons:users-20-solid" />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<Icon icon="ph:video-camera" />}
                    activeIcon={<Icon icon="ph:video-camera-fill" />}
                />
            </Menu>
        </aside>
    )
}

export default Sidebar
