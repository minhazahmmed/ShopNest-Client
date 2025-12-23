import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdminLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithEmailPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const ADMIN_EMAIL = "adminshopnest@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    loginWithEmailPassword(email, password)
      .then((res) => {
        if (res.user.email === ADMIN_EMAIL) {
          toast.success("Admin access granted!", { position: "top-right" });
          setTimeout(() => navigate("/admin/home"), 500);
        } else {
          toast.error("Access Denied: Not an admin account.");
        }
      })
      .catch((error) => {
        toast.error("Invalid Credentials!");
        console.error(error);
      });
  };

  return (
    <div className="w-full max-w-[400px] mx-auto mt-20">
      <div className="bg-white p-8 rounded-4xl shadow-2xl border border-gray-100">
        <h2 className="text-2xl font-black text-center mb-6 text-gray-800">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-bold text-gray-600 ml-1">Admin Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full mt-1 px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-green-500 outline-none transition-all"
              placeholder="admin@shopnest.com"
            />
          </div>

          <div>
            <label className="text-sm font-bold text-gray-600 ml-1">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="w-full mt-1 px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-green-500 outline-none transition-all"
                placeholder="••••••••"
              />
              <span
                className="absolute right-4 top-4 cursor-pointer text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg active:scale-95"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;