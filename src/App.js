import React, { createRef, useEffect, useState } from 'react';
import renderMindCloud from './renderMindCloud';
import VirtualReality from './VirtualReality';

export default function App() {
  const divRef = createRef();
  const [showData, setShowData] = useState(false);
    useEffect(() => {
      renderMindCloud(divRef.current), [divRef]
    });

    function showDataPage(e){
      e.preventDefault()
      setShowData(!showData)
    }

  return <div className='appContainer'>
    <a href="https://20jm1sex57b.typeform.com/to/kGwvDO6a" target="_blank" rel="noopener noreferrer" className="navButton" id="add-me-btn">
       Add item</a>
       <button onClick={showDataPage} className="navButton" id="show-data-btn">{showData ? "Map" : "Directory"}</button>
        {showData ?
          <VirtualReality /> 
          : 
          <div ref={divRef}></div>
        } 
    </div>;
}
