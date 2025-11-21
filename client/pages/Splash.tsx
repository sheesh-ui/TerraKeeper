import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Leaf } from "lucide-react";

export default function Splash() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate("/login"), 500);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-terrakeeper-dark-green to-terrakeeper-light-green relative">
      {/* Logo */}
      <div className="mb-8 flex items-center justify-center">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield className="w-20 h-20 text-white" strokeWidth={1.5} />
          </div>
          <div className="absolute bottom-4 right-4">
            <Leaf className="w-12 h-12 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-white text-center mb-2 font-inter">
        TerraKeeper
      </h1>

      {/* Subtitle */}
      <p className="text-base text-white text-center mb-16 opacity-40 font-medium font-inter">
        AI-Powered Farm Alert System
      </p>

      {/* Loading Bar */}
      <div className="w-80 h-1.5 bg-white bg-opacity-20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-200"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}
