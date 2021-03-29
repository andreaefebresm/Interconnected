import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import '../scss/style.scss';

import Header from '../components/Header';
import FirstOption from './firstOption';
import data from '../data';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

function PathOfData({
  Svg, collectedData, prefix, end,
}) {
  const svgPrefix = prefix || 'test_svg';
  /**
   * Questa variabile ha le posizioni di default che hanno i box verdi.
   */
  const defaultStyles = [
    {
      top: '15%', left: '12%',
    },
    {
      top: '34%', left: '23%',
    },
    {
      top: '44%', left: '13%',
    },
    {
      top: '64%', left: '33%',
    },
  ];

  const panelsContainer = useRef();

  let tl;

  useLayoutEffect(() => {
    if (tl && tl.kill) tl.kill();

    /**
     * La timeline di GSAP
     * @type {gsap.core.Timeline}
     */
    tl = gsap.timeline({
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
    tl.to(`#${svgPrefix}__` + 'simuove', {
      motionPath: {
        path: `#${svgPrefix}__` + 'path',
        align: `#${svgPrefix}__` + 'path',
        alignOrigin: [0.5, 0.9],
      },
    }, 0);

    tl.to('.box', {
      transform: 'translateY(0)',
      opacity: 2,
      duration: 0.05,
      stagger: 0.045,
    });
  }, [Svg]);

  return (
    <div>
      <section id="panels" className="bg-primary">

        <div id="panels-container" style={{ width: '300%' }} ref={panelsContainer}>

          <div className="panel">
            <Svg className="position-relative" id="path-of-data" />

            <div>
              <p style={{ position: 'absolute', top: '10%', left: '22%' }}>asvpdenve</p>
              {
                collectedData.map(({ label, description, style }, i) => (
                  <div className="box" key={label + i} style={{ ...defaultStyles[i], ...style }}>
                    <div className="text-dark" style={{ padding: '15px' }}>
                      <p className="bigText display-8">
                        {label}
                        :
                      </p>
                      <p className="fontText">{description}</p>
                    </div>
                  </div>
                ))
              }
            </div>

          </div>

        </div>
      </section>
      <section>
        <FirstOption end={end} />
      </section>
    </div>

  );
}

export default function Start() {
  const [selectedItem, setSelectedItem] = useState();
  let index = 0;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    index = typeof params.get('selected') !== 'undefined' ? params.get('selected') : 0;
  }
  const deviceData = data[index];

  const { options, Icon, end } = deviceData;
  return (
    <div>
      <Header className="sticky-top" />
      <main id="content" className="site-content" role="main">

        <section id="intro" className="full-screen  ">

          <div className="container-fluid">
            <div className="row justify-content-center align-items-center" style={{ height: '90vh' }}>
              <div className="col-6">
                <Icon style={{ height: '40vh' }} className="mx-auto w-100" />
              </div>
              <div className="col-6">
                <p className="bigText display-4">
                  Choose one option to
                  <br />
                  interact with the device
                </p>
                {
                  options.map(({
                    label, Svg, collectedData, prefix,
                  }, i) => (
                    <div className="row pb-3" key={i}>
                      <div className="col-8 h-100">
                        <a
                          className="btn btn-lg btn-outline-info w-100"
                          href="#discover-data"
                          onClick={() => setSelectedItem({
                            label, Svg, collectedData, prefix, end,
                          })}
                        >
                          <span className=" display-7">{label}</span>
                        </a>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>

        <div className="w-100" id="discover-data" />
        {selectedItem
        && <PathOfData {...selectedItem} key={selectedItem.Svg} />}
      </main>

    </div>

  );
}
