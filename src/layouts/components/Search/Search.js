import { useState, useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { Icon } from '@iconify/react'

import * as searchServices from '~/services/searchService'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import { useDebounce } from '~/hook'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showSearchResult, setShowSearchResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounced = useDebounce(searchValue, 1000)

    const inputRef = useRef()

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }

        const fetchApi = async () => {
            try {
                setLoading(true)

                const results = await searchServices.search(debounced)

                setSearchResult(results)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }

        fetchApi()
    }, [debounced])

    const handleChange = (e) => {
        const inputValue = e.target.value

        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue)
        }
    }

    const handleClear = () => {
        setSearchResult([])
        setSearchValue('')
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowSearchResult(false)
    }

    return (
        // Interactive tippy element may not be accessible via keyboard navigation because
        // it is not directly after the reference element in the DOM source order.
        //
        // Using a wrapper <div> or <span> tag around the reference element
        // solves this by creating a new parentNode context.
        <div>
            <Tippy
                visible={showSearchResult && searchResult.length > 0}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Tài khoản</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                            <div className={cx('see-all')}>
                                <p>{`Xem tất cả kết quả dành cho "${searchValue}"`}</p>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowSearchResult(true)}
                    />
                    <div className={cx('clear-load-wrap')}>
                        {searchValue && !loading && (
                            <button className={cx('clear')} onClick={handleClear}>
                                <Icon icon="ep:circle-close-filled" />
                            </button>
                        )}
                        {loading && <Icon icon="quill:loading-spin" className={cx('loading')} />}
                    </div>

                    <div className={cx('search-btn')}>
                        <Icon icon="charm:search" />
                        <span></span>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

export default Search
