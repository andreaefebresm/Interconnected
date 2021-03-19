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

function PathOfData({ Svg, collectedData, prefix }) {
  const svgPrefix = prefix || 'test_svg';
  /**
   * Questa variabile ha gli id e le classi che hanno i box gialli.
   * @type {({className: string, id: string}|{className: string, id: string}|{className: string, id: string})[]}
   */
  const ids = [
    {
      id: 'uno', className: 'unoa',
    },
    {
      id: 'due', className: 'duea',
    },
    {
      id: 'tre', className: 'trea',
    },
  ];

  const panelsContainer = useRef();

  useLayoutEffect(() => {
    /**
     * Aggiungo un evento onclick per ciascuna delle etichette che triggerano i box gialli
     */
    for (const { id, className } of ids) {
      document.getElementById(`${prefix || 'test_svg'}__${id}`).addEventListener('click', () => {
        const el = document.getElementById(id);
        el.classList.remove(className);
        el.classList.add(`${className}Post`);
      });
    }

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
        end: () => `+=${panelsContainer.current.offsetWidth - innerWidth}`,
      },
    });

    /**
     * Animazione dell'etichetta che si mouove
     */
    tl.to(`#${svgPrefix}__` + 'simuove', {
      motionPath: {
        path: `#${svgPrefix}__` + 'path',
        align: `#${svgPrefix}__` + 'path',
        alignOrigin: [0.5, 0.9],
      },
    }, 0);

    /**
     * Movimento sull'asse x di tutto l'svg
     */
    tl.to('#path-of-data', {
      xPercent: -66, // Questo definisce a che punto si ferma il SVG
      ease: 'none',
    }, 0);
  }, [Svg]);

  return (
    <div>
      <section id="panels" className="bg-primary bigText">

        <div id="panels-container" style={{ width: '300%' }} ref={panelsContainer}>

          <div className="panel">
            <Svg className="position-relative" id="path-of-data" />
            {
              collectedData.map(({ label, description }, i) => (
                <div id={ids[i].id} className={ids[i].className} key={label}>
                  <div style={{ width: '30%' }} className="box">
                    <div style={{ padding: '15px' }}>
                      <p>
                        {label}
                        :
                      </p>
                      <p>
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section>
        <FirstOption />
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
                      <div className="col-5">
                        <a
                          href="#discover-data"
                          onClick={() => setSelectedItem({
                            label, Svg, collectedData, prefix,
                          })}
                        >
                          <button className="display-7">{label}</button>
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
        && <PathOfData Svg={selectedItem.Svg} collectedData={selectedItem.collectedData} prefix={selectedItem.prefix} />}
      </main>

    </div>

  );
}
