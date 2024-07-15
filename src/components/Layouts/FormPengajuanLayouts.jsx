import { Link } from "react-router-dom";
import CardFormPengajuan from "../Fragments/CardFormPengajuan";
import CardFormPengajuan_2 from "../Fragments/CardFormPengajuan_2";

const FormPengajuanLayouts = (props) => {
  const { children} = props; // Added title prop with a default value
  return (
    <>
      <div className="flex w-full space-x-8 pr-6">
      <CardFormPengajuan>
            <div className="w-full">{children}</div>
        </CardFormPengajuan>

        <CardFormPengajuan_2>
            <div className="w-full">{children}</div>
        </CardFormPengajuan_2>
      </div>
    </>
  );
};

export default FormPengajuanLayouts;