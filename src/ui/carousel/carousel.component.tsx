import React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Div } from '../div/div.component';
import { ScrollDiv } from '../scrolldiv/scrolldiv.component';

import { CarouselProps, CompoundedCarousel } from './carousel.type';
import CarouselItem from './item.carousel';

const Carousel: CompoundedCarousel<CarouselProps> = (incomingProps) => {
  const props = useDefaultProps('Carousel', incomingProps, {
    showIndicators: true,
  });

  const { children, renderIndicators, showIndicators } = props;
  const [selectedPage, setSelectedPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [totalContentWidth, setTotalContentWidth] = React.useState(0);

  const items: JSX.Element[] = React.useMemo(() => {
    return (
      React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return;
        }

        if (child.type === CarouselItem) {
          return child;
        }

        console.warn(
          'Only children of type Carousel.Item are allowed here. Any other child components will be ignored.'
        );
        return null;
      }) ?? []
    );
  }, [children]);

  const init = (width: number) => {
    // initialize width
    setTotalContentWidth(width);
    // initialize total pages
    const totalItems = items.length;
    setTotalPages(totalItems);
  };

  const getPage = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const widthOffset = event.nativeEvent.contentOffset.x;

    const widthOfEachItem = totalContentWidth / totalPages;
    // const pageWidth = widthOfEachItem * itemsPerPage;

    for (let page = 1; page <= totalPages; page++) {
      if (widthOffset + 1 < widthOfEachItem * page) {
        return page;
      }

      if (page === totalPages) {
        return page;
      }
    }

    return 0;
  };

  const internal_renderIndicators = () => {
    if (renderIndicators) {
      return renderIndicators({ selectedPage, totalPages });
    }

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
          width: `${100 * totalPages}%`,
          flex: 1,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, _h) => init(w)}
        onScroll={(data) => {
          setTotalContentWidth(data.nativeEvent.contentSize.width);
          setSelectedPage(getPage(data));
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
