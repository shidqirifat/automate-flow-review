import { useEffect, useState } from 'react'
import Container from './components/Container'
import DevelopedBy from './components/DevelopedBy'
import Intro from './components/Intro'
import WatchTo from './components/WatchTo'

function App() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHidden(true)
    }, 3000)
  }, [])

  return (
    <>
      <Intro hidden={hidden} />
      <Container>
        <WatchTo />
        <DevelopedBy />
      </Container>
    </>
  )
}

export default App
