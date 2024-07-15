import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold mb-2 text-green-600">{title}</h1>
      <p className="font-medium text-slate-500 my-5">
        Selamat Datang di Sistem SPPD DPMPTSP
      </p>
      {children}
    </div>
    </div>
  );
};


export default AuthLayouts;
