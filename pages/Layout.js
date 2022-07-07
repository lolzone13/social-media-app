import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
    //console.log(children);

 return (
        <div>
            <Navbar />
            {children}
           
        </div>
    )
}

export default Layout;