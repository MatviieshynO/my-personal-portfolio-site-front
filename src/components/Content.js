import styles from './Content.module.css'
import Image from 'next/image'
import gsap from 'gsap'
import React, { useEffect } from 'react'

export default function Content() {
  useEffect(() => {
    gsap.fromTo(
      '.title-logo',
      {
        y: -250,
      },
      {
        y: 0,
        duration: 1.5,
      }
    )
    gsap.fromTo(
      '.title',
      {
        x: -400,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 2.5,
        textTransform: 'uppercase',
      }
    )
    gsap.fromTo(
      '.title1',
      {
        x: 400,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 2,
        textTransform: 'uppercase',
      }
    )
    gsap.fromTo(
      '.title2',
      {
        y: 150,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.5,
        textTransform: 'uppercase',
      }
    )
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <h2 className="title">Hi, my name is Oleh Matviieshyn</h2>
        <p className="title1">I am a beginner full-stack developer</p>
        <p className="title2">
          Here are the tools I work with. In addition, I always continue to
          learn
        </p>
      </div>
      <div className={styles.skills}>
        <div>
          <Image src="/html.jpg" alt="HTML" width={65} height={65} />
          <div>HTML</div>
        </div>
        <div>
          <Image src="/css.jpg" alt="CSS-3" width={65} height={65} />
          <div>CSS</div>
        </div>
        <div>
          <Image
            src="/javascript.png"
            alt="JavaScript"
            width={65}
            height={65}
          />
          <div>JavaScript</div>
        </div>
        <div>
          <Image src="/react.png" alt="React JS" width={65} height={65} />
          <div>React</div>
        </div>
        <div>
          <Image src="/nextjs.png" alt="Next JS" width={65} height={65} />
          <div>Next</div>
        </div>
        <div>
          <Image src="/nodejs.png" alt="Node JS" width={65} height={65} />
          <div>Node</div>
        </div>
        <div>
          <Image
            src="/Mongodb.png"
            alt="Mongo data base"
            width={65}
            height={65}
          />
          <div>Mongo DB</div>
        </div>
        <div>
          <Image src="/expressjs.png" alt="Express JS" width={65} height={65} />
          <div>Express</div>
        </div>
      </div>
      <p className="titleAnotherSkills">
        Tools in which I constantly progress and intensively study in practice
      </p>
      <div className={styles.skills}>
        <div>
          <Image
            src="/typescript.png"
            alt="TypeScript"
            width={70}
            height={65}
          />
          <div>TypeScript</div>
        </div>
        <div>
          <Image
            src="/reduxtoolkit.png"
            alt="Redux-Toolkit"
            width={65}
            height={65}
          />
          <div>ReduxToolkit</div>
        </div>
        <div>
          <Image src="/jwt.png" alt="Json Web Token" width={65} height={65} />
          <div>Json Web Token</div>
        </div>
        <div>
          <Image src="/axios.png" alt="Axios" width={65} height={65} />
          <div>Axios</div>
        </div>
        <div>
          <Image src="/bcrypt.png" alt="BCrypt" width={65} height={65} />
          <div>BCrypt</div>
        </div>
        <div>
          <Image
            src="/tailwind.webp"
            alt="TailWindCSS"
            width={65}
            height={65}
          />
          Tailwind
        </div>
        <div>
          <Image
            src="/materialize.png"
            alt="Materialize CSS"
            width={65}
            height={65}
          />
          <div>Materialize</div>
        </div>
        <div>
          <Image
            src="/bootstrap.png"
            alt="Bootstrap CSS"
            width={65}
            height={65}
          />
          <div>Bootstrap</div>
        </div>
      </div>
    </div>
  )
}
