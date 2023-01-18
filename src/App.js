import React, { createRef, useEffect } from 'react';
import renderMindCloud from './renderMindCloud';
import AddItem from './addItem'

export default function App() {
  const divRef = createRef();
  useEffect(() => renderMindCloud(divRef.current), [divRef]);
  return <div ref={divRef} >
    <AddItem/>
    </div>;
}
