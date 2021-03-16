import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Link } from 'gatsby';

import '../scss/style.scss';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';
import { ReactComponent as Prova } from '../svg/test.svg';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

export default function Index() {
  const panels1 = useRef();

  const panelsContainer = useRef();

  useEffect(() => {
    /* Panels */

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#panels-container',
        start: 'top top',
        pin: true,
        scrub: 0,
        end: () => `+=${panelsContainer.current.offsetWidth + innerWidth}`,
      },
    });

    gsap.to('#test_svg__simuove', {
      scrollTrigger: {
        trigger: '#panels-container',
        start: 'top top',
        pin: true,
        scrub: 0,
        end: () => `+=${panelsContainer.current.offsetWidth + innerWidth}`,

      },
      motionPath: {
        path: '#test_svg__path',
        align: '#test_svg__path',
        alignOrigin: [0.5, 0.7],
      },
    });

    gsap.to('#fuck', {
      scrollTrigger: {
        trigger: '#panels-container',
        start: 'top top',
        pin: true,
        scrub: 0,
        end: () => `+=${panelsContainer.current.offsetWidth + innerWidth}`,
      },
      xPercent: -100,
      ease: 'none',
    });
  }, []);

  const [targa, setTarga] = useState('ciao targa');

  useEffect(() => {
    const targaContainer = document.getElementById('test_svg__customtext');

    targaContainer.innerHTML = targa;
  }, [targa]);

  const option = [
    {
      link: '/firstOption',
      contenuto: 'first option',
    },
    {
      link: '/secondOption',
      contenuto: 'second option',
    },
    {
      link: '/thirdOption',
      contenuto: 'third option',
    },
  ];

  return (
    <div>
      <main id="content" className="site-content" role="main">
        <Header />

        <section id="intro" className="full-screen  ">

          <div className="container-fluid">
            <div className="row justify-content-center align-items-center" style={{ height: '90vh' }}>
              <div className="col-6">
                <Vacuum style={{ height: '400px' }} />
              </div>
              <div className="col-6">
                <p>Choose one option to interact with the device</p>
                {
                  option.map(({
                    link, contenuto,
                  }, index) => (
                    <div className="row pb-3" key={index}>
                      <a href="#fuck" onClick={() => setTarga(contenuto)}>
                        <button>{contenuto}</button>
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>

        <section id="panels" className="bg-primary bigText">

          <div id="panels-container" style={{ width: '300%' }} ref={panelsContainer}>

            <div className="panel">
              <Prova className="position-relative" id="fuck" />

            </div>

          </div>

        </section>

      </main>

    </div>

  );
}
