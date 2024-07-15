import FormPengajuan from "../components/Fragments/FormPengajuan";
import HomeLayout from "../components/Layouts/DashboardLayouts";
import FormPengajuanLayouts from "../components/Layouts/FormPengajuanLayouts";

const FormPengajuanPage = () => {
  return (
    <main>
      <HomeLayout>
        <div className="mt-20 md:ml-64 md:p-12">
          <h1 className="text-4xl font-bold font-serif pl-6 pr-6">
            Selamat Datang di Form Pengajuan SPPD DPMPTSP Provinsi Aceh
          </h1>
          <h1 className="pl-6 pr-6 mt-4 mb-2">
            Silahkan isi form pengajuan SPPD dengan lengkap dan benar..
          </h1>
          <FormPengajuanLayouts>
            <FormPengajuan />
          </FormPengajuanLayouts>
        </div>
      </HomeLayout>
    </main>
  );
};
export default FormPengajuanPage;
