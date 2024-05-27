"use server";
import { getUser } from "@/helpers/GetUser";

const SigninButton = async () => {
  const user = getUser();
  console.log(user);
  return <button className="ml-auto text-green-600">Sign In</button>;
};

export default SigninButton;
