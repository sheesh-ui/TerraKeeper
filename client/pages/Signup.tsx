import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User, Shield, Leaf } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-start pt-12 px-6">
      {/* Logo */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield
              className="w-10 h-10 text-terrakeeper-light-green"
              strokeWidth={1.5}
            />
          </div>
          <div className="absolute bottom-1 right-1">
            <Leaf
              className="w-6 h-6 text-terrakeeper-light-green"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h1>
      <p className="text-gray-600 text-sm mb-8">Join TerraKeeper today</p>

      {/* Form Container */}
      <form onSubmit={handleSignup} className="w-full max-w-sm">
        {/* Name Input */}
        <div className="mb-5">
          <div className="relative">
            <User className="absolute left-4 top-3.5 w-5 h-5 text-terrakeeper-gray" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-sm placeholder-terrakeeper-gray focus:outline-none focus:ring-2 focus:ring-terrakeeper-light-green focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-5">
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 w-5 h-5 text-terrakeeper-gray" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-sm placeholder-terrakeeper-gray focus:outline-none focus:ring-2 focus:ring-terrakeeper-light-green focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-8">
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 w-5 h-5 text-terrakeeper-gray" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-sm placeholder-terrakeeper-gray focus:outline-none focus:ring-2 focus:ring-terrakeeper-light-green focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-terrakeeper-light-green text-white text-base font-semibold rounded-2xl hover:bg-opacity-90 transition disabled:opacity-70 mb-4"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>

      {/* Login Link */}
      <p className="text-gray-600 text-sm">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-terrakeeper-light-green font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
