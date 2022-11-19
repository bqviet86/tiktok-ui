import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import Arrow from '~/components/Popper/Arrow'
import styles from './Tooltip.module.scss'

const cx = classNames.bind(styles)

function Tooltip({ children, content = '', bg = '#fff' }) {
    return (
        // Interactive tippy element may not be accessible via keyboard navigation because
        // it is not directly after the reference element in the DOM source order.
        //
        // Using a wrapper <div> or <span> tag around the reference element
        // solves this by creating a new parentNode context.
        <div>
            <Tippy
                placement="bottom"
                interactive={true}
                delay={[100, 100]}
                render={(attrs) => (
                    <div data-popper-placement="bottom" tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('tooltip-wrapper')} bg={bg}>
                            <div>{content}</div>
                        </PopperWrapper>
                        <Arrow bg={bg} />
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    )
}

export default Tooltip
