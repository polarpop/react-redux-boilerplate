import { ThemeOptions } from '@material-ui/core';
import constants from '../constants';
import { reducer } from '../types';

export const onAppError = (error: Error): reducer.Action<{ error: Error }> => ({
  type: constants.app.APP_ERROR_CREATED,
  payload: {
    error
  }
});

export const onAppErrorDismissed = (): Partial<reducer.Action> => ({
  type: constants.app.APP_ERROR_DISMISSED
});

export const onAppLoading = (isLoading: boolean): reducer.Action<boolean> => ({
  type: isLoading ? constants.app.APP_LOADING : constants.app.APP_LOADED,
  payload: isLoading
});

export const onThemeChange = ({
  theme,
  useResponsiveFonts = true
}: { theme: ThemeOptions, useResponsiveFonts: boolean }
): reducer.Action<{ theme: ThemeOptions, useResponsiveFonts: boolean }> => ({
  type: constants.app.THEME_CHANGE,
  payload: {
    theme,
    useResponsiveFonts
  }
});

export const onTitleChange = (title: string): reducer.Action<string> => ({
  type: constants.app.APP_TITLE_CHANGE,
  payload: title
});