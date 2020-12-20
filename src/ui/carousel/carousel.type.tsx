import {
  BorderPropsType,
  RoundedPropsType,
  ShadowPropsType,
  SpacingPropsType,
} from '../../theme';

import CarouselItem from './item.carousel';

interface CarouselIndicator {
  selectedPage: number;
  totalPages: number;
}

export interface CarouselProps
  extends BorderPropsType,
    RoundedPropsType,
    ShadowPropsType,
    SpacingPropsType {
  flex?: number;
  itemsPerPage?: number;
  showIndicators?: boolean;
  renderIndicators?: (props: CarouselIndicator) => JSX.Element;
}

export interface CompoundedCarousel<T> extends React.FC<T> {
  Item: typeof CarouselItem;
}
