import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="bg-[#E8D5D5] rounded-3xl p-8 w-[400px] shadow-lg">
      <h1 className="text-[#4A1F1F] text-3xl font-bold mb-6 text-center">
        Login to Continue
      </h1>

      <div className="space-y-4 mb-6">
        {/* Email Input */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
            <Mail size={20} />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#4A4458] text-white placeholder-gray-300 rounded-lg py-3 px-12 outline-none focus:ring-2 focus:ring-[#4A1F1F]"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
            <Lock size={20} />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full bg-[#4A4458] text-white placeholder-gray-300 rounded-lg py-3 px-12 outline-none focus:ring-2 focus:ring-[#4A1F1F]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Sign In Button */}
      <button
        onClick={handleSignIn}
        className="w-full bg-[#A63939] hover:bg-[#8E2F2F] text-white font-semibold rounded-lg py-3 mb-4 transition-colors"
      >
        Sign In
      </button>

      {/* Remember me and Forgot Password */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 border-2 border-[#A63939] rounded accent-[#A63939]"
          />
          <span className="text-[#A63939]">Remember me</span>
        </label>
        <a href="#" className="text-[#A63939] hover:underline">
          Forgot Password?
        </a>
      </div>

      {/* Sign up link */}
      <div className="text-center text-sm">
        <span className="text-[#4A1F1F]">Don't have an account? </span>
        <a href="#" className="text-[#A63939] font-semibold hover:underline">
          Sign up
        </a>
      </div>
    </div>
  );
}