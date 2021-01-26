import React from 'react'
import Label from '../../Label'

export default function About() {
  return (
    <>
      <Label text="About" />
      <div className="my-2">A gene calculator? Why would you make that?</div>
      <hr className="border-t-3 my-3 border-app-gray-1" />

      <a
        className="text-app-red-3 hover:underline my-2"
        href="https://github.com/3than0ls"
      >
        Developer's GitHub
      </a>
      <hr className="border-t-3 my-3 border-app-gray-1" />
      <div className="my-2">
        I'm a high school student taking AP Biology. AP Bio isn't an easy class,
        and it's a rigorous course, so instead of studying I played video games
        the majority of the time. But after my sixth loss or something in a row
        in League, I was getting kinda tired of video gaming, and I had an
        upcoming test I hadn't studied for. I also hadn't coded anything in a
        while (a consequence of playing League), and so I was super excited to
        do this project because it allowed me to study, help others, and not be
        playing video games at the same time, and I completed the majority of it
        in about 2 days. It was pretty fun, and I intend on doing similar things
        in te future.
      </div>
      <hr className="border-t-3 my-3 border-app-gray-1" />
      <div className="my-2">
        The actual logic for calculating the stuff and inner workings behind the
        API are actually garbage and written strangely, so you can only have up
        to a tetrahybrid cross. Chalk it up to convenience.
      </div>
    </>
  )
}
