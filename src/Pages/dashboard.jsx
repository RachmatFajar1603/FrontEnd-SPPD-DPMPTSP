import DashboardLayouts from "../components/Layouts/DashboardLayouts";

const DashboardPage = () => {
  return (
    <div>
      <DashboardLayouts>
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
      </DashboardLayouts>
    </div>
  );
};

export default DashboardPage;
