import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
    //console.log(children);

    if (children.type.name === "NotFound") {
        return (<>
            {children}
        </>)
    }

    else return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;