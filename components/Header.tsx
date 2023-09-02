"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  //hover i active klase
  const pathname = usePathname();

  return (
    <>
      <div className="absolute w-full h-20 bg-transparent top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full text-2xl">
            styleme
            <ul className="flex gap-x-6 text-lg ">
              <li className={`mx-3 ${pathname === "/" ? "active" : ""}`}>
                <Link href="/" className="">
                  <p className="nav-link">home</p>
                </Link>
              </li>
              <li className={`mx-3 ${pathname === "/quiz" ? "active" : ""}`}>
                <Link href="/quiz">
                  <p className="nav-link">quiz</p>
                </Link>
              </li>
              <li
                className={`mx-3 ${pathname === "/styleinspo" ? "active" : ""}`}
              >
                <Link href="/styleinspo">
                  <p className="nav-link">style inspo</p>
                </Link>
              </li>
              <li className={`mx-3 ${pathname === "/blog" ? "active" : ""}`}>
                <Link href="/blog">
                  <p className="nav-link">blog</p>
                </Link>
              </li>
              <li className={`mx-3 ${pathname === "/signup" ? "active" : ""}`}>
                <Link href="/signup">
                  <p className="nav-link">sign up</p>
                </Link>
              </li>
              <li
                className={`mx-3 ${pathname === "/contactus" ? "active" : ""}`}
              >
                <Link href="/contactus">
                  <p className="nav-link">contact us</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
