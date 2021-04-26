import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import Layout from '../components/Layout';
import { ReactComponent as Intro } from '../svg/intro.svg';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import Gif from '../components/gif';

export default function Index() {
  const panelsContainer = useRef();

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
      ease: 'none',
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
    <Layout header={false}>
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
          <Gif />
        </section>

        <section className="container-fluid bg-primary">
          <div className="row justify-content-center align-content-center min-vh-100">
            <div className="col-12 col-md-5">
              <p className="bigText finalQuote display-4">Do you know what smart objects can tell about you?</p>
            </div>
            <div className="col-12">
              <p className="pt-5 text-center bigText">
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
    </Layout>

  );
}
