import { BsInstagram } from "react-icons/bs";

const FooterLinks = () => {
  return (
    <div className="flex items-center justify-between pt-14 text-sm text-gray-400">
      <ul className="flex flex-col md:flex-row gap-6 lg:gap-10">
        <li>2023 MY SUITES BY LA CONDESA</li>
        <li>
          <a className="hover:text-[#bf83b3]" href="#">
            AVISO DE PRIVACIDAD
          </a>
        </li>
        <li>
          <a className="hover:text-[#bf83b3]" href="#">
            DEPARTAMENTOS BASAIK
          </a>
        </li>
      </ul>

      <div>
        <a href="#">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default FooterLinks;
