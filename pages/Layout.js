import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
    return (
        <div className="bottom-0 top-0 p-0">
            <Navbar />
            { children }
            <Footer />
            Hello 
        </div>
    )
}

export default Layout;