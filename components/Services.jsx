import Image from "next/image";
function Services() {
  return (
    <>
      <div>
        <div>
          <span className="  pt-8 text-xs ">
            ------------------ آنچه من انجام میدهم
          </span>
        </div>
        <div>
          <h2 className="  p-8 text-2xl font-bold  "> خدمات من</h2>
        </div>
      </div>

      <div className=" p-16 grid grid-cols-2 lg:grid-cols-3">
        <div className=" sm:flex  p-8">
          <Image
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/5.svg"}
          />
          <span className=" p-2 "> طراحی وب سایت</span>
        </div>
        <div className=" sm:flex  p-8">
          <Image
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/6.svg"}
          />
          <span className=" p-2 ">بهینه سازی وب سایت</span>
        </div>
        <div className=" sm:flex  p-8">
          <Image
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/7.svg"}
          />
          <span className=" p-2 ">بهبود تجربه کاربری سایت</span>
        </div>
        <div className=" sm:flex  p-8">
          <Image
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/8.svg"}
          />
          <span className=" p-2 ">طراحی قالب وردپرس</span>
        </div>
        <div className=" sm:flex  p-8">
          <Image
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/9.svg"}
          />
          <span className=" p-2 ">دیجیتال مارکتینگ</span>
        </div>
        <div className=" sm:flex  p-8">
          <Image
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/10.svg"}
          />
          <span className=" p-2 ">مشاوره کسب وکار</span>
        </div>
        <div className=" sm:flex  p-8">
          <Image
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/13.svg"}
          />
          <span className=" p-2 ">مدیریت پروژه</span>
        </div>
        <div className=" sm:flex  p-8">
          <Image
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/14.svg"}
          />
          <span className=" p-2 ">ایده پردازی</span>
        </div>
        <div className=" sm:flex  p-8">
          <Image
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/15.svg"}
          />
          <span className=" p-2 ">کوچینگ</span>
        </div>
        <div className=" sm:flex  p-8">
          <Image
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/13.svg"}
          />
          <span className=" p-2 ">مدیریت پروژه</span>
        </div>
        <div className=" sm:flex  p-8">
          <Image
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/10.svg"}
          />
          <span className=" p-2 ">مشاوره کسب وکار</span>
        </div>
        <div className="  sm:flex p-8  ">
          <Image
          
            height={40}
            width={40}
            alt="Picture of the author"
            className=" text-2xl"
            src={"/8.svg"}
          />
          <span className=" p-2 ">طراحی قالب وردپرس</span>
        </div>
      </div>
    </>
  );
}
export default Services;
