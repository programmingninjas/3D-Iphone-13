import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Iphone from './Components/Iphone';
import { OrbitControls } from '@react-three/drei'

export default function App() {
  return (<div class="card container my-2" style={{ width: '20rem'}}>
    <br />
    <div className='card-img-top' style={{ height: '50vh'}}>
      <br />
      <Canvas>
        <OrbitControls />
        <Suspense>
          <Iphone/>
        </Suspense>
        <ambientLight intensity={1} />
        <directionalLight intensity={1} position={[-2, 5, 2]} />
      </Canvas></div>
    <div class="card-body">
      <h5 class="card-title">Iphone 13</h5>
      <p className="card-text">&#x20B9; 1,69,000<br/><span style={{ color: "#007600" }}>InStock.</span></p>
    </div>
  </div>
  )
}
