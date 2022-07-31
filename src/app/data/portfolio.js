import {
  AiTwotoneAppstore,
  AiOutlineCode,
  AiOutlineShareAlt,
  AiOutlineLink,
} from "react-icons/ai";

// Portfolio section data
export const PORTFOLIO = {
  // Section title and the subtile
  titles: {
    title: "Portfolio",
    subtitle: "Best Works",
  },

  // Buttons category
  buttonData: [
    { name: "All", type: "all" },
    { name: "UI/UX Design", type: "uxuidesign" },
    { name: "Web Design", type: "webdesign" },
    { name: "Apps", type: "app" },
    { name: "Photography", type: "photograpy" },
  ],

  // Portfolio showcase card data
  cardData: [
    {
      category: "uxuidesign",
      title: "VISCO Landing Page",
      type: "React Js",
      id: "1460925895917",
      images: {
        default:
          "https://i.pinimg.com/originals/50/b4/2f/50b42f93108bf78b9611746f73b0a840.png",
        variant1:
          "https://i.pinimg.com/originals/50/b4/2f/50b42f93108bf78b9611746f73b0a840.png",
        variant2:
          "https://i.pinimg.com/originals/50/b4/2f/50b42f93108bf78b9611746f73b0a840.png",
      },
      video:
        "https://ak.picdn.net/shutterstock/videos/1076130974/preview/stock-footage-diverse-company-employees-having-online-business-conference-video-call-on-tv-screen-monitor-in.mp4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend felis a felis blandit, ut commodo felis gravida. Phasellus ornare tincidunt arcu, tempus ultrices magna eleifend id. Pellentesque scelerisque nunc erat, facilisis egestas erat lobortis eget. Aliquam nec vestibulum lectus, sit amet faucibus dui. Mauris non orci efficitur, posuere mauris at, dignissim odio.",
    },
    {
      category: "webdesign",
      title: "MOON Design",
      type: "UI/UX Design",
      id: "1499951360447",
      images: {
        default:
          "https://themes.getbootstrap.com/wp-content/uploads/2021/05/soft-ui-design-system-thumbnail-1200x900.jpg",
        variant1:
          "https://themes.getbootstrap.com/wp-content/uploads/2021/05/soft-ui-design-system-thumbnail-1200x900.jpg",
        variant2:
          "https://themes.getbootstrap.com/wp-content/uploads/2021/05/soft-ui-design-system-thumbnail-1200x900.jpg",
      },
      video:
        "https://ak.picdn.net/shutterstock/videos/1076130974/preview/stock-footage-diverse-company-employees-having-online-business-conference-video-call-on-tv-screen-monitor-in.mp4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend felis a felis blandit, ut commodo felis gravida. Phasellus ornare tincidunt arcu, tempus ultrices magna eleifend id. Pellentesque scelerisque nunc erat, facilisis egestas erat lobortis eget. Aliquam nec vestibulum lectus, sit amet faucibus dui. Mauris non orci efficitur, posuere mauris at, dignissim odio.",
    },
    {
      category: "app",
      title: "Bash Landing Page",
      type: "React JS",
      id: "1487014679447",
      images: {
        default:
          "https://i.pinimg.com/originals/b0/b1/aa/b0b1aa8f295374bd221db5a1d2d03894.png",
        variant1:
          "https://i.pinimg.com/originals/b0/b1/aa/b0b1aa8f295374bd221db5a1d2d03894.png",
        variant2:
          "https://i.pinimg.com/originals/b0/b1/aa/b0b1aa8f295374bd221db5a1d2d03894.png",
      },
      video:
        "https://ak.picdn.net/shutterstock/videos/1076130974/preview/stock-footage-diverse-company-employees-having-online-business-conference-video-call-on-tv-screen-monitor-in.mp4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend felis a felis blandit, ut commodo felis gravida. Phasellus ornare tincidunt arcu, tempus ultrices magna eleifend id. Pellentesque scelerisque nunc erat, facilisis egestas erat lobortis eget. Aliquam nec vestibulum lectus, sit amet faucibus dui. Mauris non orci efficitur, posuere mauris at, dignissim odio.",
    },
    {
      category: "photograpy",
      title: "Pocotep eCommerce Website",
      type: "Web Development",
      id: "1481487196290",
      images: {
        default:
          "https://boagworld.sirv.com/Images/Blog-Images/homepage-design-usabilityhub.png?profile=small%20",
        variant1:
          "https://boagworld.sirv.com/Images/Blog-Images/homepage-design-usabilityhub.png?profile=small%20",
        variant2:
          "https://boagworld.sirv.com/Images/Blog-Images/homepage-design-usabilityhub.png?profile=small%20",
      },
      video:
        "https://ak.picdn.net/shutterstock/videos/1076130974/preview/stock-footage-diverse-company-employees-having-online-business-conference-video-call-on-tv-screen-monitor-in.mp4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend felis a felis blandit, ut commodo felis gravida. Phasellus ornare tincidunt arcu, tempus ultrices magna eleifend id. Pellentesque scelerisque nunc erat, facilisis egestas erat lobortis eget. Aliquam nec vestibulum lectus, sit amet faucibus dui. Mauris non orci efficitur, posuere mauris at, dignissim odio.",
    },
    {
      category: "photograpy",
      title: "The Cool Flower",
      type: "Flower",
      id: "1519222970733",
      images: {
        default:
          "https://boagworld.sirv.com/Images/Blog-Images/homepage-design-qwilr.png?profile=small%20",
        variant1:
          "https://boagworld.sirv.com/Images/Blog-Images/homepage-design-qwilr.png?profile=small%20",
        variant2:
          "https://boagworld.sirv.com/Images/Blog-Images/homepage-design-qwilr.png?profile=small%20",
      },
      video:
        "https://ak.picdn.net/shutterstock/videos/1076130974/preview/stock-footage-diverse-company-employees-having-online-business-conference-video-call-on-tv-screen-monitor-in.mp4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend felis a felis blandit, ut commodo felis gravida. Phasellus ornare tincidunt arcu, tempus ultrices magna eleifend id. Pellentesque scelerisque nunc erat, facilisis egestas erat lobortis eget. Aliquam nec vestibulum lectus, sit amet faucibus dui. Mauris non orci efficitur, posuere mauris at, dignissim odio.",
    },
    {
      category: "photograpy",
      title: "The Beli ful",
      type: "Next JS",
      id: "1502945015378",
      images: {
        default:
          "https://themes.getbootstrap.com/wp-content/uploads/2021/05/soft-ui-design-system-thumbnail-1200x900.jpg",
        variant1:
          "https://themes.getbootstrap.com/wp-content/uploads/2021/05/soft-ui-design-system-thumbnail-1200x900.jpg",
        variant2:
          "https://themes.getbootstrap.com/wp-content/uploads/2021/05/soft-ui-design-system-thumbnail-1200x900.jpg",
      },
      video:
        "https://ak.picdn.net/shutterstock/videos/1076130974/preview/stock-footage-diverse-company-employees-having-online-business-conference-video-call-on-tv-screen-monitor-in.mp4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend felis a felis blandit, ut commodo felis gravida. Phasellus ornare tincidunt arcu, tempus ultrices magna eleifend id. Pellentesque scelerisque nunc erat, facilisis egestas erat lobortis eget. Aliquam nec vestibulum lectus, sit amet faucibus dui. Mauris non orci efficitur, posuere mauris at, dignissim odio.",
    },
  ],

  popupLinks: [
    {
      icon: <AiTwotoneAppstore />,
      url: "eCommerce",
    },
    {
      icon: <AiOutlineCode />,
      url: "React, Node JS, MongoDB",
    },
    {
      icon: <AiOutlineShareAlt />,
      url: "Source code",
    },
    {
      icon: <AiOutlineLink />,
      url: "pocotep.com",
    },
  ],
};
