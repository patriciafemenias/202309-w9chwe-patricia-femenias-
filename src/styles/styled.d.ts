import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      accent: string;
      light: string;
      backGroundHeader: string;
    };
    typography: {
      mainFont: string;
    };
  }
}
