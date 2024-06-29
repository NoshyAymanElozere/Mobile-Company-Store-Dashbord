import LodingBtn from "../component/lodingBtn";
import MainInput from "../component/mainInput";
import PasswordInput from "../component/passwordInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../context/auth/AuthProvider";
import { axiosInstance } from "../hooks/axios";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      email,
      password,
      fcm_token: "asd",
    };
    try {
      setLoading(true);
      const response = await axiosInstance.post(
        "/auth/login/dashboard",
        payload
      );
      const token = response.data.data.token;
      login(response.data.data);
      setLoading(false);

      localStorage.setItem("AUTH_TOKEN", token);
      localStorage.setItem(
        "LOCAL_STORAGE_PROFILE_KEY",
        JSON.stringify(response.data.data)
      );
      navigate("/");
    } catch (error) {
      setError("Invalid username or password");
      Swal.fire(error.response.data.message);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get started today
          </h1>

          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8  dark:shadow-white"
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <MainInput
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <PasswordInput
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <LodingBtn loading={loading} onClick={handleSubmit}>
              click
            </LodingBtn>
            <p className="text-center text-sm text-gray-500">
              by -DR
              <Link className=" text-indigo-600" to="/">
                Code
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
