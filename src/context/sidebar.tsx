
import { createContext, ReactNode, useState } from 'react';

interface SidebarContextData {
  sidebarIsOpen: Boolean;
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext({} as SidebarContextData);

function SidebarProvider({ children }: SidebarProviderProps) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  function handleOpenSidebar() {
    setSidebarIsOpen(true);
  }

  function handleCloseSidebar() {
    setSidebarIsOpen(false);
  }

  return (
    <SidebarContext.Provider value={{ sidebarIsOpen, handleOpenSidebar, handleCloseSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, SidebarContext };