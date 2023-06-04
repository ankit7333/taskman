import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/landing.module.scss'
import Header from '../components/header'
import { useEffect } from 'react'

export default function Landing() {
  //this hooks eg we use for basic js function to run on scroll
  useEffect(()=>{
    const allSection = document.querySelectorAll('.section');
    // console.log(allSection);
    const getSection = function(entries, observer){
      const [entry] = entries;
      // console.log(entry);
      if(!entry.isIntersecting) return;
      entry.target.classList.add(`show`);
    }
    const sectionObserver = new IntersectionObserver(
      getSection, {
        root : null,
        threshold: 0.15,
      }
    )
    allSection.forEach(function(section){
      sectionObserver.observe(section);
      section.classList.remove(`show`);
    });
  });
  return (
    <div className={`container`}>
      <Head>
        <title>Taskman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main className={`main`}>
        {/* section 1 */}
        <section className={`section ${styles.hero}`} id={`Section__1`}>
          <Header />
          <div className={`imgwrap ${styles.color} ${styles.blue}`} />
          <div className={`imgwrap ${styles.color} ${styles.yellow}`} />
          <div className={`imgwrap ${styles.color} ${styles.black}`} />
          <div className={`${styles.card}`}>
            <div className={`imgwrap ${styles.card__4}`} />
            <div className={`imgwrap ${styles.card__3}`} />
            <div className={`imgwrap ${styles.card__2}`} />
            <div className={`imgwrap ${styles.card__1}`} />
          </div>
          <div className={`${styles.block}`}>
            <h1 className={`${styles.title}`}>Task Management And Lists Tool</h1>
            <p className={`${styles.paragraph}`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <form className={`form ${styles.form__custom}`}>
              <input type='email' placeholder='Name@company.com' />
              <button className={`button button__primary button--boxshadow`}>Try for free</button>
            </form>
            <ul className={`${styles.logowrap}`}>
              <li>
                <a href='#'>
                  <Image
                      src={"/images/Cartoon_Network_logo.svg"}
                      width={100}
                      height={100}
                      className={`${styles.cartoonnetworklogo}`}
                      alt="cartoon network logo"
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                      src={"/images/Booking.com_logo.svg"}
                      width={100}
                      height={100}
                      className={`${styles.bookinglogo}`}
                      alt="booking logo"
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                      src={"/images/Dropbox_logo.svg"}
                      width={100}
                      height={100}
                      className={`${styles.dropboxlogo}`}
                      alt="dropbox logo"
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                      src={"/images/Toshiba_logo.svg"}
                      width={100}
                      height={100}
                      className={`${styles.toshiba}`}
                      alt="toshiba logo"
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                      src={"/images/Slack_logo.svg"}
                      width={100}
                      height={100}
                      className={`${styles.slacklogo}`}
                      alt="slack logo"
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                      src={"/images/Netflix_logo.svg"}
                      width={100}
                      height={100}
                      className={`${styles.netflixlogo}`}
                      alt="Netflix logo"
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                      src={"/images/Spotify_logo.svg"}
                      width={100}
                      height={100}
                      className={`${styles.spofitylogo}`}
                      alt="spotify logo"
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                      src={"/images/CocaCola_logo.svg"}
                      width={100}
                      height={100}
                      className={`${styles.cocacolalogo}`}
                      alt="cocacola logo"
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                      src={"/images/RedBull_logo.svg"}
                      width={100}
                      height={100}
                      className={`${styles.redbulllogo}`}
                      alt="redbull logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* section 2 */}
        <section className={`section ${styles.benefits__wrap}`} id={`Section__2`}>
          <div className={`section__inner`}>
            <h2 className={`${styles.title} ${styles.title__section} ${styles.benefits}`}>Key benefits of using task management software</h2>
            <div className={`${styles.benefits__wrap}`}>
              <figure>
                <Image
                    src={"/images/Benefits_Icon_Track.svg"}
                    width={100}
                    height={100}
                    alt="Track"
                />
                <figcaption>
                  <span className={`${styles.img__title}`}>Keep tasks in one place</span>
                  <span className={`${styles.img__subtitle}`}>Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</span>
                </figcaption>
              </figure>
              <figure>
                <Image
                    src={"/images/Benefits_Icon_Priotitize.svg"}
                    width={100}
                    height={100}
                    alt="Priotitize"
                />
                <figcaption>
                  <span className={`${styles.img__title}`}>Prioritize your work</span>
                  <span className={`${styles.img__subtitle}`}>Tracking tasks allows everyone to understand which are more important or require more time, so</span>
                </figcaption>
              </figure>
              <figure>
                <Image
                    src={"/images/Benefits_Icon_Collaborate.svg"}
                    width={100}
                    height={100}
                    alt="Collabrate"
                />
                <figcaption>
                  <span className={`${styles.img__title}`}>Improve collaboration</span>
                  <span className={`${styles.img__subtitle}`}>Tracking tasks allows everyone to understand which are more important or require more time, so</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section className={`section ${styles.why__wrap}`} id={`Section__3`}>
          <div className={`imgwrap ${styles.rectangle}`} />
          <div className={`imgwrap ${styles.circle}`} />
          <div className={`section__inner`}>
            <div className={`${styles.imgblock}`}>
              <div className={`imgwrap ${styles.rankproject}`}></div>
              <div className={`imgwrap ${styles.topearn}`}></div>
            </div>
            <div className={`${styles.block}`}>
                <h2 className={`${styles.title}`}>Why do you need task management software?</h2>
                <p className={`${styles.paragraph} ${styles.paragraph__animation}`}>
                  Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.
                </p>
                <button className={`button ${styles.learnmorebtn}`}>LEARN MORE<span className={`imgwrap ${styles.rightarrow}`} /></button>
            </div>
          </div>
        </section>
        {/* section 4 */}
        <section className={`section ${styles.work}`} id={`Section__4`}>
          <div className={`section__inner`}>
          <h2 className={`${styles.title} ${styles.title__section} ${styles.benefits}`}>Get better work done</h2>
          <div className={`${styles.workdonetext}`}>See why millions of people across 195 countries use TaskMan.</div>
          <form className={`form ${styles.form__custom}`}>
              <input type='email' placeholder='Name@company.com' />
              <button className={`button button__primary`}>Try for free</button>
            </form>
          </div>
          <div className={`imgwrap ${styles.triangle}`} />
        </section>
      </main>
    </div>
  )
}
