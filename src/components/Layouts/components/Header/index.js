import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCloudArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import style from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

/**
 * thư viện này giúp ta dùng css module nhưng
 * có thể thêm các dấu - trong tên của class
 * đẹp và dễ nhìn hơn
 */

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

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const cx = classNames.bind(style);

function Header() {
    // khi có currentUse viết thêm logic tăng item menu
    const currentUse = true;

    const [searchResult, setSearchResult] = useState([]);
    const [searchContent, setSearchContent] = useState('');

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

    // sử lý logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem);
                break;

            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('Logo')}>
                    <img src={images.logo} alt="TikTok"></img>
                </div>

                {/* search */}
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>

                                {/*
                                    đoạn này sau khi có API trả về sẽ dùng map để render
                                    truyền dữ liệu API trả về vào Props của comp
                                    bên kia sẽ nhận Prop và render ra theo giá trị của Props
                                 */}
                                {searchResult &&
                                    searchResult.map((Result, index) => {
                                        return <AccountsItem key={index} result={Result} />;
                                    })}
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            value={searchContent}
                            onChange={(e) => setSearchContent(e.target.value)}
                        />

                        <div className={cx('btn-loading-clear')}>
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        </div>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                {/* actions */}
                <div className={cx('actions')}>
                    {currentUse ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                        {currentUse ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://vnclass.edu.vn/wp-content/uploads/2025/02/avatar-doi-cute-meo%E2%80%8B-23.jpg"
                                alt="Nguyen Manh Cuong"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
