import React, { createContext,useState,useEffect } from 'react'

const Context = createContext();
function ContextFunction(props) {
    const pages = ["Home" , "Service" , "About Us", "Partners" ,"Contact us"];
    const prices = { "design" : 300 ,"animation" : 200 ,"integration" : 100 }
    const [designCost,setDesignCost] =useState(Array(pages.length).fill(0));
    const [animationCost,setAnimationCost] = useState(Array(pages.length).fill(0));
    const [integrationCost,setIntegrationCost] = useState(Array(pages.length).fill(0));
    const [cost,setCost] = useState(Array(pages.length).fill(0));
    const [totalCost,setTotalCost] = useState(0);
    const legend = {0:"none",40:"Basic",65:"Advanced",100:"Complex"};

    useEffect(()=>{
        let sum=0;
        let ncost = pages.map((ele ,idx)=>{
          sum+=designCost[idx] + animationCost[idx] + integrationCost[idx]
          return designCost[idx] + animationCost[idx] + integrationCost[idx];
        })
        setCost(ncost)
        setTotalCost(sum)
      },[designCost,animationCost,integrationCost])


      const toggleDesign=(price,idx)=>{
        let tempArr = [...designCost]
        tempArr[idx] = price;
        setDesignCost(tempArr)
      }

      const toggleAnimation=(price,idx)=>{
        let tempArr = [...animationCost]
        tempArr[idx] = price;
        setAnimationCost(tempArr)
      }

      const toggleIntegration=(price,idx)=>{
        let tempArr = [...integrationCost]
        tempArr[idx] = price;
        setIntegrationCost(tempArr)
      }



  return (
    <div>
        <Context.Provider value={{pages,prices,designCost,animationCost,integrationCost,cost,totalCost,toggleAnimation,toggleDesign,toggleIntegration,legend}}>
            {props.children}
        </Context.Provider>
    </div>
  )
}

export {ContextFunction,Context}