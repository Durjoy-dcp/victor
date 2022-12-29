import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp: React.FC = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleToSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const username: string = event.currentTarget.username.value;
    const email: string = event.currentTarget.email.value;
    const password: string = event.currentTarget.password.value;
    console.log(username, email, password);
    signup(email, password)
      .then((res) => {
        toast.success("Successfully joined");
        navigate("/addtask");
      })
      .catch((err) => {
        toast.error("Sorry");
      });
  };

  return (
    <div className="container mx-auto max-w-sm border shadow-lg p-3 rounded-lg">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleToSignUp}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Name" />
          </div>
          <TextInput
            id="username"
            type="text"
            name="username"
            placeholder="Name"
            required={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            placeholder="name@gmail.com"
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
        <Button type="submit">Sign Up</Button>

        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default SignUp;
