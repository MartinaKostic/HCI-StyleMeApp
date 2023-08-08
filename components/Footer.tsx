import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-pink p-7 text-center">
        <div className="flex justify-between  h-full text-2xl">
          styleme
          <div>
            Follow us:
            <div className="flex mt-3">
              <div className="p-2">
                <FaFacebookSquare />
              </div>
              <div className="p-2">
                <FaInstagram />
              </div>
              <div className="p-2">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div>
            Contact us:
            <div className="text-base">
              <div>styleme@gmail.com</div>
              <div>+385971885992</div>
              <div>Ul. Ruđera Boškovića 32, 21000, Split</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
