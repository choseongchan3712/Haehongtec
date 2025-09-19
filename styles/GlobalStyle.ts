import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  letter-spacing: -1px;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
  display: block;
  text-decoration: none;
  color: black;
}

*{
  box-sizing: border-box;
}

img {
  width: 100%;
}

:root {
  --pri-color-100: #D0EEFA; 
  --pri-color-200: #A0DAF5; 
  --pri-color-300: #70C7F0; 
  --pri-color-400: #38B3EB; 
  --pri-color-500: #00A9E0; 
  --pri-color-600: #0090C9; 
  --pri-color-700: #006CD3; 
  --pri-color-800: #004FA0; 
  --pri-color-900: #0D274D; 
  --sec-color-100: #E6DFF2; 
  --sec-color-200: #CDBBF0; 
  --sec-color-300: #B399ED; 
  --sec-color-400: #9973EA; 
  --sec-color-500: #804CE6; 
  --sec-color-600: #6B3CC8; 
  --sec-color-700: #552BA0; 
  --sec-color-800: #3D1C73; 
  --sec-color-900: #1A0D3D; 
  --ter-color-100: #E6F2E6; 
  --ter-color-200: #BFE6BF; 
  --ter-color-300: #99D699; 
  --ter-color-400: #73C673; 
  --ter-color-500: #4CB84C; 
  --ter-color-600: #3CA63C; 
  --ter-color-700: #2B802B; 
  --ter-color-800: #1C5C1C; 
  --ter-color-900: #0D330D; 
  --neu-color-100: #f5f5f5; 
  --neu-color-200: #E6E9ED; 
  --neu-color-300: #D1D7E0; 
  --neu-color-400: #B0BAC8; 
  --neu-color-500: #9EA9B8; 
  --neu-color-600: #8492A8; 
  --neu-color-700: #6E7D94; 
  --neu-color-800: #3D5271; 
  --neu-color-900: #1a1f2bff; 
  --pc-t-sz: 72px;
  --pc-h1-sz: 40px;
  --pc-h2-sz: 32px;
  --pc-h3-sz: 28px;
  --pc-sub-sz: 20px;
  --pc-p-sz: 16px;
  --pc-cap-size: 12px;
  --tab-t-sz: 44px;
  --tab-h1-sz: 32px;
  --tab-h2-sz: 28px;
  --tab-h3-sz: 24px;
  --tab-sub-sz: 18px;
  --tab-p-sz: 14px;
  --tab-cap-size: 10px;
  --mo-t-sz: 32px;
  --mo-h1-sz: 28px;
  --mo-h2-sz: 24px;
  --mo-h3-sz: 20px;
  --mo-sub-sz: 16px;
  --mo-p-sz: 12px;
  --mo-cap-size: 8px;
  --pc-t-wt: 900;
  --pc-h1-wt: 700;
  --pc-h2-wt: 700;
  --pc-h3-wt: 600;
  --pc-sub-wt: 600;
  --pc-p-wt: 400;
  --pc-cap-siwt: 400;
  --tab-t-wt: 900;
  --tab-h1-wt: 700;
  --tab-h2-wt: 700;
  --tab-h3-wt: 600;
  --tab-sub-wt: 600;
  --tab-p-wt: 400;
  --tab-cap-siwt: 400;
  --mo-t-wt: 900;
  --mo-h1-wt: 700;
  --mo-h2-wt: 600;
  --mo-h3-wt: 600;
  --mo-sub-wt: 600;
  --mo-p-wt: 400;
  --mo-cap-siwt: 400;
}
`;

export default GlobalStyle;
