import { useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import Arrow from '~/components/Popper/Arrow'
import Header from './Header'
import MenuItem from './MenuItem'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function Menu({ children, items = [], hideOnClick = false, bg = '#fff', onChange }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]
    const defaultFunction = () => {}

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            let onClick = defaultFunction

            if (isParent) {
                onClick = () => setHistory((prev) => [...prev, item.children])
            } else {
                onClick = () => onChange(item)
            }

            return <MenuItem key={index} data={item} onClick={onClick} />
        })
    }

    return (
        <Tippy
            placement="bottom-end"
            interactive={true}
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('menu-list')} data-popper-placement="bottom" tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')} bg={bg}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                    <Arrow bg={bg} />
                </div>
            )}
            onHide={() => setHistory((prev) => [prev[0]])}
        >
            {children}
        </Tippy>
    )
}

export default Menu
