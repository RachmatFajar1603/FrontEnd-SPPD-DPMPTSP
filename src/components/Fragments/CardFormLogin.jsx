import React from "react";

const CardFormLogin = (props) => {
  const { children } = props;
  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg p-6 ml-[35%] mt-[13%] flex justify-center items-center">
      {children}
    </div>
  );
};

export default CardFormLogin;
