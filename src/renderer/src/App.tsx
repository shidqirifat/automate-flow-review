import Container from './components/Container'
import Intro from './components/Intro'
import WatchTo from './components/WatchTo'
import useDelay from './hooks/useDelay'

function App() {
  const [hidden] = useDelay(3000)

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
