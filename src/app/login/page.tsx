"use client";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";

const Login = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4 bg-gray-200">
      <h1 className="text-center text-xl font-bold">Logo</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mt-4 flex justify-between">
          <label htmlFor="email" className="py-2 pr-4">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="rounded-md p-2"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <label htmlFor="password" className="py-2 pr-4">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="mt-10 self-center rounded-md bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
