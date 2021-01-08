import { ThemeType } from '../../theme';
import { getThemeProperty } from '../../theme/theme.service';

/**
 * get icon name to be used based on checked state
 *
 * @param checked
 */
export const getIconName = (checked: boolean = false) => {
  switch (true) {
    case checked:
      return 'radio-button-checked';
    default:
      return 'radio-button-unchecked';
  }
};

/**
 * get icon color based on state
 *
 * @param checked
 * @param disabled
 */
export const getIconColor = (
  checked: any,
  disabled: any,
  activeColor: any,
  inactiveColor: any,
  theme: ThemeType
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
