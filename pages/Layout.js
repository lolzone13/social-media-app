import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
    //console.log(children);

    if (children.type.name === "NotFound" || children.type.name === "Login" || children.type.name === "Register") {
        return (<>
            {children}
        </>)
    }

    else return (
        <div>
            <Navbar />
            {children}
           
        </div>
    )
}

export default Layout;