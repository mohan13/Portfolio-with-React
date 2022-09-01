import {
  FaFacebookF,
  FaInstagram,
  FaGithubAlt,
  FaLinkedinIn,
} from "react-icons/fa";
export const footerData = [
  {
    title: "About Me",
    para: "We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience. ",
    copyright:
      "Copyright ©2022 All rights reserved | This webiste  is made with by Mohan Gurung",
  },
  {
    title: "Newsletter",
    para: "Stay updated with our latest trends",
    placeholder: (
      <input
        type="text"
        placeholder="Enter Email Address"
        className="outline-none px-4 py-2 rounded-sm w-full md:w-96 text-gray-400 "
      />
    ),
  },
  {
    title: "Follow Me",
    para: "Let us be social",
    Icon: [
      {
        icon: <FaFacebookF color="white" className="w-full h-full" />,
      },
      {
        icon: <FaInstagram color="white" className="w-full h-full" />,
      },
      {
        icon: <FaGithubAlt color="white" className="w-full h-full" />,
      },
      {
        icon: <FaLinkedinIn color="white" className="w-full h-full" />,
      },
    ],
  },
];
