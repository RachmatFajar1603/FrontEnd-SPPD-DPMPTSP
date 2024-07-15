import InputForm from "../Elements/Input";

const FormPengajuan_2 = ()=> {
    return (
        <form action="" className="">
            <InputForm
                label="No SPPD"
                type="number"
                placeholder="Masukan Nomor SPPD"
                name="noSppd"
            />

            <InputForm
                label="Bidang"
                type="select"
                name="bidang"
                options={[
                    { value: "sekretariat", label: "sekretariat" },
                    { value: "p2ipm", label: "P2IPM" },
                    { value: "promosi", label: "Promosi" },
                    { value: "dalak", label: "DALAK" },
                    { value: "datin", label: "DATIN" },
                    { value: "perizinanA", label: "PERIZINAN_A" },
                    { value: "perizinanB", label: "PERIZINAN_B" },
                    { value: "perizinanC", label: "PERIZINAN_C" },
                    { value: "perizinanD", label: "PERIZINAN_D" },
                    { value: "uptdKek", label: "UPTD_KEK" },
                ]}
                placeholder="Pilih Bidang"
            />

            <InputForm label="Nama" type="text" placeholder="Fulan" name="nama " />

            <InputForm
                label="NIP/REG"
                type="number"
                placeholder="Masukan NIP Anda"
                name="nip "
            />

            <InputForm
                label="Jabatan"
                type="text"
                placeholder="Masukan Jabatan Anda"
                name="jabatan "
            />
            <InputForm
                label="Pangkat/Gol"
                type="text"
                placeholder="Masukan Pangkat Anda"
                name="pangkat "
            />
        </form>
    );
};