import { Theme } from '@material-ui/core';
import constants from '../constants';
import { primaryTheme } from '../themes';
import { createMaterialTheme } from '../utils';

export interface ThemeState {
  theme: Theme,
  useResponsiveFonts: boolean
}

const defaultTheme = createMaterialTheme(primaryTheme)();

const defaultState: ThemeState = {
  theme: defaultTheme,
  useResponsiveFonts: true
};

export function theme(state = defaultState, action: any) {
  switch (action.type) {
    case constants.theme.CHANGE_THEME:
      const newTheme = createMaterialTheme(action.payload?.theme)(action.payload?.useResponsiveFonts);
      return {
        theme: newTheme,
        useResponsiveFonts: action.payload.useResponsiveFonts
      };
    default:
      return state;
  }
}