import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleToLogin = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const email: string = event.currentTarget.email.value;
    const password: string = event.currentTarget.password.value;

    login(email, password)
      .then((res) => {
        toast.success("Successfully Logged");
        navigate("/addtask");
      })
      .catch((err) => {
        toast.error("Sorry");
      });
  };
  return (
    <div>
      <div className="container mx-auto max-w-sm border shadow-lg p-3 rounded-lg">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleToLogin}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              name="password"
              required={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="remember">Minimum use 6 characters</Label>
          </div>
          <Button type="submit">Login</Button>

          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
