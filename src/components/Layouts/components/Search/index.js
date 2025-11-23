import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from './Search.modue.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem';

const FakeAPI = [
    {
        src: 'https://vnclass.edu.vn/wp-content/uploads/2025/02/avatar-doi-cute-meo%E2%80%8B-23.jpg',
        name: 'Nguyễn Mạnh Cường',
        usename: 'mn_nmc.',
        check: true,
    },
    {
        src: 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/avatar_meo_0_994f91d53c.jpg',
        name: 'Nguyên Văn A',
        usename: 'mn.VA',
        check: true,
    },
    {
        src: 'https://cdn2.fptshop.com.vn/unsafe/800x0/avatar_meo_4_57f5ca33f7.jpg',
        name: 'Nguyên Văn B',
        usename: 'NVB_02',
        check: false,
    },
];

const cx = classNames.bind(style);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchContent, setSearchContent] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    // fake API
    useEffect(() => {
        /**
         * do lần đầu được mounted thì useEffect vẫn chạy
         * nhưng ta chỉ cần call API khi searchContent có giá
         * trị tức khi người dùng nhập dữ liệu vào thì mới call
         * nên kiểm tra nếu searchContent là cuỗi rỗng thì return luôn
         */
        if (!searchContent.trim()) return;

        // fake call API
        setTimeout(() => {
            setSearchResult(FakeAPI);
        }, 1000);
    }, [searchContent]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>

                        {searchResult &&
                            searchResult.map((Result, index) => {
                                return <AccountsItem key={index} result={Result} />;
                            })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={searchContent}
                    onChange={(e) => setSearchContent(e.target.value)}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />

                <div className={cx('btn-loading-clear')}>
                    {!!searchContent && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchContent('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                </div>

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
