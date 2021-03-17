import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Link } from 'gatsby';

import '../scss/style.scss';
import { useLayoutEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';
import { ReactComponent as Vacuum1 } from '../svg/vacuum1/test.svg';
import { ReactComponent as Vacuum2 } from '../svg/vacuum2/test.svg';
import EndContent from '../components/endContent';
import data from '../data';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

function PathOfData({ Svg }) {
  const panelsContainer = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#panels-container',
        start: 'top top',
        pin: true,
        scrub: 0,
        end: () => `+=${panelsContainer.current.offsetWidth - innerWidth}`,
      },
    });

    gsap.to('#test_svg__simuove', {
      scrollTrigger: {
        trigger: '#panels-container',
        start: 'top top',
        pin: true,
        scrub: 0,
        markers: true,
        end: () => `+=${panelsContainer.current.offsetWidth - innerWidth}`,

      },
      motionPath: {
        path: '#test_svg__path',
        align: '#test_svg__path',
        alignOrigin: [0.5, 0.9],
      },
    });

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
  }, [Svg]);

  return (
    <section id="panels" className="bg-primary bigText">

      <div id="panels-container" style={{ width: '300%' }} ref={panelsContainer}>

        <div className="panel">
          <Svg className="position-relative" id="fuck" />

        </div>

      </div>

    </section>
  );
}

export default function Start() {
  const [selectedItem, setSelectedItem] = useState();

  const params = new URLSearchParams(window.location.search);

  const index = typeof params.get('selected') !== 'undefined' ? params.get('selected') : 0;
  const deviceData = data[index];

  const { options, Icon } = deviceData;
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
                <p>Choose one option to interact with the device</p>
                {
                  options.map(({ label, Svg, collectedData }, index) => (
                    <div className="row pb-3" key={index}>
                      <a
                        href="#discover-data"
                        onClick={() => setSelectedItem({ label, Svg, collectedData })}
                      >
                        <button>{label}</button>
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>

        <div className="w-100" id="discover-data" />
        { selectedItem && <PathOfData Svg={selectedItem.Svg} collectedData={selectedItem.collectedData} />}

      </main>

    </div>

  );
}
