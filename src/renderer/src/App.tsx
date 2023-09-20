function App() {
  return (
    <main className="p-4 grid h-screen relative bg-slate-100">
      <div className="grid place-content-center text-center gap-3 -mt-8">
        <h1 className="font-bold text-2xl text-slate-700">
          Watch Download Folder
        </h1>
        <h3 className="font-normal text-base text-slate-600">
          Standby to Open Submission in VS Code
        </h3>
      </div>
      <div className="mt-2 text-center absolute bottom-20 w-full">
        <h3 className="text-slate-500 font-normal text-sm">
          Develop by{' '}
          <a
            className="underline underline-offset-2"
            target="_blank"
            href="https://www.linkedin.com/in/shidqirifatpangestu/"
            rel="noreferrer"
          >
            Shidqi
          </a>
        </h3>
      </div>
    </main>
  )
}

export default App
