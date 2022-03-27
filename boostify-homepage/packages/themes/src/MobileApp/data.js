import { VpnLock } from "@styled-icons/material/VpnLock";
import { CommentLightning } from "@styled-icons/fluentui-system-regular/CommentLightning";
import { InfoSquareFill } from "@styled-icons/bootstrap/InfoSquareFill";
import { UserInjured } from "@styled-icons/fa-solid/UserInjured";
import { AngleDoubleUp } from "@styled-icons/fa-solid/AngleDoubleUp";
import { Badge } from "@styled-icons/open-iconic/Badge";
import { Timer } from "@styled-icons/boxicons-regular/Timer";
import secondFuture from "./assets/screenshots/AshHome.png";
import FAQPathy from "./assets/FAQPathy.png";
import octaneHome from "./assets/screenshots/octaneHome.png";
import male from "./assets/clients/photo-male.jpg";
import malex2 from "./assets/clients/photo-male@2x.jpg";
import female from "./assets/clients/photo-female.jpg";
import femalex2 from "./assets/clients/photo-female@2x.jpg";
import { colors } from "./styles";
import pic1 from "./assets/screenshots/pic 1.png";
import pic2 from "./assets/screenshots/pic 2.png";
import pic3 from "./assets/screenshots/pic 3.png";
import pic4 from "./assets/screenshots/pic 4.png";
import pic5 from "./assets/screenshots/pic 5.png";
import pic6 from "./assets/screenshots/pic 6.png";
import pic7 from "./assets/screenshots/pic 7.png";
import pic8 from "./assets/screenshots/pic 8.png";
import pic9 from "./assets/screenshots/pic 9.png";
import pic10 from "./assets/screenshots/pic 10.png";
import pic11 from "./assets/screenshots/pic 11.png";
import pic12 from "./assets/screenshots/pic 12.png";
import pic13 from "./assets/screenshots/pic 13.png";
import pic14 from "./assets/screenshots/pic 14.png";
import pic15 from "./assets/screenshots/pic 15.png";
import pic16 from "./assets/screenshots/pic 16.png";

import ArenasBoostLogo from "./components/Logo/ArenasBoost";
import KillsBoostLogo from "./components/Logo/KillsBoost";

