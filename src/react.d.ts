import styled from "styled-components";

interface PlightDark {
  backgroundImage: string;
  backgroundSize: string;
  backgroundRepeat: string;
  color: string;
  img: string;
}
interface LightDark {
  light: PlightDark;
  dark: PlightDark;
}
declare module "styled-components" {
  export interface DefaultTheme {
    themes: LightDark;
  }
}
