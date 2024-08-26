import React, { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Counter() {
    const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a>
          <img src="https://vitest.dev/logo-shadow.svg" className="logo" alt="Vitest logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vitest React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            Click me
        </button>
        <p>
        count is {count}
        </p>
      </div>

    </>
  )
}
