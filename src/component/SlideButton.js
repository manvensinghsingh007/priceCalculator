import React, { useContext } from 'react'
import './slide.css'
import { Context } from '../ContextFunction'

function SlideButton({price,method,idx,currCost}) {

  const {legend} = useContext(Context)
  const currLegendKey = currCost/price*100;
  const keys = Object.keys(legend);
  const currLegendIndex = keys.indexOf(""+currLegendKey)
  const wid = currLegendKey===0?20:currLegendKey;
  const color = {20:"rgba(0, 0, 0, 0.2)",40:"#91D4A8",65:"#E9BE74",100:"#F57F6C"}

  const handleAdd = () =>{
    if (currLegendKey === 100) return
    const nextKey = keys[currLegendIndex+1];
    method(nextKey/100*price,idx)
  }

  const handleSub = () =>{
    if (currLegendKey === 0) return
    const prevKey = keys[currLegendIndex-1];
    method(prevKey/100*price,idx)
    console.log("- click")
  }

  return (
    <div className='container'>
        <button onClick={handleSub} className='sub'>-</button>
         <div className='progress-bar' style={{width:`${wid}%`,backgroundColor:`${color[wid]}`}}>
            <span className='legend' style={wid===20 ? {color:"grey"}:{}}>{legend[currLegendKey]}</span>
         </div>
         <button onClick={handleAdd} className="plus">+</button>
    </div>
  )
}

export default SlideButton