export const Color = {
  primary1: "#4c12a1",
  primary2: "#372463",
  secondary1: "#616871",
  secondary2: "#E3E8EE",
  inlineError: "#ff4d63",
  tooltip: "#fca17d",
  success: "#84C041",
  successLight: "#ade075",
  danger: "#F36B86",
  white: "#ffffff"
};

export const PxToVp = (px, vp = 1544) => {
  const result = parseFloat(px / vp) * 100;
  return `${result}vw`;
};

export const HexToRgbA = (hex, opacity) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (hex.length === 4) {
    r = `0x${hex[1]}${hex[1]}`;
    g = `0x${hex[2]}${hex[2]}`;
    b = `0x${hex[3]}${hex[3]}`;
  } else if (hex.length === 7) {
    r = `0x${hex[1]}${hex[2]}`;
    g = `0x${hex[3]}${hex[4]}`;
    b = `0x${hex[5]}${hex[6]}`;
  }
  return `rgba(${+r},${+g},${+b},${opacity || 1})`;
};
