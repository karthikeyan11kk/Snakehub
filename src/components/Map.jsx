import React from 'react'
import {map} from "../assets";
import styles,{layout} from '../style'; 
import Button from "./Button"

const Map = () => (
    <section id="population">
    <h2 className={`${styles.heading2} justify-center text-center`}>
    The Global Distribution Of Species</h2>
    <div className={layout.section}>
    <div className={layout.sectionInfo}>
    <p className={`${styles.paragraph} max-w-[700px] mt-3`}>
    The widespread distribution of snake species results from their adaptability, diverse habitats, and effective reproductive strategies. They thrive in environments from deserts to oceans due to their flexible physiology and behavior. Historical land bridges, continental drift, and human activities have spread them further.
    </p>
    <Button styles="mt-5" className="justify-center items-center text-center"/>

  </div>
  <div className={`${layout.sectionImg} flex-col`}>
  <img src={map}></img>
  </div>
  </div>
</section>
  )


export default Map