export default {
  title: "Mobile App",
  navbar: {
    links: [],
    actions: [
      {
        href: "http://mypags.app",
        label: "Start free trial",
      },
    ],
  },
  contact: {
    title: "Contact",
    sections: [],
  },

  about: {
    title: "Why Boostify?",
    text: `We are utmost proud of the quality of our services, this is because we enforce security and quality assurance through all our boosters through a set of guidelines.`,
    features: [
      {
        id: "feature1",
        IconProps: {
          icon: VpnLock,
          gradient: colors.primary,
        },
        title: `"Safety first, dearies, and then, of course, utter mayhem."`,
        text:
          "All our Boosters are required to connect to our VPN server before starting the boosting process. We ensure privacy and security at all times from our professionals. Then inherently they can proceed to decimate their lobbies.",
      },
      {
        id: "feature2",
        IconProps: {
          icon: CommentLightning,
          gradient: colors.primary,
        },
        title: "Lightning fast",
        text:
          "As soon as we get an order we notify all our boosters of an opening. Depending on availablity the maximum time before your order is started will be 24 hours. And we usually finish the order within those same 48h. We dont want players who love playing the game to stop for any more than they need to.",
      },
      {
        id: "feature3",
        IconProps: {
          icon: InfoSquareFill,
          gradient: colors.primary,
        },
        title: "Returns",
        text:
          "We take user satisfaction as our utmost importance. Please feel free to contact us about any complaints or inquiries about your order. We are confident in our boosters and have a 30 day Money-Back guaranteed policy for any incompleted orders or negative experiences.",
      },
    ],
  },

  features: [
    {
      ImageProps: {
        src: octaneHome,
        style: { display: "flex", alignItems: "center" },
      },

      title: "What is Apex Legends Ranked Boosting?",

      CtaTo: "/rank-boosting",
      CtaText: "Buy Rank Boosting",

      text:
        "In Ranked you drop against 19 other teams. You earn RP (Ranked Points) for successful matches and you climb up in Ranked. Your highest tier is shown to friends and other players, determening your prestige. Ranked Boosting is the best way to get your rank. We will grind on your account or one of our pros will squad up with you!",
      list: [
        {
          IconProps: {
            icon: UserInjured,
            gradient: colors.primary,
          },
          title: "Avoid Headaches",
          text:
            "From playing the game solo with misinterpreted and often downright bad teamates, to tedious grinding for a sweet victory only to be scraped away by RNG hotdrops, the ranked grind can just make the game unenjoyable. That's where we come in.",
        },
        {
          IconProps: {
            icon: AngleDoubleUp,
            gradient: colors.primary,
          },
          title: "Have fun again!",
          text:
            "Rank Boost will help you get out of the boring grind and back to competitiveness and fun. Simply select your current RP and your desired RP in our selection cards. Dont just boost your rp, but get a valuable lesson with it with our DuoQueue feature! Squad up with our professionals and learn from the best.",
        },
      ],
    },
    {
      ImageProps: {
        src: secondFuture,
        style: { display: "flex", alignItems: "center" },
      },
      title: "What is Badge Boosting?",
      CtaTo: "/acheivement-badges",
      CtaText: "Buy Badge Boosting",
      text:
        "In Apex Legends, exceptional achievements are rewarded with badges to illustrate on your banner. Plant fear into your enemies before the match even starts with our badge boosting service! Choose from any of the of badges available in our badge boosting section and our pros will hop on and shred.",
      list: [
        {
          IconProps: {
            icon: Badge,
            gradient: colors.primary,
          },
          title: "Stop trying your luck",
          text:
            "Don't depend on SBMM to give you a lucky game for your favourite badges. Pick and choose the way you highlight your best character's banner with Acheivement Boost. Just select and search from our vast variety of badges. For any special character badges, please drop us a support ticket in the contact page",
        },
        {
          IconProps: {
            icon: Timer,
            gradient: colors.primary,
          },
          title: "Your time is valuable",
          text:
            "We understand that not all players can afford to spend the time for that 20 kill or 4K damage match, or the tens of badges available in Apex. This is why we take pride in our pros and their extremley fast delivery of any badge boosting needs. ",
        },
      ],
    },
    {
      title: "Checkout our other Services",

      list: [
        {
          IconProps: {
            icon: ArenasBoostLogo,
            gradient: "primary",
          },
          title: "Arenas Boost",
          CtaTo: "/Arenas-Boost",
          CtaText: "Buy Arenas Boosting",
          text:
            "Get the Arenas Points boost you need to acheive the rank you desire.",
        },
        {
          IconProps: {
            icon: KillsBoostLogo,
            gradient: "tertiary",
          },
          title: "Kills Boost",
          CtaTo: "/kills-boosting",
          CtaText: "Buy Kills Boosting",

          text:
            "Deck out your banner with a high kill count! Get your desired kills with our killsboost service.",
        },
      ],
    },
    {
      ImageProps: {},
      title: "More amazing features",
      text:
        "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      list: [],
    },
  ],
  screenshots: {
    title: "Recently Delivered Orders",
    text: "Checkout pics from recent customers!",
    images: [
      {
        src: pic1,
        srcSet: `${pic1} 1x, ${pic1} 2x`,
        alt: "Phone 1",
      },
      {
        src: pic2,
        srcSet: `${pic2} 1x, ${pic2} 2x`,
        alt: "Phone 2",
      },
      {
        src: pic3,
        srcSet: `${pic3} 1x, ${pic3} 2x`,
        alt: "Phone 3",
      },
      {
        src: pic4,
        srcSet: `${pic4} 1x, ${pic4} 2x`,
        alt: "Phone 4",
      },
      {
        src: pic5,
        srcSet: `${pic5} 1x, ${pic5} 2x`,
        alt: "Phone 5",
      },
      {
        src: pic6,
        srcSet: `${pic6} 1x, ${pic6} 2x`,
        alt: "Phone 6",
      },
      {
        src: pic7,
        srcSet: `${pic7} 1x, ${pic7} 2x`,
        alt: "Phone 6",
      },
      {
        src: pic8,
        srcSet: `${pic8} 1x, ${pic8} 2x`,
        alt: "Phone 6",
      },
      {
        src: pic9,
        srcSet: `${pic9} 1x, ${pic9} 2x`,
        alt: "Phone 6",
      },
      {
        src: pic10,
        srcSet: `${pic10} 1x, ${pic10} 2x`,
        alt: "Phone 6",
      },
      {
        src: pic11,
        srcSet: `${pic11} 1x, ${pic11} 2x`,
        alt: "Phone 6",
      },
      {
        src: pic12,
        srcSet: `${pic12} 1x, ${pic12} 2x`,
        alt: "Phone 6",
      },
      {
        src: pic13,
        srcSet: `${pic13} 1x, ${pic13} 2x`,
        alt: "Phone 6",
      },
      {
        src: pic14,
        srcSet: `${pic14} 1x, ${pic14} 2x`,
        alt: "Phone 6",
      },
      {
        src: pic15,
        srcSet: `${pic15} 1x, ${pic15} 2x`,
        alt: "Phone 6",
      },
      {
        src: pic14,
        srcSet: `${pic16} 1x, ${pic16} 2x`,
        alt: "Phone 6",
      },
    ],
  },
  clients: {
    title: "What clients say about us?",
    comments: [
      {
        author: "Pat Cooper, Big Company SEO",
        text: `Elit officia consectetur mollit occaecat incididunt sunt labore ad est veniam cupidatat tempor. Deserunt veniam nostrud est ad enim labore sit dolore amet enim veniam ipsum. Ullamco cillum ad nulla quis aliquip fugiat veniam incididunt ipsum cupidatat. Lorem qui voluptate ut enim occaecat et ut eu aliquip culpa.`,
        AvatarProps: {
          src: male,
          srcSet: `${male} 1x, ${malex2} 2x`,
        },
      },
      {
        author: "Orsola Jeroch, Bigger Company CTO",
        text: `Praesent nec commodo arcu. Vivamus convallis pretium malesuada. Aenean feugiat maximus suscipit. Fusce maximus aliquam ipsum, at hendrerit augue aliquet ac. Maecenas scelerisque, massa a fringilla imperdiet, velit purus gravida dolor, et blandit lorem nulla non eros.`,
        AvatarProps: {
          src: female,
          srcSet: `${female} 1x, ${femalex2} 2x`,
        },
      },
    ],
  },
  faq: {
    title: "Do you have any questions?",
    image: FAQPathy,
    text:
      "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
    options: [
      {
        title: "Cras quis dolor auctor mi varius tincidunt?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title: "Mauris accumsan dolor et elementum dapibus?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title:
          "Phasellus sollicitudin neque a odio varius, condimentum ultrices risus molestie?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title: "Pellentesque fringilla non dolor ut convallis?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title:
          "Integer imperdiet venenatis orci, ac dictum libero semper sit amet?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
    ],
  },
  pricing: {
    title: "Pricing",
    prices: {
      currency: "USD",
      types: {
        a: "Monthly",
        b: "Annually",
      },
      sections: [
        {
          title: "Beginner",
          price: {
            a: "$0",
            b: "$0",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: false,
            },
            {
              text: "Nullam vitae tortor",
              check: false,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: false,
            },
            {
              text: "Fusce quis vestibulum",
              check: false,
            },
          ],
          button: {
            text: "Choose beginner",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          title: "Advanced",
          price: {
            a: "$12",
            b: "$120",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: true,
            },
            {
              text: "Nullam vitae tortor",
              check: true,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: false,
            },
            {
              text: "Fusce quis vestibulum",
              check: false,
            },
          ],
          button: {
            text: "Choose advanced",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          title: "Expert",
          price: {
            a: "$24",
            b: "$240",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: true,
            },
            {
              text: "Nullam vitae tortor",
              check: true,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: true,
            },
            {
              text: "Fusce quis vestibulum",
              check: true,
            },
          ],
          button: {
            text: "Choose expert",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
      ],
    },
  },

  newsletter: {
    title: "Stay always up to date",
    text:
      "Sign up to our monthly newsletter and get news and grest special offers!",
    buttonText: "Sign up",
    inputPlaceholder: "Your email address",
  },
  copyright: "© 2020 Coffeecream Themes",
};
