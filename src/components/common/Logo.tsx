import React from 'react';
import { Shield, ShieldAlert } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-8' }) => {
  return (
    <div className={`relative ${className}`}>
      <Shield className="text-benin-green-600 dark:text-benin-green-500 w-full h-full" />
      <ShieldAlert className="text-benin-red-500 absolute top-0 left-0 w-full h-full opacity-80" />
    </div>
  );
};

export default Logo;