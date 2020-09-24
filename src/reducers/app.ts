import { Theme } from '@material-ui/core';
import constants from '../constants';
import { createMaterialTheme } from '../utils';

export type AppState = {
  useResponsiveFonts: boolean,
  title: string,
  loading: boolean,
  theme?: Theme
};

export type AppAction = {
  type: string,
  payload: {
    title?: string,
    loading?: boolean,
    theme?: Theme,
    useResponsiveFonts?: boolean
  }
};

const defaultState = {
  title: 'Not Found',
  useResponsiveFonts: true,
  loading: false
};

export function app(state: AppState = defaultState, action: AppAction) {
  switch (action.type) {
    case constants.app.APP_LOADING:
      return {
        ...state,
        loading: true
      };
    case constants.app.APP_LOADED:
      return {
        ...state,
        loading: false
      };
    case constants.app.THEME_CHANGE:
      if (action.payload.theme) {
        const newTheme = createMaterialTheme(action.payload.theme)(action.payload.useResponsiveFonts);
        return {
          ...state,
          theme: newTheme
        }
      }
      return state;
    case constants.app.APP_TITLE_CHANGE:
      return {
        ...state,
        title: action.payload.title || "Not Found"
      }
    default:
      return state;
  }
}