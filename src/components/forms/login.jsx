import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const BACKEND_URL = "http://localhost:8000/api/login";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(BACKEND_URL, data);
      
      if (response.status === 200) {
        // Successfully logged in, handle the token and role check
        const token = response.data.Authorization.token;
        const user = response.data.user;

        // Store token in localStorage or any other place if needed
        localStorage.setItem('token', token);

        // Check the role and navigate accordingly
        if (user.role === 'admin') {
          navigate("/admin"); // Redirect to the admin page if user is an admin
        } else {
          navigate("/"); // Otherwise, redirect to home page or user dashboard
        }
      }
    } catch (error) {
      alert("Invalid credentials");
      console.error("Login failed", error);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(180deg, #0F3556 10%, #3C587D 28%, #8C7D60 57%, #AC9E7D 76%, #747B64 100%)",
      }}
    >
      <h1 className="text-4xl italic font-bold text-[#0A2B4A] font-serif mb-6">
        Your <span className="text-yellow-500">Compass</span>
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Add your details below to get back into the app
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1" htmlFor="email">
              Email address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                id="email"
                placeholder="e.g. abc@gmail.com"
                className="w-full outline-none text-black text-sm"
                {...register("email", { required: true })}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full outline-none text-black text-sm"
                {...register("password", { required: true })}
              />
            </div>
          </div>

          <div className="text-right text-sm">
            <Link to="/forget_password" className="text-blue-800 hover:underline">
              Forget Password?
            </Link>
          </div>

<<<<<<< HEAD
          <Link to="/admin">
            <button
              type="submit"
              className="w-full bg-[#0f3556] text-white font-semibold py-2 rounded-md hover:bg-[#0d2d49] transition login_button"
            >
              Log in
            </button>
          </Link>
=======
          <button
            type="submit"
            className="w-full bg-[#0f3556] text-white py-2 rounded-lg font-semibold hover:bg-[#0d2d49] transition"
          >
            Log in
          </button>
>>>>>>> main
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Don't have an account?
          <Link to="/create_signup" className="text-blue-800 hover:underline ml-1">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
