import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp: React.FC = () => {
  return (
    <div className="container mx-auto max-w-sm border shadow-lg p-3 rounded-lg">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Name" />
          </div>
          <TextInput
            id="username"
            type="text"
            name="name"
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
        <Button type="submit">Sign Up</Button>

        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default SignUp;
