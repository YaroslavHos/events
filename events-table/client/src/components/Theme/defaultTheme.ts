import {ITheme} from "./types";

export enum ThemeColor {
    primary = 'primary',
    secondary = 'secondary',
    error = 'error',
    success = 'success',
    warning = 'warning',
    contrast = 'contrast',
    neutralGray = 'neutralGray',
    text = 'text',
    background = 'background',
}

// export const defaultTheme: ITheme = {
//     colors: {
//         [ThemeColor.primary]: {
//             dark600: '#001D9A',
//             main500: '#0029DB',
//             medium400: '#3D61FF',
//             medium300: '#607EFF',
//             light200: '#A7B7FF',
//             light100: '#CAD4FF',
//             extraLight50: '#EDF1FF',
//         },
//         [ThemeColor.secondary]: {
//             dark600: '#3A1F7A',
//             main500: '#532CAE',
//             medium400: '#8664D8',
//             medium300: '#9C80DF',
//             light200: '#BDAAEA',
//             light100: '#DED5F4',
//             extraLight50: '#F4F1FB',
//         },
//         [ThemeColor.error]: {
//             dark600: '#BF2600',
//             main500: '#DE350B',
//             medium400: '#FF4830',
//             medium300: '#FF7452',
//             light200: '#FF8F73',
//             light100: '#FFBDAD',
//             extraLight50: '#FFEBE6',
//         },
//         [ThemeColor.success]: {
//             dark600: '#006644',
//             main500: '#00875A',
//             medium400: '#36A176',
//             medium300: '#57D9A3',
//             light200: '#79F2C0',
//             light100: '#ABF5D1',
//             extraLight50: '#E3FCEF',
//         },
//         [ThemeColor.warning]: {
//             dark600: '#FF8B00',
//             main500: '#FF991F',
//             medium400: '#FFAB00',
//             medium300: '#FFC400',
//             light200: '#FFE380',
//             light100: '#FFF0B3',
//             extraLight50: '#FFFAE6',
//         },
//         [ThemeColor.background]: {
//             white: '#FFFFFF',
//             extraLightGrey: '#F9FAFB',
//         },
//     },
// }