import React, { useContext } from 'react';
import './App.css';
import SlideButton from './component/SlideButton'
import {Context} from './ContextFunction';

function App() {
  
  //definfing our states
  
  const {pages,prices,totalCost,cost,toggleAnimation,toggleDesign,toggleIntegration,designCost,animationCost,integrationCost} =useContext(Context);


  return (
    <div className='main'>
      <div className='head'>
          <div className='main-heading'>
            <span style={{fontWeight: "700",fontSize: "5rem"}}>{pages.length}</span> pages</div>
          <div className='heading'>
            <div className='price-tag'>${prices.design}</div> page design
          </div>
          <div className='heading'>
            <div className='price-tag'>${prices.animation}</div> interaction and animation
          </div>
          <div className='heading'>
            <div className='price-tag'>${prices.integration}</div> CMS /Dynamic data/Integrations
          </div>
          <div className='total-heading'>
            <div className='main-heading'>Sub Total
              <div className='total'>${totalCost}</div>
            </div>
          </div>
      </div>
      <div className='hr-line'></div>
      <div className='body'>
        <div className='section'>
          <heading>Pages</heading>
          {
            pages.map((ele,idx)=>(
              <div key={idx} style={{fontWeight:'400',fontSize:'1.25rem'}}>
                <span style={{fontWeight:'700',fontSize:'1.25rem'}}>
                  {idx <10 ? <span>0{idx+1}</span>  : idx+1}.</span> {ele}</div>
            ))
          }
        </div>
        <div className='section'>
          <heading>Design</heading>
          {
            pages.map((ele,idx)=>(
              <div key={idx}><SlideButton price={prices.design} method={toggleDesign} idx={idx} currCost={designCost[idx]}/></div>
            ))
          }
        </div>
        <div className='section'>
          <heading>Interactions & Animations</heading>
          {
            pages.map((ele,idx)=>(
              <div key={idx} className=''><SlideButton price={prices.animation} method={toggleAnimation} idx={idx} currCost={animationCost[idx]}/></div>
            ))
          }
        </div>
        <div className='section'>
          <heading>Integration</heading>
          {
            pages.map((ele,idx)=>(
              <div key={idx} className=''><SlideButton price={prices.integration} method={toggleIntegration} idx={idx} currCost={integrationCost[idx]}/></div>
            ))
          }
        </div>
        <div className='section'>
          <heading>Cost</heading>
          {
            cost.map((ele,idx)=>(
              <div key={idx} style={{fontWeight:'700',fontSize:'1.25rem'}}>${ele}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
