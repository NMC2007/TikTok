import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { useDebounce } from '~/hooks';
import style from './Search.modue.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem';

const cx = classNames.bind(style);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchContent, setSearchContent] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    /**
     * useDebounce là hook tự custom và nhận vào 2 tham số
     * là value của thanh search và thời gian delay
     * trong trường hợp ở dưới này thì người dùng gõ
     * sau 500ms thì value của thanh search mới được cập
     * nhật sang biến debounce ta dùng debounce làm
     * init value cho useEffect để tránh người dùng gõ
     * liên tục làm gửi nhiều request api
     */
    const debounce = useDebounce(searchContent, 500);

    const inputRef = useRef();

    // fake API
    useEffect(() => {
        /**
         * do lần đầu được mounted thì useEffect vẫn chạy
         * nhưng ta chỉ cần call API khi searchContent có giá
         * trị tức khi người dùng nhập dữ liệu vào thì mới call
         * nên kiểm tra nếu searchContent là cuỗi rỗng thì return luôn
         */
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then((rest) => rest.json())
            .then((rest) => {
                setSearchResult(rest.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounce]);

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
                            searchResult.map((Result) => {
                                return <AccountsItem key={Result.id} data={Result} />;
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
                    {/* có searchContent và KHÔNG có loading thì mới hiện dấu x */}
                    {!!searchContent && !loading && (
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

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                </div>

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
