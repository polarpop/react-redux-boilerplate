import { createMuiTheme, responsiveFontSizes, Theme, ThemeOptions } from '@material-ui/core/styles';
import { ResponsiveFontSizesOptions } from '@material-ui/core/styles/responsiveFontSizes';

/**
 * Helper function to add responsive fonts, and create a material-ui theme.
 * 
 * @example
 * import { createMaterialTheme } from '../utils';
 * 
 * const theme = {
 *   palette: {
 *     primary: {},
 *     secondary: {}
 *   }
 * };
 * 
 * const muThemeCreator = createMaterialTheme(theme);
 * const withResponsiveFonts = muThemeCreator(true); // or just leave blank
 * const withoutResponsiveFonts = muThemeCreator(false);
 * 
 * export { withResponsiveFonts, withoutResponsiveFonts }
*/
export function createMaterialTheme(theme?: ThemeOptions, ...args: object[]): (useResponsiveFonts?: boolean, responsiveFontSizeOptions?: ResponsiveFontSizesOptions) => Theme {
  return (useResponsiveFonts: boolean = true, responsiveFontSizeOptions?: ResponsiveFontSizesOptions) => useResponsiveFonts ?
    responsiveFontSizes(createMuiTheme(theme, args), responsiveFontSizeOptions) :
    createMuiTheme(theme, args);
}