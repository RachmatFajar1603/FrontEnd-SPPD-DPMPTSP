import React from "react";

const CardFormPengajuan_2 = (props) => {
  const { children } = props;
  return (
    <div className="w-10/12 bg-white rounded-xl shadow-lg p-6">
      <h1 className="font-bold text-2xl flex justify-center items-center">Masukkan Data SPPD</h1>
      {children}
    </div>
  );
};

export default CardFormPengajuan_2;