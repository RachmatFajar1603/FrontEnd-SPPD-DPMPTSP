import SidebarList from "../Elements/SideBarList";
import { AiOutlineHome, AiOutlineCheckCircle } from 'react-icons/ai'; // Import ikon-ikon yang diperlukan

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 shadow"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white shadow border-r border-gray-200">
        <SidebarList
          link="#"
          title="Formulir Pengajuan"
          icon={<AiOutlineHome />}
        />{" "}
        {/* Tambahkan ikon untuk Formulir Pengajuan */}
        <SidebarList
          link="#"
          title="Formulir Penyelesaian"
          icon={<AiOutlineCheckCircle />}
        />{" "}
        {/* Tambahkan ikon untuk Formulir Penyelesaian */}
      </div>
    </aside>
  );
};

export default Sidebar;
