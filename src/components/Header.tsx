import classNames from "classnames";
import { List, X } from "phosphor-react";
import { useContext } from "react";
import { SidebarContext } from "../context/sidebar";
import { Logo } from "./Logo";

export function Header(){

    const { sidebarIsOpen, handleOpenSidebar, handleCloseSidebar } = useContext(SidebarContext);

    function handleHiddenSidebar() {
        if (sidebarIsOpen) {
            handleCloseSidebar();
          return;
        }
    
        handleOpenSidebar();
      }
    return(
        <header className={classNames("w-full py-4 flex justify-between md:justify-center items-center bg-gray-700 border-b border-gray-600",{
            "fixed z-50" : sidebarIsOpen
        })}>
            <span className="scale-75">
                <Logo />
            </span>

            <div className="flex items-center mr-6 gap-2 md:hidden" onClick={handleHiddenSidebar}>
                <span>Aulas</span> 
                {sidebarIsOpen ? <X className="text-blue-500" size="32" /> : <List size={32} className="text-blue-500" />}
            </div>

        </header>
    )
}