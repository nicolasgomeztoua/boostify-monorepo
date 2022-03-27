import textToMultiline from "@pagerland/common/src/utils/textToMultiline";

import OurTeam from "./assets/OurTeam,.png";

import booster1 from "./assets/avatars/booster1.webp";
import booster2 from "./assets/avatars/booster2.webp";
import booster3 from "./assets/avatars/booster3.webp";
import booster4 from "./assets/avatars/booster4.webp";
import RankBoost from "./assets/RankBoost.png";

import Cart from "./assets/Cart.png";
import Profile from "./assets/Profile.png";

export default {
  title: "Corporate",
  navbar: {
    links: [],
    actions: [
      {
        href:
          "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
        label: "Buy theme",
        target: "_blank",
      },
    ],
  },
  welcome: {
    background: {},
    title: "Corporate Template",
    subtitle: "Gatsby + React",
    description:
      "Pagerland offers a great, smooth looking and ultra-fast landing page templates built on Gatsby and React.",
    actions: [
      {
        as: "a",
        href:
          "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
        children: "Buy our theme",
        target: "_blank",
      },
      {
        to: "offer",
        children: "Learn more",
        variant: "outline",
      },
    ],
  },
  offer: {
    subtitle: "What we do",
    title: "How does this work?",
    services: [
      {
        icon: RankBoost,
        title: "Choose your boost!",
        text:
          "Customize your order to your needs. Pick and choose from any of our extras and options. Browse through our BR ranked, arenas ranked, and badge boosting services for a personalized boosting experience.",
      },
      {
        icon: Cart,
        title: "Checkout Safely",
        text:
          "We do NOT collect any data during checkout process, it is all handled securely by stripe or paypal. Our boosters will only have access to your account during boosting. After which the info is encrypted again. ",
      },
      {
        icon: Profile,
        title: "Sit Back, Relax",
        text:
          "And track your order step by step in our profile page! You can login with google or discord for easy access! You will also receive updates via email, and we are working on a live chat with the booster right on the platform! In the meantime, you can communicate any concerns via support chat and discord.",
      },
    ],
  },
  goals: {
    img: {},
    subtitle: "We stay focus on targets",
    title: "Our goals",
    text:
      "Proin sed pharetra ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam commodo eu justo in posuere. Sed elementum, ipsum eu faucibus porta, odio mauris posuere quam, eu cursus tellus est et lacus. Aenean maximus velit ac malesuada ultricies. Vestibulum magna leo, convallis non elit ac, hendrerit sollicitudin tellus.",
    cta: {
      children: "Read about our mission",
      href:
        "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
      target: "_blank",
      as: "a",
    },
  },
  mission: {
    img: {},
    subtitle: "Wha we’re dedicated to",
    title: "Our mission",
    text:
      "Proin sed pharetra ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam commodo eu justo in posuere. Sed elementum, ipsum eu faucibus porta, odio mauris posuere quam, eu cursus tellus est et lacus. Aenean maximus velit ac malesuada ultricies. Vestibulum magna leo, convallis non elit ac, hendrerit sollicitudin tellus.",
    cta: {
      children: "See what we offer",
      href:
        "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
      target: "_blank",
      as: "a",
    },
  },
  supportCta: {
    subtitle: "World class support",
    title: "We’re here to help!",
    text:
      "Simply go to our support website and open a ticket to get fast and professional help directly from them Envato Elite authors.",
    buttons: [
      {
        label: "Open support ticket",
        href: "https://coffeecream.freshdesk.com/",
      },
    ],
  },
  team: {
    img: {
      src: OurTeam,
      srcSet: `${OurTeam} 1x, ${OurTeam} 2x`,
    },
    subtitle: "Our biggest value are people",
    title: "Meet our great team",
    text: "",
    cta: {
      label: "Join us, we’re hiring!",
      href: "/ContactUs",
    },
    people: [
      {
        avatar: {
          src: booster1,
          srcSet: `${booster1} 1x, ${booster1} 2x`,
        },
        name: "Head Booster",
        position: "ShizaBruh",
      },
      {
        avatar: {
          src: booster2,
          srcSet: `${booster2} 1x, ${booster2} 2x`,
        },
        name: "Head Booster",
        position: "Pringles",
      },
      {
        avatar: {
          src: booster3,
          srcSet: `${booster3} 1x, ${booster3} 2x`,
        },
        name: "Assistant Booster",
        position: "Fulco",
      },
      {
        avatar: {
          src: booster4,
          srcSet: `${booster4} 1x, ${booster4} 2x`,
        },
        name: "Assistant Booster",
        position: "Walzy",
      },
    ],
  },
  testimonials: {
    subtitle: "Our customer reviews",
    title: "Testimonials",
    comments: [
      {
        author: "Pat Cooper, Big Company SEO",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a tellus turpis. Suspendisse posuere quam consequat magna bibendum pretium. Vivamus in porta mauris. Vestibulum ut euismod purus. Sed eu malesuada elit. Curabitur posuere consequat gravida. Donec laoreet volutpat sapien, sed malesuada nisi pellentesque et. Etiam imperdiet nunc enim, sit amet tempor sapien molestie id.`,
      },
      {
        author: "Orsola Jeroch, Bigger Company CTO",
        text: `Praesent nec commodo arcu. Vivamus convallis pretium malesuada. Aenean feugiat maximus suscipit. Fusce maximus aliquam ipsum, at hendrerit augue aliquet ac. Maecenas scelerisque, massa a fringilla imperdiet, velit purus gravida dolor, et blandit lorem nulla non eros.`,
      },
    ],
  },
  contactCta: {
    subtitle: "Interested in our services?",
    title: "Get a free quote!",
    text:
      "Ut at cursus justo, non luctus lacus. Proin cursus felis at dolor auctor molestie. Aenean fringilla dolor quis felis laoreet.",
    buttons: [
      {
        label: "Get a quote",
        href:
          "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
      },
      {
        label: "Contact us",
        href: "https://coffeecream.freshdesk.com/",
        variant: "outline",
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
            text: "Get a quote",
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
            text: "Get a quote",
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
            text: "Get a quote",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
      ],
    },
  },
  contact: {
    subtitle: "Drop us a line or visit us",
    title: "Contact",
    addresses: [
      {
        title: "New York Office",
        address: textToMultiline`3247  Forest Avenue\nNew York City, NY 10011\nUSA`,
        email: "newyork@email.com",
        phone: "+1 302 382 7179",
      },
      {
        title: "San Francisco Office",
        address: textToMultiline`1781  Norman Street\nLos Angeles, CA 90017\nUSA`,
        email: "losangeles@email.com",
        phone: "+1 925 468 9533",
      },
      {
        title: "Berlin Office",
        address: textToMultiline`Genslerstraße 84\n13359 Berlin\nGermany`,
        email: "berlin@email.com",
        phone: "+49 9961 24 05 05",
      },
    ],
  },
  newsletter: {
    subtitle: "Stay up to date",
    title: "Sign up to newsletter",
    buttonText: "Get a quote",
    inputPlaceholder: "Your email address",
  },
  copyright: "© 2020 Coffeecream Themes",
};
