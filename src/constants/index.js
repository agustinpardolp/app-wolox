const BASE_URL = "http://private-8e8921-woloxfrontendinverview.apiary-mock.com";

const LOGIN_PATH = "/login";
const TECH_PATH = "/techs";

export const LOGIN_ENDPOINT = BASE_URL + LOGIN_PATH;
export const TECH_ENDPOINT = BASE_URL + TECH_PATH;

export const TWITER_URL = "https://twitter.com/Wolox";
export const WOLOX_URL = "https://www.wolox.com.ar/";

export const NAVBAR_TITLES = [
  { name: "header.home", path: "/#home", authPath: "/auth/home" },
  {
    name: "header.techonologies",
    path: "/#tecnologias",
    authPath: "/auth/tecnologias",
  },
  { name: "header.benefits", path: "/#beneficios" },
  { name: "header.requirements", path: "/#requerimientos" },
];

export const NAVBAR_AUTH_TITLES = [
  { name: "header.home", path: "/auth/home" },
  { name: "header.techonologies", path: "/auth/tecnologias" },
];

export const BENEFIT_LIST = [
  { name: "home.flex", file: "Ic_Hour" },
  { name: "home.homeOffice", file: "Ic_HomeOffice" },
  { name: "home.workshops", file: "Ic_Workshops" },
  { name: "home.snacks", file: "Ic_DrinkSnacks" },
  { name: "home.remote", file: "Ic_laptop" },
  { name: "home.lastTechnologies", file: "Ic_brain" },
];

export const REGEX = {
  NUMERIC_PASSWORD: /^[0-9]+$/,
  EMAIL_REGEX_SCHEMA: /^(?=.{1,254}$)((?=.{1,64}@)[ñÑa-zA-Z0-9-`~!@#$%^&*?/()_|+\-=;:'"´¨,.<>\{\}\[\]\\\/]+\.[A-Za-z]{2,4},?)$/,
};
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
