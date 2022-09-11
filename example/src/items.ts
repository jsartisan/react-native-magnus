import { ComponentType } from 'react';
import AvatarComponent from './components/Avatar';
import BadgeComponent from './components/Badge';
import ButtonComponent from './components/Button';
import CarouselComponent from './components/Carousel';
import CheckboxComponent from './components/Checkbox';
import CollapseComponent from './components/Collapse';
import DivComponent from './components/Div';
import DrawerComponent from './components/Drawer';
import DropdownComponent from './components/Dropdown';
import HeaderComponent from './components/Header';
import IconComponent from './components/Icon';
import InputComponent from './components/Input';
import ModalComponent from './components/Modal';
import OverlayComponent from './components/Overlay';
import RadioComponent from './components/Radio';
import SelectComponent from './components/Select';
import SkeletonComponent from './components/Skeleton';
import SnackbarComponent from './components/Snackbar';
import TagComponent from './components/Tag';
import TextComponent from './components/Text';
import ToggleComponent from './components/Toggle';
import TooltipComponent from './components/Tooltip';
import HomeExample1 from './pages/HomeExample1';
import IntroExample1 from './pages/IntroExample1';
import LoginExample1 from './pages/LoginExample1';
import LoginExample2 from './pages/LoginExample2';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const pages: ExampleComponentType[] = [
  {
    onScreenName: 'Login Example #1',
    navigationPath: 'LoginExample1',
    component: LoginExample1,
  },
  {
    onScreenName: 'Login Example #2',
    navigationPath: 'LoginExample2',
    component: LoginExample2,
  },
  {
    onScreenName: 'Home Example #1',
    navigationPath: 'HomeExample1',
    component: HomeExample1,
  },
  {
    onScreenName: 'Intro Example #1',
    navigationPath: 'IntroExample1',
    component: IntroExample1,
  },
];

export const components: ExampleComponentType[] = [
  {
    navigationPath: 'Input',
    onScreenName: 'Input',
    component: InputComponent,
  },
  {
    navigationPath: 'Text',
    onScreenName: 'Text',
    component: TextComponent,
  },
  { navigationPath: 'Div', onScreenName: 'Div', component: DivComponent },
  { navigationPath: 'Icon', onScreenName: 'Icon', component: IconComponent },
  {
    navigationPath: 'Button',
    onScreenName: 'Button',
    component: ButtonComponent,
  },
  {
    navigationPath: 'Checkbox',
    onScreenName: 'Checkbox',
    component: CheckboxComponent,
  },
  {
    navigationPath: 'Radio',
    onScreenName: 'Radio',
    component: RadioComponent,
  },
  {
    navigationPath: 'Dropdown',
    onScreenName: 'Dropdown',
    component: DropdownComponent,
  },
  {
    navigationPath: 'Toggle',
    onScreenName: 'Toggle',
    component: ToggleComponent,
  },
  {
    navigationPath: 'Avatar',
    onScreenName: 'Avatar',
    component: AvatarComponent,
  },
  {
    navigationPath: 'Badge',
    onScreenName: 'Badge',
    component: BadgeComponent,
  },
  {
    navigationPath: 'Tag',
    onScreenName: 'Tag',
    component: TagComponent,
  },
  {
    navigationPath: 'Collapse',
    onScreenName: 'Collapse',
    component: CollapseComponent,
  },
  {
    navigationPath: 'Header',
    onScreenName: 'Header',
    component: HeaderComponent,
  },
  {
    navigationPath: 'Drawer',
    onScreenName: 'Drawer',
    component: DrawerComponent,
  },
  {
    navigationPath: 'Modal',
    onScreenName: 'Modal',
    component: ModalComponent,
  },
  {
    navigationPath: 'Overlay',
    onScreenName: 'Overlay',
    component: OverlayComponent,
  },
  {
    navigationPath: 'Skeleton',
    onScreenName: 'Skeleton',
    component: SkeletonComponent,
  },
  {
    navigationPath: 'Snackbar',
    onScreenName: 'Snackbar',
    component: SnackbarComponent,
  },
  {
    navigationPath: 'Tooltip',
    onScreenName: 'Tooltip',
    component: TooltipComponent,
  },
  {
    navigationPath: 'Select',
    onScreenName: 'Select',
    component: SelectComponent,
  },
  {
    navigationPath: 'Carousel',
    onScreenName: 'Carousel',
    component: CarouselComponent,
  },
];
