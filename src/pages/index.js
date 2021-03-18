import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';
import { ReactComponent as Intro } from '../svg/intro.svg';
import '../scss/style.scss';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const panelsContainer = useRef();
  const intro = useRef();

  useEffect(() => {
    gsap.to('#fuck', {
      scrollTrigger: {
        trigger: '#panels-container',
        start: 'top top',
        pin: true,
        scrub: 0,

        end: () => `+=${panelsContainer.current.offsetWidth - innerWidth}`,
      },
      xPercent: -66, // Questo definisce a che punto si ferma il SVG
      ease: 'none',
    });
  }, []);

  return (
    <div>
      <main id="content" className="site-content" role="main">

        <section id="intro" className="full-screen bg-secondary">
          <p className="bigText text-center display-3">Alexa I am home</p>
          <span className="scroll">scroll</span>

        </section>

        <section id="panels" className="bg-primary bigText">

          <div id="panels-container" style={{ width: '300%' }} ref={panelsContainer}>

            <div className="panel">
              <Intro className="position-relative" id="fuck" />

            </div>

          </div>

        </section>

        <section id="intro" className="full-screen bg-primary">
          <div className="container-fluid">
            <div className="row">
              <p className="messapiaSerif finalQuote display-4">Do you know what smart objects can tell about you?</p>
              <p className="finalQuote"><Link to="/menu">Home</Link></p>
            </div>

          </div>
        </section>
      </main>
    </div>

  );
}
