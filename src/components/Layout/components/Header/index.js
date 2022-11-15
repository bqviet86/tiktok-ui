import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { Icon } from '@iconify/react'
import Tippy from '@tippyjs/react/headless'

import Button from '~/components/Button'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import styles from './Header.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => setSearchResult([]), 0)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                        <div className={cx('clear-load-wrap')}>
                            <button className={cx('clear')}>
                                <Icon icon="ep:circle-close-filled" />
                            </button>
                            <Icon icon="quill:loading-spin" className={cx('loading')} />
                        </div>

                        <div className={cx('search-btn')}>
                            <Icon icon="charm:search" />
                            <span></span>
                        </div>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button size="md2" IconLeft={<Icon icon="ion:add" />}>
                        Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>
                    <Icon className={cx('see-more-icon')} icon="charm:menu-kebab" />
                </div>
            </div>
        </header>
    )
}

export default Header
