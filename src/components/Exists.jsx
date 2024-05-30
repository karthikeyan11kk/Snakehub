
import { exists} from "../assets";
import { layout } from "../style";
import { Exists1,Exists2 } from"./info"

const Exists= () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} py-5`}>
    <h1 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-gradient ">Dangerous Endangered Species</h1>
    <div className="flex">
      <div>
      {Exists1.map((stat) => (
      <div key={stat.id} className={`flex-1 flex-row flex justify-start items-center m-2`}>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[10px] text-white  mt-10 ">
          {stat.title}
        </p>
      </div>
    ))}
      </div>
      <div>
      {Exists2.map((stat) => (
      <div key={stat.id} className={`flex-1 flex-row flex justify-start items-center ml-16 m-2`}>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[10px] text-white  mt-10 mr-16">
          {stat.title}
        </p>
      </div>
    ))}
      </div>
    </div>
    </div>
    <div className={layout.sectionImg}>
      <img src={exists} alt="billing" className="w-[70%] h-[100%]" />
                {/* gradient start */}
      <div className="absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%]  white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -right-1/2 bottom-0  blue__gradient" />
      <div className="absolute z-[0] w-[70%] h-[70%] top-0 -right-1/2  black__gradient" />
      {/* gradient end */}
    </div>

  </section>
);

export default Exists;