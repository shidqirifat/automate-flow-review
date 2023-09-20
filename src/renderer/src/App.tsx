import { useEffect, useState } from 'react'
import Container from './components/Container'
import Intro from './components/Intro'
import WatchTo from './components/WatchTo'

function App() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHidden(true)
    }, 5000)
  }, [])

  return (
    <>
      <Intro hidden={hidden} />
      <Container>
        <WatchTo />
      </Container>
    </>
  )
}

export default App
