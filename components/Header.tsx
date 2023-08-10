import Link from "next/link";
const Header = () => {
  //hover i active klase
  return (
    <>
      <div className="absolute w-full h-20 bg-transparent top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full text-2xl">
            styleme
            <ul className="flex gap-x-6 text-lg ">
              <li className="mx-3">
                <Link href="/">
                  <p>home</p>
                </Link>
              </li>
              <li className="mx-3">
                <Link href="/quiz">
                  <p>quiz</p>
                </Link>
              </li>
              <li className="mx-3">
                <Link href="/styleinspo">
                  <p>style inspo</p>
                </Link>
              </li>
              <li className="mx-3">
                <Link href="/blog">
                  <p>blog</p>
                </Link>
              </li>
              <li className="mx-3">
                <Link href="/signup">
                  <p>sign up</p>
                </Link>
              </li>
              <li className="mx-3">
                <Link href="/contactus">
                  <p>contact us</p>
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
