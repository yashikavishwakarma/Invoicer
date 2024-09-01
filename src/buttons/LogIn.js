import { useContext } from "react";
import AuthContext from "../context/auth";

export default function LogIn() {
  const { login } = useContext(AuthContext);

  return (
    <>
              <button className="p-[3px] relative" onClick={login}>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Login
                </div>
              </button>
    </>
  );
}
