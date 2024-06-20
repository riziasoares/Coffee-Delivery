import { defaulTheme } from './../styles/themes/defaut';
import 'styled-components';
import { defaulTheme } from '../styles/themes/defaut';

//arquivo de configuração do styled-components (integração typescript com o styled-components)
type ThemeType = typeof defaulTheme;

declare module 'styled-components' {
  export interface defaulTheme extends ThemeType {}
}