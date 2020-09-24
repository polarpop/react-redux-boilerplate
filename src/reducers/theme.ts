import { Theme } from '@material-ui/core';
import constants from '../constants';
import { primaryTheme } from '../themes';
import { createMaterialTheme, createDefaultReducerState } from '../utils';

export interface ThemeState {
  theme: Theme,
  useResponsiveFonts?: boolean
}

export interface ThemeAction {
  payload?: ThemeState;
  type: string;
  [key: string]: any;
}

const defaultState = createDefaultReducerState<ThemeState>({
  theme: createMaterialTheme(primaryTheme)(),
  useResponsiveFonts: true
});

export function theme(state = defaultState, action: ThemeAction) {
  switch (action.type) {
    case constants.theme.CHANGE_THEME:
      const newTheme = createMaterialTheme(action.payload?.theme)(action.payload?.useResponsiveFonts);
      return {
        theme: newTheme,
        useResponsiveFonts: action.payload?.useResponsiveFonts
      };
    default:
      return state;
  }
}