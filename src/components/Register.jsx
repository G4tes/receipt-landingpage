import { React, useEffect, useState } from "react";
import PasswordValidator from "password-validator";
const Register = () => {
  const schema = new PasswordValidator();
  schema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(100) // Maximum length 100
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits(2) // Must have at least 2 digits
    .has()
    .not()
    .spaces() // Should not have spaces
    .is()
    .not()
    .oneOf(["Passw0rd", "Password123"]); // Blacklist these values

  const [PasswordID, setPasswordID] = useState("");
  const [RepeatPasswordId, setRepeatPasswordId] = useState("");
  const [CheckPassowrd, setCheckPassowrd] = useState([]);
  const [PasswordSame, setPasswordSame] = useState(false);
  const handleInputPassword = (e) => {
    e.preventDefault();
    if (e.target.id == "passwordsandi") {
      console.log(e.target.value);
      setPasswordID(e.target.value);
      setCheckPassowrd(schema.validate(PasswordID, { list: true }));
      console.log(CheckPassowrd);
    } else {
      setRepeatPasswordId(e.target.value);
      setCheckPassowrd(schema.validate(RepeatPasswordId, { list: true }));
    }
  };
  useEffect(() => {
    console.log("password jalan");
    if (PasswordID === RepeatPasswordId) {
      setPasswordSame(true);
    } else {
      console.log("password beda");
      setPasswordSame(false);
    }
  }, [PasswordID, RepeatPasswordId]);

  const listform = [
    {
      id: 1,
      label: "Nama Depan*",
      placeholder: "Type your first name",
      id_input: "first_name",
      type: "text",
    },
    {
      id: 2,
      label: "Nama Belakang*",
      placeholder: "Type your last name",
      id_input: "last_name",
      type: "text",
    },
    {
      id: 3,
      label: "E-mail*",
      placeholder: "email@example.com",
      id_input: "emailaccount",
      type: "email",
    },
    {
      id: 4,
      label: "Nomor Ponsel*",
      placeholder: "Type your Number Phone",
      id_input: "phone",
      type: "text",
    },
    {
      id: 5,
      label: "Kata sandi*",
      placeholder: "Type your strong password",
      id_input: "passwordsandi",
      type: "password",
    },
    {
      id: 6,
      label: "Konfirmasi Kata Sandi*",
      placeholder: "Repeat your password",
      id_input: "repeatpassword",
      type: "password",
    },
  ];

  return (
    <div className="mx-auto mt-12 max-w-6xl ">
      <div className="h-28"></div>
      <div className="h-[928px] ">
        <div className="text-center font-bold text-3xl">
          <p> Gabung bersama komunitas MAH!!</p>
        </div>
        <div className="grid grid-cols-2 mt-8  mx-40">
          {listform.map(({ id, label, placeholder, id_input, type }) => (
            <div key={id} className="mt-4">
              <div className="mx-4">
                <label className="label">
                  <span className="label-text  font-semibold ">{label}</span>
                </label>
              </div>
              <div className="flex justify-center">
                <div className="form-control w-full max-w-sm">
                  <input
                    type={type}
                    id={id_input}
                    className="  bg-[#f2f2f2] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:outline-none focus:ring-black focus:ring-1 focus:border-transparent "
                    placeholder={placeholder}
                    onChange={type == "password" && handleInputPassword}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-sm mx-[11rem] mt-6">
          {CheckPassowrd.map((item, id) => (
            <div key={id + 1}>
              {item == "min" && (
                <p className="text-xs font-semibold text-red-500">
                  Kata sandi harus mengandung setidaknya 8 karakter
                </p>
              )}
              {item == "uppercase" && (
                <p className="text-xs font-semibold text-red-500">
                  Kata sandi harus mengandung setidaknya 1 huruf besar
                </p>
              )}

              {item == "digits" && (
                <p className="text-xs font-semibold text-red-500">
                  Kata sandi harus mengandung setidaknya 1 angka.
                </p>
              )}
              {item == "spaces" && (
                <p className="text-xs font-semibold text-red-500">
                  Kata sandi tidak boleh menggunakan spasi
                </p>
              )}
            </div>
          ))}
          {!PasswordSame && (
            <p className="text-xs font-semibold text-red-500">
              Kata sandi harus sama.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
