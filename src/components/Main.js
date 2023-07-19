import React from 'react'
import './Main.css'

import HornedBeast from "./HornedBeast";
// import data from "../data.json"


export default function Main({data, handleModal}) {
  return (
    <main>
{data.map((beast)=>{
  return (<HornedBeast key={beast._id}
    title={beast.title}
    imgUrl={beast.image_url}
    description={beast.description}
    beastObject={beast}
    handleModal={handleModal}
  />
  )
})}
</main>
  )
}
