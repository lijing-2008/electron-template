import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return (
    <div className="App">
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
