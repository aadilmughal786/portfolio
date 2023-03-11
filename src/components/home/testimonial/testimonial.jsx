import React from "react"
import Card from "./card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import "swiper/css"
import "swiper/css/pagination"

const Testimonial = ({ data }) => {
  return (
    <div className="px-4 py-16 text-slate-700 dark:text-slate-200 sm:px-8">
      <h2 className="pb-4 text-center text-3xl font-medium ">{data.label}</h2>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {data.testimonials.map(testimonial => (
          <SwiperSlide>
            <Card data={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonial
