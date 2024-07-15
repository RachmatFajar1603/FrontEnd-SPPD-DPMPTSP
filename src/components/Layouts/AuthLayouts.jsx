import { Link } from "react-router-dom";
import CardFormLogin from "../Fragments/CardFormLogin";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <CardFormLogin>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-green-600 flex justify-center">
            {title}
          </h1>
          <p className="font-medium text-slate-500 my-5">
            Selamat Datang di Sistem SPPD DPMPTSP
          </p>
          {children}
        </div>
      </div>
    </CardFormLogin>
  );
};

export default AuthLayouts;