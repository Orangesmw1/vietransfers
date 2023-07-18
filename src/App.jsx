import useRouteElements from "./useRouterElement"
import React from "react"


function App() {

  const routeElements = useRouteElements()

  return <div className='font-serif'>{routeElements}</div>
}

export default App
