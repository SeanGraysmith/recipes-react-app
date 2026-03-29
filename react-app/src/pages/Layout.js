import { Outlet, Link } from "react-router-dom";
import styles from "./css/Layout.css";
import Header from "./components/Header";

const Layout = () => {
    return (
        <>
                <div id="content">
                    <Header />
                    <Outlet />
                </div>
        </>

    );
};

export default Layout;
