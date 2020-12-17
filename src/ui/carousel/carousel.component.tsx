import React from 'react';
import { Div } from '../div/div.component';
import { ScrollDiv } from '../scrolldiv/scrolldiv.component';

import { CarouselProps, CompoundedCarousel } from './carousel.type';
import CarouselItem from './item.carousel';

const Carousel: CompoundedCarousel<CarouselProps> = ({
  children,
  itemsPerPage = 1,
  renderIndicators,
  showIndicators = true,
  ...props
}) => {
  const [selectedPage, setSelectedPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const items: JSX.Element[] = React.useMemo(() => {
    return (
      React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return;

        if (child.type === CarouselItem) return child;

        console.warn('Only children of type Carousel.Item are allowed here.');
        return null;
      }) ?? []
    );
  }, [children]);

  const init = (width: number) => {
    // initialise width
    setWidth(width);
    // initialise total pages
    const totalItems = items.length;
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  };

  const getPage = (offset: number) => {
    for (let i = 1; i <= totalPages; i++) {
      console.log(
        `offset: ${offset} / width: ${width} / totalPages: ${totalPages} / pageIndex: ${i}`
      );

      if (offset + 1 < (width / totalPages) * i) return i;
      if (i === totalPages) return i;
    }

    return 0;
  };

  const internal_renderIndicators = () => {
    if (renderIndicators) return renderIndicators({ selectedPage, totalPages });

    return (
      <Div flexDir="row" justifyContent="center" my="lg">
        {Array(totalPages)
          .fill(0)
          .map((_, index) => {
            return (
              <Div
                w={10}
                h={10}
                rounded="circle"
                bg={selectedPage === index + 1 ? 'blue600' : 'gray400'}
                mx="xs"
                key={index}
              />
            );
          })}
      </Div>
    );
  };

  return (
    <>
      <ScrollDiv
        {...props}
        horizontal={true}
        contentContainerStyle={{
          width: `${(100 / itemsPerPage) * items.length}%`,
          flex: 1,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={(data) => {
          setWidth(data.nativeEvent.contentSize.width);
          setSelectedPage(getPage(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {items?.map((child, index) => (
          <Div flex={1} key={index}>
            {child}
          </Div>
        ))}
      </ScrollDiv>

      {showIndicators && internal_renderIndicators()}
    </>
  );
};

Carousel.Item = CarouselItem;

export { Carousel };
