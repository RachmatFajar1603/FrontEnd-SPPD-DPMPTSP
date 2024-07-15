
import Navbar from "../Fragments/Navbar";


const DashboardLayouts = ({children}) => {
    return (
        <>
        <Navbar/>
        {children}
        </>
    );
}

export default DashboardLayouts;