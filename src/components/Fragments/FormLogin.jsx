import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="" className=" ">
      <InputForm
        label="Role"
        type="select"
        name="role"
        options={[
          { value: "userBidang", label: "User Bidang" },
          { value: "ppatk", label: "PPTK" },
          { value: "keuangan", label: "Keuangan" },
          { value: "admin", label: "Admin" },
          // Tambahkan opsi lainnya jika diperlukan
        ]}
        placeholder="Pilih Role"
      />

      <InputForm label="NIP" type="number" placeholder="02123456" name="nip " />
      <InputForm
        label="Password"
        type="password"
        placeholder="***"
        name="password"
      />

      <Link to="/dashboard">
        <Button classname="bg-green-600 w-full">Login</Button>
      </Link>
    </form>
  );
};

export default FormLogin;