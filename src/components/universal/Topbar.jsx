import { FiPhoneCall, FiMail } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="container text-[12px] md:text-sm text-gray-600 flex flex-col md:flex-row items-center gap-2 justify-between py-3 border-b border-gray-400">
      {/* TOP BAR */}
      <div className="flex gap-6  justify-between">
        <div className="flex items-center gap-2">
          <FiPhoneCall />
          +52 55 33123123
        </div>
        <div className="flex items-center gap-2">
          <FiMail />
          info@mysuites.com
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <BsFillPersonFill />
          RESIDENTES
        </div>
        <div className="flex items-center gap-2">
          <FaLanguage />
          EN
        </div>
      </div>
    </div>
  );
};

export default Topbar;
