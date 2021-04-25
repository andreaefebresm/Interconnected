import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Link } from 'gatsby';
import Seo from '../components/Seo';
import { ReactComponent as Intro } from '../svg/intro.svg';
import { ReactComponent as Intro2 } from '../svg/intro2.svg';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import Gif from '../components/gif';

gsap.registerPlugin(MotionPathPlugin);

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const panelsContainer = useRef();
  const text = useRef();

  const svgPrefix = 'intro_svg';
  const heys = [
    'Alexa',
    'Ok Google',
    'Hey Siri',
    'Roomba',
    'Ring Doorbell',
    'Nest',
  ];

  const [heyIndex, setHeyIndex] = useState(0);

  useEffect(() => {
    /**
   * La timeline di GSAP
   * @type {gsap.core.Timeline}
   */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#panels-container',
        start: 'top top',
        pin: true,
        scrub: 0,
        invalidateOnRefresh: true,
        end: () => `+=${panelsContainer.current.offsetWidth - innerWidth}`,
      },
    });

    /**
     * Movimento sull'asse x di tutto l'svg
     */
    tl.to('#path-of-data', {
      xPercent: -66, // Questo definisce a che punto si ferma il SVG
      ease: 'none',
    }, 0);

    /**
     * Animazione dell'etichetta, che si mouove
     */
    tl.to(`#${svgPrefix}__` + 'simuove-5', {
      motionPath: {
        path: `#${svgPrefix}__` + 'path',
        align: `#${svgPrefix}__` + 'path',
        alignOrigin: [0.5, 0.9],
      },
    }, 0);

    const interval = setInterval(() => {
      setHeyIndex((prevState) => {
        let nextIndex = prevState + 1;

        if (nextIndex > (heys.length - 1)) nextIndex = 0;

        return nextIndex;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, [panelsContainer, Intro]);

  return (
    <div>

      <Seo />
      <main id="content" className="site-content" role="main">

        <section id="intro" className="full-screen bg-secondary">
          <p className="bigText text-center display-3">
            {heys[heyIndex]}
            {' '}
            <span className="home">I am home</span>
          </p>
          <a href="#panels" className="scroll" style={{ fontSize: '200%', textDecoration: 'none' }}><Arrow /></a>

        </section>

        <section id="panels" className="bg-primary bigText">

          <div id="panels-container" style={{ width: '300%' }} ref={panelsContainer}>

            <div className="panel">
              <Intro className="position-relative" id="path-of-data" />

            </div>

          </div>

        </section>

        <section id="intro" className="full-screen bg-primary h-100">
          {/* <Intro2 /> */}
          <Gif />
        </section>

        <section className="full-screen bg-primary">
          <div className="container-fluid">
            <div className="row">
              <p className="bigText finalQuote display-4">Do you know what smart objects can tell about you?</p>
              <p className="finalQuote bigText">
                <Link to="/menu" style={{ fontSize: '100%' }}>
                  Click to explore
                  <br />
                  <Arrow className="freccia" />
                </Link>
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>

  );
}
