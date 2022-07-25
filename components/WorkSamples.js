import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function WorkSamples() {
  var newData = require("./data/data.json");

  return (
    <div  >
      <div  >
        <span>------------------ نگاهی بیندازید به</span>
        <h2 className=" mb-16 p-8 text-2xl font-bold">نمونه کارهای من </h2>
      </div>
      <Swiper
        
        navigation={true}
        modules={[Navigation]}
        speed={600}
        breakpoints={{
          1280: { slidesPerView: 4, spaceBetween: 16, slidesPerGroup: 5 },
          1024: { slidesPerView: 3, spaceBetween: 16, slidesPerGroup: 4 },
          768: { slidesPerView: 2, spaceBetween: 12, slidesPerGroup: 3 },
          640: { slidesPerView: 2, spaceBetween: 12, slidesPerGroup: 2 },
        }}
      >
        {newData.map((item) => {
          return (
            
              <SwiperSlide
                className=" flex items-center justify-center"
                key={item.id}
              >
                <div className=" w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img
                      className="  h-52 w-full rounded-t-lg"
                      src={item.image}
                      alt="filimo"
                    />
                  <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                    <div className=" flex px-6 pt-4 pb-2">
                      {item.tag.map((item) => {
                        return (
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {item}
                          </span>
                        );
                      })}
                    </div>

                    <a
                      href={item.url}
                      target="blank"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        aria-hidden="true"
                        class="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      نمایش نمونه کار
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            
          );
        })}
      </Swiper>
    </div>
  );
}

export default WorkSamples;
