import { Link } from "react-router-dom";
import CardFormPengajuan from "../Fragments/CardFormPengajuan";

const FormPengajuanLayouts = (props) => {
  const { children} = props; // Added title prop with a default value
  return (
    <>
      <CardFormPengajuan>
        <div className="">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </CardFormPengajuan>

      <CardFormPengajuan>
        <div className="">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </CardFormPengajuan>
    </>
  );
};

export default FormPengajuanLayouts;