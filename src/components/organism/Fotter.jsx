import Link from "next/link";
import SigaceLogo from "../atom/SigaceLogo";
import Icon from "../atom/Icon";
import Etiqueta from "../atom/Etiqueta";
import { faMobilePhone } from "@fortawesome/free-solid-svg-icons";

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
    <footer className="py-4 px-6 bg-indigo-900 flex flex-col gap-2">
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <SigaceLogo></SigaceLogo>
        <hr className="border border-amber-500 h-10 hidden md:block" />
        <div>
          <p className="text-[13px] text-gray-400 italic">Desarrollado por:</p>
          <div className="flex flex-col gap-3">
            {desarrolladores.map((desarrollador, index) => (
              <div key={index}>
                <div className="flex gap-2 flex-col">
                  <h1 className="text-xl text-cyan-500">
                    {desarrollador.development}
                  </h1>
                  <div className="flex gap-2">
                    {desarrollador.social.map((item, index) => (
                      <div
                        key={index}
                        className={`flex gap-1 p-1 rounded-2xl ${item.className}`}
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
      <div className=" flex flex-col items-end">
        <p className=" text-2xl italic text-gray-300/50 z-10">
          "Un ser sin estudios, es un ser incompleto."
        </p>
        <Etiqueta
          children={"Simon Bolivar"}
          className="bg-amber-500/50 text-amber-500 "
        ></Etiqueta>
      </div>
    </footer>
  );
}
