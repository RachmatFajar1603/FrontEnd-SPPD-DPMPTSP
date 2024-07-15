import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Role"
        type="select"
        name="role"
        options={[
          { value: "admin", label: "Admin" },
          { value: "user", label: "User" },
          // Tambahkan opsi lainnya jika diperlukan
        ]}
      />

      <InputForm label="NIP" type="number" placeholder="02123456" name="nip " />
      <InputForm
        label="Password"
        type="password"
        placeholder="***"
        name="password"
      />

      <Button classname="bg-green-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
