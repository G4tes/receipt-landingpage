import { React, useEffect, useState, useCallback } from "react";
import { IoAlertOutline } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
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
  const [EyeOpen, setEyeOpen] = useState(false, 1);
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

  const handleShow = useCallback(
    (e, id) => {
      e.preventDefault();

      setEyeOpen(() => {
        return [true, id];
      });
      console.log(EyeOpen);
    },
    [EyeOpen]
  );

  const handleHide = useCallback(
    (e, id) => {
      e.preventDefault();
      setEyeOpen(() => {
        return [false, id];
      });
      console.log(EyeOpen);
    },
    [EyeOpen]
  );

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
        <div className="grid grid-cols-2 mt-8  mx-40 relative">
          {listform.map(({ id, label, placeholder, id_input, type }) => (
            <div key={id} className="mt-4 ">
              <div className="mx-4 ">
                <label className="label " key={id}>
                  <span className="label-text font-semibold ">{label}</span>
                </label>
              </div>
              <div className="flex justify-center">
                <div className="form-control w-full max-w-sm ">
                  <input
                    type={EyeOpen[1] == id && EyeOpen[0] ? "text" : type}
                    id={id_input}
                    className="  bg-[#f2f2f2] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:outline-none focus:ring-black focus:ring-1 focus:border-transparent "
                    placeholder={placeholder}
                    onChange={type == "password" ? handleInputPassword : null}
                  />
                  {type == "password" && (
                    <div className="flex justify-end mr-3">
                      {EyeOpen[0] && EyeOpen[1] == id ? (
                        <AiOutlineEyeInvisible
                          className="absolute bottom-3 w-6 h-6 "
                          key={id}
                          onClick={(e) => handleHide(e, id)}
                        />
                      ) : (
                        <AiOutlineEye
                          className="absolute bottom-3 w-6 h-6 "
                          key={id}
                          onClick={(e) => handleShow(e, id)}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-sm mx-[11rem] mt-6">
          {CheckPassowrd.map((item, id) => (
            <div key={id + 1}>
              {item == "min" && (
                <div className="flex justify-start">
                  <IoAlertOutline className="text-red-500" />
                  <p className="text-xs font-semibold text-red-500">
                    Kata sandi harus mengandung setidaknya 8 karakter
                  </p>
                </div>
              )}
              {item == "uppercase" && (
                <div className="flex justify-start">
                  <IoAlertOutline className="text-red-500" />
                  <p className="text-xs font-semibold text-red-500">
                    Kata sandi harus mengandung setidaknya 1 huruf besar
                  </p>
                </div>
              )}

              {item == "digits" && (
                <div className="flex justify-start">
                  <IoAlertOutline className="text-red-500" />
                  <p className="text-xs font-semibold text-red-500">
                    Kata sandi harus mengandung setidaknya 1 angka.
                  </p>
                </div>
              )}
              {item == "spaces" && (
                <div className="flex justify-start">
                  <IoAlertOutline className="text-red-500" />
                  <p className="text-xs font-semibold text-red-500">
                    Kata sandi tidak boleh menggunakan spasi
                  </p>
                </div>
              )}
            </div>
          ))}
          {!PasswordSame && (
            <div className="flex justify-start">
              <IoAlertOutline className="text-red-500" />
              <p className="text-xs font-semibold text-red-500">
                Kata sandi harus sama.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
