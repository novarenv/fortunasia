import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const innerNavClass = "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-200 hover:text-black"

  return (
    <div className="sticky w-full z-10 top-0 pl-4 bg-white shadow-sm">
      <nav className="flex items-center flex-wrap p-3">
        <Link href="/">
          <div className="inline-flex items-center p-2 mr-4 ">
            {/* <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-black h-8 w-8 mr-2"
            >
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg> */}
            <Image src="/jeg.png" width="16" height="16" />
            <span className="text-xl text-black font-bold tracking-wide ml-1">
              Fortunasia
            </span>
          </div>
        </Link>

        <button
          className=" inline-flex p-3 hover:bg-green-200 rounded lg:hidden text-black ml-auto hover:text-black outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className={innerNavClass}>
                About
              </a>
            </Link>
            <Link href="/#journey">
              <a className={innerNavClass}>
                Blog
              </a>
            </Link>
            <Link href="/product">
              <a className={innerNavClass}>
                Product
              </a>
            </Link>
            <Link href="/#customer">
              <a className={innerNavClass}>
                Customer
              </a>
            </Link>
            <Link href="/team">
              <a className={innerNavClass}>
                Team
              </a>
            </Link>
            <Link href="/help">
              <a className={innerNavClass}>
                Help
              </a>
            </Link>
            <Link href="/payment">
              <a className={innerNavClass}>
                Payment
              </a>
            </Link>
            <Link href="/#footer">
              <a className={innerNavClass}>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
