import { useContext } from "react";
import Logout from "../components/Logout";
import { State } from "../context/stateContext";

export default function LogOut() {
  const { showLogoutModal, setShowLogoutModal } = useContext(State);

  return (
    <>

              <button className="p-[3px] relative" onClick={() => setShowLogoutModal(true)}>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Logout
                </div>
              </button>

      {/* Logout component modal */}
      {showLogoutModal && <Logout />}
    </>
  );
}
