import {snake} from "../assets";
import { layout } from "../style";
import { Species1, Species2,Species3 } from"./info"

const Species = () => (
  <section id="species" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={snake} alt="Lside" className="w-[80%] h-[80%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%]  white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0  blue__gradient" />
      <div className="absolute z-[0] w-[100%] h-[100%] top-0 -left-1/2 black__gradient" />
      {/* gradient end */}
    </div>


    <div className={layout.sectionInfo}>
    <h1 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]  text-gradient ">Top Most Dangerous Species</h1>
    <div className="flex">
      <div>
      {Species1.map((stat) => (
      <div key={stat.id} className={`flex-1 flex-row flex justify-start items-center m-3`}>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[10px] text-white  mt-10 ">
          {stat.title}
        </p>
      </div>
    ))}
      </div>
      <div>
      {Species2.map((stat) => (
      <div key={stat.id} className={`flex-1 flex-row flex justify-start items-center m-3`}>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[10px] text-white mt-10">
          {stat.title}
        </p>
      </div>
    ))}
      </div>
      <div>
      {Species3.map((stat) => (
      <div key={stat.id} className={`flex-1 flex-row flex justify-start items-center m-3`}>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[10px] text-white mt-10">
          {stat.title}
        </p>
      </div>
    ))}
      </div>
    </div>
    </div>
  </section>
);

export default Species;
