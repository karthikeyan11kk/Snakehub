import { features } from "./info";
import styles, { layout } from "../style";
import {skeleton}  from "../assets";
import Button from "./Button";

const FeatureCard = ({ title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const History = () =>  (
  <section id="history" className={layout.section}>
    <div className={`${layout.sectionInfo} relative`}>
      <h2 className={styles.heading2}>
        From Lizards to Serpents:<br className="sm:block hidden" /> we’ll handle
        The Evolution of Snakes.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Fossil evidence suggests snakes evolved from burrowing lizards during the Cretaceous Period. Venomous snakes date back 28 million years, with venom being modified saliva for prey immobilization and self-defense, delivered through specialized teeth or hollow fangs.
      </p>
      <Button styles={`mt-10`} />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
    <img src={skeleton}  alt="fossil" className={`${styles.flexCenter} w-[100%] h-[100%]`} />
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default History;
