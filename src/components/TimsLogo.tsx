import React from 'react';

interface TimsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const TimsLogo: React.FC<TimsLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Height configurations maintaining exact aspect ratio
  const heightClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-13',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`} id="tims-official-logo">
      <a
        href="#home"
        className="group inline-flex items-center transition-opacity hover:opacity-95 focus:outline-none"
        aria-label="TIMS DESIGNS Home"
      >
        <img
          src="/image.png"
          alt="TIMS DESIGNS"
          className={`${heightClasses[size]} w-auto object-contain block`}
          loading="eager"
        />
      </a>
    </div>
  );
};
