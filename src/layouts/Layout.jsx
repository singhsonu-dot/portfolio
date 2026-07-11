import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar"; 
import Footer from "../component/Footer";

function Layout() {
    return (
        <>
          <Navbar/>

          <main>
            <Outlet/>
          </main>

          <Footer/>
        </>
    )
}

export default Layout