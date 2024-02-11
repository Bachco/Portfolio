import Link from "next/link";

import { RiInstagramLine, RiFacebookLine, RiGithubLine } from "react-icons/ri";

const SocialData = [
  {
    link: "https://www.facebook.com/Bachco/",
    icon: <RiFacebookLine />,
    alt: "facebook",
  },
  {
    link: "https://www.instagram.com/bachcoo/",
    icon: <RiInstagramLine />,
    alt: "facebook",
  },
  {
    link: "https://github.com/Bachco",
    icon: <RiGithubLine />,
    alt: "facebook",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {SocialData.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
