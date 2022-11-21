import classNames from 'classnames/bind'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

import config from '~/config/routes'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import Tooltip from '~/components/Popper/Tooltip'
import Image from '~/components/Image'
import images from '~/assets/images'
import styles from './Header.module.scss'
import Search from '../Search'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <Icon icon="fluent-emoji-high-contrast:a-button-blood-type" />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <Icon icon="bi:question-circle" />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <Icon icon="icon-park-outline:keyboard" />,
        title: 'Phím tắt trên bàn phím',
    },
]

function Header() {
    const currentUser = true

    const handleOnChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break
            default:
        }
    }

    const USER_ITEMS = [
        {
            icon: <Icon icon="ci:user" />,
            title: 'Xem hồ sơ',
            to: '/@han',
        },
        {
            icon: <Icon icon="iconoir:tiktok" />,
            title: 'Nhận Xu',
            to: '/coin',
        },
        {
            icon: <Icon icon="bx:camera-movie" />,
            title: 'LIVE Studio',
            to: '/studio',
        },
        {
            icon: <Icon icon="icon-park-outline:setting-three" />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <Icon icon="material-symbols:login-rounded" />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button to={config.upload} size="md2" IconLeft={<Icon icon="ion:add" />}>
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            <Tooltip content="Tin nhắn" bg="#545454eb">
                                <button className={cx('action-btn')}>
                                    <Icon icon="ph:paper-plane-tilt" />
                                </button>
                            </Tooltip>

                            <Tooltip content="Hộp thư" bg="#545454eb">
                                <button className={cx('action-btn')}>
                                    <Icon icon="bx:message-alt-minus" />
                                </button>
                            </Tooltip>
                        </>
                    ) : (
                        <Button primary>Đăng nhập</Button>
                    )}
                    <Menu items={currentUser ? USER_ITEMS : MENU_ITEMS} onChange={handleOnChange}>
                        {currentUser ? (
                            <Image
                                className={cx('action-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/587e36217ad942a8de6c88163441e37a~c5_100x100.jpeg?x-expires=1668758400&x-signature=aDvdOOxaOE1dDrOLILGseGOojNI%3D"
                                alt="Huỳnh Hân"
                            />
                        ) : (
                            <button className={cx('see-more')}>
                                <Icon icon="charm:menu-kebab" />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
