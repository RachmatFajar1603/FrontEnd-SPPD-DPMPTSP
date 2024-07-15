import DashboardLayouts from "../components/Layouts/DashboardLayouts";
import { Alert } from "flowbite-react";

const DashboardPage = () => {
  return (
    <div>
      <DashboardLayouts>
        <div className="flex justify-center items-center h-screen">
          <Alert color="info">
            <span className="font-medium">Info alert!</span> Change a few things
            up and try submitting again.
          </Alert>
        </div>
      </DashboardLayouts>
    </div>
  );
};

export default DashboardPage;
