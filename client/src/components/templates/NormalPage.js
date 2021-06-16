import React, { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import Navbar from "components/organisms/Navbar";
import Sidebar from "components/organisms/Sidebar";

function NormalPage(props) {
   const { children } = props;
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   const openSidebar = () => {
      setIsSidebarOpen(true);
   }

   const closeSidebar = () => {
      setIsSidebarOpen(false);
   }

   return (
      <div>
         <nav className="sidebar-container">
            <Sidebar open={isSidebarOpen} closeSidebar={closeSidebar}/>
            <Hidden smUp implementation="css"></Hidden>
            <Hidden xsDown implementation="css"></Hidden>
         </nav>
         <div className={`navbar-and-content-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
            <Navbar isSidebarOpen={isSidebarOpen} menuButtonAction={openSidebar}/>
            <main>
               {children}
            </main>
         </div>
      </div>
   );
}

export default NormalPage;
export { NormalPage };
