import { getThemeProperty } from '../../theme/theme.service';

/**
 * get icon name based on state
 */
export const getIconName = (
  checked: boolean = false,
  disabled: boolean = false
) => {
  switch (true) {
    case disabled:
      return 'indeterminate-check-box';
    case checked:
      return 'check-box';
    default:
      return 'check-box-outline-blank';
  }
};

/**
 * get icon name
 *
 * @param checked
 * @param disabled
 */
export const getIconColor = (
  checked: any,
  disabled: any,
  activeColor: any,
  inactiveColor: any,
  theme: any
) => {
  switch (true) {
    case disabled:
      return getThemeProperty(theme.colors, inactiveColor);
    case checked:
      return getThemeProperty(theme.colors, activeColor);
    default:
      return getThemeProperty(theme.colors, inactiveColor);
  }
};
