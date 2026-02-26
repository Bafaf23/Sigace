import Etiqueta from "../atom/Etiqueta";
import Icon from "../atom/Icon";
import SigaceLogo from "../atom/SigaceLogo";
import { faMobilePhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Fotter() {
  const desarrolladores = [
    {
      development: "Bryant Facenda",
      social: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/bafaf03",
          icon: faMobilePhone,
          className: "text-pink-500 bg-purple-500/50",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/bryant-facenda-a078ab279/",
          icon: faMobilePhone,
          className: "text-cyan-500 bg-blue-600/30",
        },
        {
          name: "Whatsapp",
          url: "https://w.app/p945hj",
          icon: faMobilePhone,
          className: "text-green-500 bg-green-500/40",
        },
      ],
    },
    {
      development: "Camilo Sanchez",
      social: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/bafaf03",
          icon: faMobilePhone,
          className: "text-pink-500 bg-purple-500/50",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/bryant-facenda-a078ab279/",
          icon: faMobilePhone,
          className: "text-cyan-500 bg-blue-600/30",
        },
        {
          name: "Whatsapp",
          url: "https://w.app/p945hj",
          icon: faMobilePhone,
          className: "text-green-500 bg-green-500/40",
        },
      ],
    },
  ];

  return (
    <footer className="flex flex-col gap-2 bg-indigo-900 px-6 py-4">
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <SigaceLogo></SigaceLogo>
        <hr className="hidden h-10 border border-amber-500 md:block" />
        <div>
          <p className="text-[13px] text-gray-400 italic">Desarrollado por:</p>
          <div className="flex flex-col gap-3">
            {desarrolladores.map((desarrollador, index) => (
              <div key={index}>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl text-cyan-500">
                    {desarrollador.development}
                  </h1>
                  <div className="flex gap-2">
                    {desarrollador.social.map((item, index) => (
                      <div
                        key={index}
                        className={`flex gap-1 rounded-2xl p-1 ${item.className}`}
                      >
                        <Link href={item.url}>
                          <Icon icon={item.icon}></Icon>
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="z-10 text-2xl text-gray-300/50 italic">
          "Un ser sin estudios, es un ser incompleto."
        </p>
        <Etiqueta
          children={"Simon Bolivar"}
          className="bg-amber-500/50 text-amber-500"
        ></Etiqueta>
      </div>
    </footer>
  );
}
