import { useState } from "react";
import CustomForm from "../component/CustomForm";
import MainInput from "../component/mainInput";
import LodingBtn from "../component/lodingBtn";
import { axiosInstance } from "../hooks/axios";

function ChangePassword() {
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewpassword] = useState("");
  const [new_password_confirmation, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Iam active function");
    const payload = {
      old_password,
      new_password,
      new_password_confirmation,
    };

    try {
      setLoading(true);

      const response = await axiosInstance.put(
        "/auth/password/change_password",
        payload
      );
      console.log(response);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  return (
    <div>
      {
        <CustomForm onSubmit={handleSubmit}>
          <div className="flex flex-wrap sm:flex-nowrap   item-center content-center gap-5 md:gap-9 py-2 sm:py-4">
            <MainInput
              type="password"
              placeholder="old password"
              // className="text-white"
              label="old password"
              required
              value={old_password}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <MainInput
              type="password"
              placeholder="new password"
              // className="text-white"
              label="new password"
              required
              value={new_password}
              onChange={(e) => setNewpassword(e.target.value)}
            />
          </div>
          <MainInput
            type="password"
            placeholder="new password"
            className=" w-6/12 m-auto py-3"
            label="new password"
            required
            value={new_password_confirmation}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <LodingBtn typeof="submit" loading={loading} onClick={handleSubmit}>
            update
          </LodingBtn>
        </CustomForm>
      }
    </div>
  );
}

export default ChangePassword;
