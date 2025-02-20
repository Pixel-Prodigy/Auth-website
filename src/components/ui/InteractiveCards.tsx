import React from "react";

interface InteractiveCardsProps {
  variant: string;
  src: string;
  width?: number;
  height?: number;
  className?: string;
}
import Image from "next/image";
const InteractiveCards: React.FC<InteractiveCardsProps> = ({
  variant,
  src,
  width,
  height,
  className,
}) => {
  return (
    <div className={`card ${variant} rounded-[8px] `}>
      <Image
        src={src}
        alt="Interactive Card"
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};

export default InteractiveCards;
