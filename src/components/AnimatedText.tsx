interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block animate-text-flicker hover:animate-text-glitch hover:text-primary"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            animationDuration: '2s',
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText; 