import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  //napravit da je follow us u centru, styleme and contact us na krajevima
  return (
    <>
      <footer className="bg-pink p-7 text-center bottom-0 w-full">
        <div className="flex justify-between h-full text-2xl">
          <div className=""> styleme</div>
          <div className="flex flex-col items-center">
            <div className="mb-3">Follow us:</div>
            <div className="flex flex-row mt-3">
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
