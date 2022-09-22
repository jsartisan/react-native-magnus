import React, { ReactNode } from 'react';

interface CarouselItemProps {
  children: ReactNode;
}

const CarouselItem = ({ children }: CarouselItemProps) => {
  return <>{children}</>;
};

export default CarouselItem;
