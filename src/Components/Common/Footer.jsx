import { BiCopyright } from "react-icons/bi";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg-gray-100 p-8">
      <div>
        <h1 className="font-semibold ">About</h1>
        <div className="text-sm  text-gray-700 flex flex-wrap gap-2 list">
          <p>How Airbnb works</p>
          <p>News room</p>
          <p>Airbnb 2021</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
          <p>Hotel Tonight</p>
          <p>Airbnb for work</p>
          <p>Made possible by careers</p>
        </div>
        <hr className="w-[90%] h-[1px] my-2 border-none m-auto bg-gray-300" />
      </div>
      <div>
        <h1 className="font-semibold ">Community</h1>
        <div className="text-sm  text-gray-700 flex flex-wrap gap-2 list">
          <p>Diversity & belonging</p>
          <p>Against descrimaination</p>
          <p>Accessibility</p>
          <p>Airbnb Associates</p>
          <p>Host Afganstan refugees</p>
          <p>Guest refferals</p>
          <p>Gift Cards</p>
          <p>Airbnb.org</p>
        </div>
        <hr className="w-[90%] h-[1px] my-2 border-none m-auto bg-gray-300" />
      </div>
      <div>
        <h1 className="font-semibold ">Host</h1>
        <div className="text-sm  text-gray-700 flex flex-wrap gap-2 list">
          <p>Host your home</p>
          <p>Host your experience</p>
          <p>Responsible hosting </p>
          <p>Resource center</p>
          <p>Community center</p>
        </div>
        <hr className="w-[90%] h-[1px] my-2 border-none m-auto bg-gray-300" />
      </div>
      <div>
        <h1 className="font-semibold ">Support</h1>
        <div className="text-sm  text-gray-700 flex flex-wrap gap-2 list">
          <p>Our COVID-19 response</p>
          <p>Help center</p>
          <p>Cancellation options </p>
          <p>Neighborhood Support </p>
          <p>True & Safety</p>
        </div>
        <hr className="w-[90%] h-[1px] my-2 border-none m-auto bg-gray-300" />
      </div>
      <div className="grid place-content-center place-items-center space-y-3">
        <div className="flex gap-2 items-center">
          <FiGlobe />
          <p className="font-bold underline cursor-pointer">English(US)</p>
          <p className="font-semibold text-sm mx-4">$ US Dollar</p>
        </div>
        <div className="flex space-x-4 text-xl">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
        <div className="font-semibold">
          <p className="flex text-center items-center">
            <BiCopyright /> Airbnb {new Date().getFullYear()}
          </p>
          <p>Privacy | Terms | Sitemap</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
