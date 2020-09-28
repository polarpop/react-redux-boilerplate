import { Theme, ThemeOptions } from '@material-ui/core';
import constants from '../../constants';
import { reducer } from '../../types';
import { createMaterialTheme } from '../../utils';

const { app } = constants;

export default function theme(
  state: Partial<reducer.State<Theme>> = {},
  action: reducer.Action<{
    theme?: ThemeOptions,
    useResponsiveFonts?: boolean
  }>
) {
  switch (action.type) {
    case app.THEME_CHANGE:
      if (action.payload.theme) {
        const newTheme = createMaterialTheme(action.payload.theme);
        return newTheme(action.payload.useResponsiveFonts);
      }
      return state;
    default:
      return state;
  }
}