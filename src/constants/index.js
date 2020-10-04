export const NAVBAR_TITLES = [
  { name: "Inicio", path: "/#home" },
  { name: "Tecnologias", path: "/#tecnologias" },
  { name: "Beneficios", path: "/#beneficios" },
  { name: "Requerimientos", path: "/#requerimientos" },
];
export const BENEFIT_LIST = [
  { name: "Flexibilidad Horaria", file: "Ic_Hour" },
  { name: "Home Office", file: "Ic_HomeOffice" },
  { name: "Capacitaciones y Workshops", file: "Ic_Workshops" },
  { name: "Snacks, frutas, y bebidas gratis", file: "Ic_DrinkSnacks" },
  { name: "Semana remota", file: "Ic_laptop" },
  { name: "Trabajar en ultimas tecnologías", file: "Ic_brain" },
];
export const REQUEST_STATUS = {
  NOT_LOADED: "NOT_LOADED",
  LOADING: "LOADING",
  LOADED: "LOADED",
  FAILED: "FAILED",
};
export const MEDIA_SIZES = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const DEVICES_MAX_WIDTH = {
  mobileS: `(max-width: ${MEDIA_SIZES.mobileS})`,
  mobileM: `(max-width: ${MEDIA_SIZES.mobileM})`,
  mobileL: `(max-width: ${MEDIA_SIZES.mobileL})`,
  tablet: `(max-width: ${MEDIA_SIZES.tablet})`,
  laptop: `(max-width: ${MEDIA_SIZES.laptop})`,
  laptopL: `(max-width: ${MEDIA_SIZES.laptopL})`,
  desktop: `(max-width: ${MEDIA_SIZES.desktop})`,
  desktopL: `(max-width: ${MEDIA_SIZES.desktop})`,
};

export const DEVICES_MIN_WIDTH = {
  mobileS: `(min-width: ${MEDIA_SIZES.mobileS})`,
  mobileM: `(min-width: ${MEDIA_SIZES.mobileM})`,
  mobileL: `(min-width: ${MEDIA_SIZES.mobileL})`,
  tablet: `(min-width: ${MEDIA_SIZES.tablet})`,
  laptop: `(min-width: ${MEDIA_SIZES.laptop})`,
  laptopL: `(min-width: ${MEDIA_SIZES.laptopL})`,
  desktop: `(min-width: ${MEDIA_SIZES.desktop})`,
  desktopL: `(min-width: ${MEDIA_SIZES.desktop})`,
};
