import * as b from "bobril";
import * as Colors from "./colors";
import { withTransparency } from "./colorUtils";

export let strPrimary1Color = Colors.cyan500;
export let strPrimary2Color = Colors.cyan700;
export let strPrimary3Color = Colors.grey400;
export let strAccent1Color = Colors.pinkA200;
export let strAccent2Color = Colors.grey100;
export let strAccent3Color = Colors.grey500;
export let strTextColor = withTransparency(Colors.black, 0.87);
export let strCheckboxOffColor = withTransparency(Colors.black, 0.54);
export let strAlternateTextColor = Colors.white;
export let strCanvasColor = Colors.white;
export let strBorderColor = Colors.grey300;
export let strDisabledColor = withTransparency(Colors.black, 0.3);
export let strSliderColor = withTransparency(Colors.black, 0.54);
export let strAlternateDisabledColor = Colors.grey50;
export let strPickerHeaderColor = Colors.cyan500;
export let strClockCircleColor = withTransparency(Colors.black, 0.07);
export let strShadowColor = Colors.black;
export let strHoverColor = withTransparency("#999", 0.3);
export let strKeyboardFocusColor = withTransparency("#777", 0.3);
export let strErrorColor = Colors.red500;

export const primary1Color = () => strPrimary1Color;
export const primary2Color = () => strPrimary2Color;
export const primary3Color = () => strPrimary3Color;
export const accent1Color = () => strAccent1Color;
export const accent2Color = () => strAccent2Color;
export const accent3Color = () => strAccent3Color;
export const textColor = () => strTextColor;
export const checkboxOffColor = () => strCheckboxOffColor;
export const alternateTextColor = () => strAlternateTextColor;
export const canvasColor = () => strCanvasColor;
export const borderColor = () => strBorderColor;
export const disabledColor = () => strDisabledColor;
export const sliderColor = () => strSliderColor;
export const alternateDisabledColor = () => strAlternateDisabledColor;
export const pickerHeaderColor = () => strPickerHeaderColor;
export const clockCircleColor = () => strClockCircleColor;
export const shadowColor = () => strShadowColor;
export const hoverColor = () => strHoverColor;
export const keyboardFocusColor = () => strKeyboardFocusColor;
export const errorColor = () => strErrorColor;

export let strFontFamily = 'Roboto, sans-serif';

export const fontFamily = () => strFontFamily;

export let zDepthShadows = [
    [1, 6, 0.12, 1, 4, 0.12],
    [3, 10, 0.16, 3, 10, 0.23],
    [10, 30, 0.19, 6, 10, 0.23],
    [14, 45, 0.25, 10, 18, 0.22],
    [19, 60, 0.30, 15, 20, 0.22],
].map((d, i) =>
    b.styleDef({ boxShadow: () => `0 ${d[0]}px ${d[1]}px ${withTransparency(strShadowColor, d[2])},0 ${d[3]}px ${d[4]}px ${withTransparency(strShadowColor, d[5])}` }, null, "zDepth" + (i + 1))
    );