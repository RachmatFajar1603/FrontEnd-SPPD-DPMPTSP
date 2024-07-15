import React from 'react';
import Navbar from '../Elements/Navbar';
import Sidebar from '../Elements/SideBar';

const DashboardLayouts = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Sidebar/>
            {children}
        </div>
    );
};

export default DashboardLayouts;