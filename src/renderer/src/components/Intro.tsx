type IntroProps = { hidden: boolean }

export default function Intro({ hidden }: IntroProps) {
  return (
    <div
      className={`${
        hidden ? 'opacity-0' : 'opacity-100'
      } transition duration-700 bg-slate-800 z-10 h-screen fixed inset-0 text-center grid place-content-center gap-3`}
    >
      <h2 className="text-slate-100 font-semibold text-xl">
        Just Focus to The Submission 🎯
      </h2>
      <h4 className="text-slate-300 font-normal text-base">
        Ignore the repetitive workflows
      </h4>
    </div>
  )
}
