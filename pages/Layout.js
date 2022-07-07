import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
    //console.log(children);

    if (children.type.name === "NotFound" || children.type.name === "login" || children.type.name === "register") {
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