import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout;