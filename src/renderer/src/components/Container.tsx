import React from 'react'

type ContainerProps = { children: React.ReactNode }

export default function Container({ children }: ContainerProps) {
  return (
    <main className="p-4 h-screen relative bg-slate-50 cursor-default select-none">
      <div className="border border-slate-300 rounded bg-slate-200/80 h-full">
        {children}
      </div>
    </main>
  )
}
