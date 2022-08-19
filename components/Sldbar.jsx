import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  HiHome,
  HiAnnotation,
  HiBookOpen,
  HiBriefcase,
  HiClipboardList,
  HiColorSwatch,
} from "react-icons/hi";
function Sidbar() {
  return (
    <>
      <aside className=" bg-blue-700  text-white   h-screen  ">
        <div>
          <div className=" hidden  lg:flex  flex-col  items-center p-5">
            <Image
              height={130}
              width={130}
              alt="Picture of the author"
              className=" rounded-full m-5"
              src="/2.jpg"
            />

            <p>محمد مهدی سنگتراشان</p>
          </div>

          <ul className=" text-3xl lg:text-sm  ">
            <li className="  hover:bg-white hover:text-black p-3 ">
             <Link href="/#main">
              <a className="flex flex-row " >
                <HiHome title="صفحه اصلی" />
                <samp className=" hidden hover:black lg:flex lg:mr-1">
                  صفحه اصلی
                </samp>
              </a>
              </Link>
            </li>
            <li
              title="خدمات"
              className=" hover:bg-white hover:text-black  p-3 "
            >
              <Link href="/#Services">
              <a className="flex flex-row " >
                {" "}
                <HiColorSwatch />
                <samp className="hidden lg:flex mr-1">خدمات</samp>{" "}
              </a>
              </Link>
            </li>
            <li
              title="نمونه کار"
              className=" hover:bg-white hover:text-black  p-3 "
            >
              <Link href="/#Work-samples ">
              <a
                className="flex flex-row "
                
                >
                <HiClipboardList />
                <samp className="hidden lg:flex mr-1">نمونه کار</samp>{" "}
              </a>
                </Link>
            </li>
            <li
              title="رزومه"
              className=" hover:bg-white hover:text-black  p-3 "
            >
              <Link href="/#Cv">
              <a className="flex flex-row " >
                {" "}
                <HiBriefcase />
                <samp className="hidden lg:flex mr-1">رزومه</samp>
              </a>
              </Link>
            </li>
            <li title="بلاگ" className=" hover:bg-white hover:text-black  p-3 ">
            <Link href="/#blog">
              <a className="flex flex-row " >
                {" "}
                <HiBookOpen />
                <samp className="hidden lg:flex mr-1">بلاگ</samp>{" "}
              </a>
              </Link>
            </li>
            <li
              title="تماس باما"
              className=" hover:bg-white hover:text-black  p-3 "
            >
              <Link href="/#contact-us">
              <a
                className="flex flex-row "
                
                >
                {" "}
                <HiAnnotation />
                <samp className=" hidden lg:flex mr-1">تماس با ما</samp>
              </a>
                </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
export default Sidbar;
