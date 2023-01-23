import React, { createRef, useEffect } from 'react';
import renderMindCloud from './renderMindCloud';

export default function App() {
  const divRef = createRef();
  useEffect(() => {
    renderMindCloud(divRef.current), [divRef]
  });
  return <div ref={divRef} >
    </div>;
}
