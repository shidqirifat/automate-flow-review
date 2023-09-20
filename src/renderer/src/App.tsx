import DevelopedBy from './components/DevelopedBy'
import WatchTo from './components/WatchTo'

function App() {
  return (
    <main className="p-4 h-screen relative bg-slate-50 cursor-default select-none">
      <div className="border border-slate-300 rounded bg-slate-200/80 h-full">
        <WatchTo />
        <DevelopedBy />
      </div>
    </main>
  )
}

export default App
