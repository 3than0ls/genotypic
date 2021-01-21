import React from 'react'
import Label from '../../Label'

export default function About() {
  return (
    <>
      <Label text="About" />
      <div className="my-2">A gene calculator? Why would you make that?</div>
      <hr className="border-t-3 my-3 border-app-gray-1" />
      <div className="my-2">
        I'm a high school student taking AP Biology. I was stuck in a code rut,
        and it felt like all I did was play video games all day. My brain was
        wandering, thinking about the homework I had, when I remembered some
        internet quote saying "Why spend 5 minutes doing something when you can
        spend 5 days trying to automate it?" So that's kinda what I did, and
        made a website to go along with it, just to get out of my rut
      </div>
      <hr className="border-t-3 my-3 border-app-gray-1" />

      <a
        className="text-app-red-3 hover:underline my-2"
        href="https://github.com/3than0ls"
      >
        Developer's GitHub
      </a>
    </>
  )
}
