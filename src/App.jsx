const links = [
  { name: "Site", url: "https://misplei.com.br" },
  { name: "Instagram", url: "https://www.instagram.com/mispleitcg" },
  { name: "WhatsApp", url: "https://wa.me/5512978135713" },
  { name: "Email", url: "mailto:mispleicards@gmail.com" },
];

import Logo from "./assets/logo.png";

const LinkTree = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-bg-orange">
      <div className="max-w-md w-full text-center">
        <img
          className="w-auto h-56 mx-auto mb-4 mt-8"
          src={Logo}
          alt="Misplei"
        />

        <div className="space-y-4 mt-14">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono w-full py-4 px-6 bg-white text-gray-900 text-lg   font-normal rounded-lg hover:bg-white transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkTree;
