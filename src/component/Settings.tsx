import { useState } from "react";
import Mainbtn from "./mainBtn";
import MainInput from "./mainInput";
import { axiosInstance } from "../hooks/axios";
const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);

  const updateData = async (event) => {
    event.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    if (avatar) {
      formData.append("image", avatar);
    }

    formData.append("name", name);
    formData.append("email", email);

    try {
      const response = await axiosInstance.post("/auth/profile", formData);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold rounded py-1 text-center w-full bg-dark-purple text-white">
        Profile
      </h2>
      <form className="shadow-xl p-3 mx-3 my-3 rounded bg-dark-purple bg-pattern ">
        <div className="flex flex-wrap sm:flex-nowrap w-full item-center content-center gap-5 md:gap-9 py-1 ">
          <MainInput
            type="text"
            placeholder="name"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <MainInput
            type="email"
            placeholder="Email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-wrap sm:flex-nowrap w-full item-center content-center gap-5 md:gap-9 py-2 ">
          <MainInput
            type="file"
            label="Choose image"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>
        <Mainbtn onClick={updateData}>Update</Mainbtn>
      </form>
    </div>
  );
};

export default Settings;
