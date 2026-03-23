import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.css";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <body>
                <div id="content">
                    <Header />
                    <Outlet />
                </div>
            </body>
        </>

    );
};

export default Layout;
