import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"
import Headline from "../shared/modules/Headline"

import desktop1 from "../../assets/img/works/pierre/d1.jpg"
import desktop2 from "../../assets/img/works/pierre/d2.jpg"
import desktop3 from "../../assets/img/works/pierre/d3.jpg"
import desktop4 from "../../assets/img/works/pierre/d4.jpg"
import desktop5 from "../../assets/img/works/pierre/d5.jpg"
import desktop6 from "../../assets/img/works/pierre/d6.jpg"

import video1 from "../../assets/img/works/pierre/v1.mp4"
import video2 from "../../assets/img/works/pierre/v2.mp4"

import FullImage from "../shared/FullImage"
import fullimage from "../../assets/img/works/pierre/fullimage.jpg"
import mobile1 from "../../assets/img/works/pierre/m1.jpg" 
import mobile2 from "../../assets/img/works/pierre/m2.jpg"
import mobile3 from "../../assets/img/works/pierre/m3.jpg"
import mobile4 from "../../assets/img/works/pierre/m4.jpg"

const Yeng = () => {
  AOS.init({
    duration : 2000
  })  
  return (
    <section>
      <div className="details">
        <Solo
          medias={[       
            {
                type: "video",
                src: video1
              },

           
            {
              type: "image",
              src: desktop3
            },
            {
                type: "image",
                src: desktop2
              },
            {
                type: "video",
                src: video2
            },
            {
              type: "image",
              src: desktop4
            },
            {
              type: "image",
              src: desktop5
            },
            {
              type: "image",
              src: desktop6
            },
          ]}
        />
      </div>
      <FullImage src={fullimage} alt='prototype' />
      <div className="details responsive">
        <Headline name="Responsive Selection" />
        <Responsive
          medias={[
            {
              type: "image",
              src: mobile1,
            },
            {
              type: "image",
              src: mobile4,
            },
            {
              type: "image",
              src: mobile2,
            },
            {
              type: "image",
              src: mobile3,
            },
          ]}
        />
      </div>
    </section>
  )
}

export default Yeng  
