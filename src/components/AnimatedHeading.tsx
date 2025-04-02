import { useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3';
}

const AnimatedHeading = ({ text, className = "", tag = 'h1' }: AnimatedHeadingProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const Tag = tag;

  return (
    <Tag 
      className={`${className} overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${isHovering ? 'animate-fly-away' : 'animate-fly-in'}`}
          style={{ 
            '--fly-x': `${Math.random() * 100 - 50}px`,
            '--fly-y': `${Math.random() * 100 - 50}px`,
            '--fly-rotate': `${Math.random() * 360}deg`,
            animationDelay: isHovering ? `${index * 0.02}s` : `${(text.length - index) * 0.02}s`
          } as any}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedHeading; 