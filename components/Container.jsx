function Container (){
    return(
        <>
        

        <div className="flex flex-col w-full  justify-center items-center">
            <div className=" flex items-center justify-center h-screen w-full bg-sky-100">
               <div className=" flex flex-col justify-center items-center">

            <img className=" h-52 w-52 rounded-full m-5" src={"./2.jpg"}/>
            <p>محمد مهدی سنگتراشان</p>

                <samp> صفحه اصلی
                    </samp>
               </div>
                   </div>
            <div className=" flex items-center justify-center h-screen w-full bg-sky-200 ">
                

                <samp>خدمات
                    </samp>
                    </div>
            <div className=" flex items-center justify-center h-screen w-full bg-sky-300">
                

                <samp> نمونه کار
                    </samp>
                   </div>
            <div className=" flex items-center justify-center h-screen w-full bg-sky-400">
                

                <samp>رزومه
                    </samp>
                    </div>
            <div className=" flex items-center justify-center h-screen w-full bg-sky-500">
                

                <samp>
                بلاگ
                    </samp>
                    </div>
            <div className=" flex items-center justify-center h-screen w-full bg-sky-600">
                

                <samp> تماس باما
                    </samp>
                   </div>
        </div>
        </>
    )
}
export default Container;