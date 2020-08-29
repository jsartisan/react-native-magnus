import {
  Box as SkeletonBox,
  Circle as SkeletonCircle,
} from './skeleton/skeleton.component';

import { Dropdown as DropdownContainer } from './dropdown/dropdown.component';
import { Option as DropdownOption } from './dropdown/option.component';
import { Select as SelectContainer } from './select/select.component';
import { Option as SelectOption } from './select/option.component';

export { Text } from './text/text.component';
export { Animated } from './animated/animated.component';
export { Tooltip } from './tooltip/tooltip.component';
export { Badge } from './badge/badge.component';
export { Overlay } from './overlay/overlay.component';
export { Fab } from './fab/fab.component';
export { Input } from './input/input.component';
export { Mention } from './mention/mention.component';
export { Textarea } from './input/textarea.component';
export { Div } from './div/div.component';
export { Div as Box } from './div/div.component';
export { ScrollDiv } from './scrolldiv/scrolldiv.component';
export { Button } from './button/button.component';
export { Icon } from './icon/icon.component';
export { Checkbox } from './checkbox/checkbox.component';
export { RadioGroup } from './radio/group.component';
export { Radio } from './radio/radio.component';
export { Image } from './image/image.component';
export { Drawer } from './drawer/drawer.component';
export { Snackbar } from './snackbar/snackbar.component';
export { SnackbarRefType } from './snackbar/snackbar.type';
export { Avatar } from './avatar/avatar.component';
export { AvatarGroup } from './avatar/avatar.group.component';
export { Tag } from './tag/tag.component';
export { Modal } from './modal/modal.component';
export { Toggle } from './toggle/toggle.component';
export { DropdownRef } from './dropdown/dropdown.type';

export const Skeleton = {
  Box: SkeletonBox,
  Circle: SkeletonCircle,
};

export const Dropdown = {
  Container: DropdownContainer,
  Option: DropdownOption,
};

export const Select = {
  Container: SelectContainer,
  Option: SelectOption,
};
