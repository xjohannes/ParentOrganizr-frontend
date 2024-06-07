import React, { ReactNode } from 'react';
import BottomNav from './bottom-navigation'

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <main>{children}</main>
            <BottomNav />
        </>
    )
}

export default Layout;
