import { BagCheckFill } from "@styled-icons/bootstrap/BagCheckFill";
import { UserClock } from "@styled-icons/fa-solid/UserClock";
import { CalendarExclamation } from "@styled-icons/boxicons-regular/CalendarExclamation";
import textToMultiline from "@pagerland/common/src/utils/textToMultiline";
import background from "./assets/boostify/Horizon.webp";
import background2x from "./assets/boostify/Horizon2.jpg";

const now = new Date().getTime();
const countDate = new Date("apr 05 2022 18:00");
const gap = countDate - now;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const timeLeft = Math.floor(gap / day);
export default {
  title: "Real Estate",
  navbar: {
    links: [
      {
        to: "",
        "data-to": "",
        label: "Home",
      },
      {
        to: "about",
        "data-to": "about",
        label: "About",
      },
      {
        to: "location",
        "data-to": "location",
        label: "Location",
      },
      {
        to: "exterior",
        "data-to": "exterior",
        label: "Exterior",
      },
      {
        to: "interior",
        "data-to": "interior",
        label: "Interior",
      },
      {
        to: "surroundings",
        "data-to": "surroundings",
        label: "Surroundings",
      },
      {
        to: "gallery",
        "data-to": "gallery",
        label: "Gallery",
      },
      {
        to: "contact",
        "data-to": "contact",
        label: "Contact",
      },
    ],
    actions: [
      {
        href:
          "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
        label: "Buy theme",
      },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
      alt: "Horizon",
    },
    title: "Welcome To Boostify, Your Hive For",
    price: "Apex Legends Boosting",
    features: [],
    cta: {
      to: "about",
      children: "Buy Rank Boosting",
    },
  },
  location: {
    title: textToMultiline`Boosting is in our blood.\n Heres our mileage.`,
    text:
      "Integer vulputate turpis nisl, non auctor sapien accumsan semper. Praesent in pulvinar nisl. Nullam turpis sem, commodo vel congue accumsan, finibus ut nulla. Nunc a efficitur massa. Nulla viverra tincidunt felis, vel sodales metus maximus et. Suspendisse potenti. Donec tincidunt leo nisi, vitae rhoncus neque accumsan vitae.",
    counters: [
      {
        IconProps: {
          icon: BagCheckFill,
        },
        title: "Boosts completed",
        counter: {
          value: 6700,
          unit: "",
        },
      },
      {
        IconProps: {
          icon: UserClock,
        },
        title: "Orders queued",
        counter: {
          value: 8,
          unit: "",
        },
      },
      {
        IconProps: {
          icon: CalendarExclamation,
        },
        title: "Days Left In Split",
        counter: {
          value: timeLeft,
          unit: "",
        },
      },
    ],
  },
};
