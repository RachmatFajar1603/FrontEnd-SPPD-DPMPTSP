import FormPengajuan from "../components/Fragments/FormPengajuan";
import HomeLayout from "../components/Layouts/DashboardLayouts";
import FormPengajuanLayouts from "../components/Layouts/FormPengajuanLayouts";

const FormPengajuanPage = () => {
  return (
    <div>
      <HomeLayout>
        <div className="flex justify-center items-center h-96">
          <FormPengajuanLayouts>
            <FormPengajuan />
          </FormPengajuanLayouts>
        </div>
      </HomeLayout>
    </div>
  );
};
export default FormPengajuanPage;
