import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/Routers';
import { DefaultLayout } from '~/components/Layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* 
                        toàn bộ các page sẽ được nạp vào ở file Routers
                        sau đó Routers sẽ xuất ra 1 arr trong arr sẽ có
                        các obj trong obj sẽ chứa đường dẫn là key path
                        và element tương ứng với path

                        trong file này ta dùng map lặp qua mảng arr
                        lấy ra các obj chứa thông tin của các trang
                        sau đó trả về các thẻ Route đã được gán các thuộc
                        tính cần thiết như path và element

                    */}
                    {publicRoutes.map((route, index) => {
                        // lấy ra các component là các Page được lưu trong thộng tin obj
                        const Page = route.element;

                        // sét mặc định cho component Layout là DefaultLayout
                        let Layout = DefaultLayout;

                        /**
                         * kiểm tra nếu tồn tại layout trong thông tin của obj
                         * thì sẽ lấy luôn layout đó
                         * còn không tồn tại layout mà là null thì sẽ lấy
                         * Fragment
                         * mọi trường hợp còn lại đều là DefaultLayout
                         * như đã được gán ở trên
                         *
                         * Layout là các thành phần có sẵn nhận Page vào dưới
                         * dạng children thông qua props
                         * Layout sẽ là nơi chứa những thành phần tĩnh không
                         * có sự thay đổi
                         * Page là thành phần động sẽ thay đổi linh hoạt theo
                         * đường dẫn path
                         */

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
