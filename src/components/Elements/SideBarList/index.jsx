import React from 'react';
import { Link } from 'react-router-dom';


const SidebarList = ({ link, title, icon }) => {
    return (
        <ul className="space-y-2 font-medium">
            <li>
                <Link
                    to={link}
                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-400 group"
                >
                    {icon} {/* Tambahkan komponen ikon */}
                    <span className="ms-3">{title}</span>
                </Link>
            </li>
        </ul>
    );
};

export default SidebarList;