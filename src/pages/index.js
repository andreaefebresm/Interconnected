import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollModule from '../components/ScrollModule';

import '../scss/style.scss';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const panelsContainer = useRef();
  const intro = useRef();

  useEffect(() => {
    /* Panels */
    const panels = gsap.utils.toArray('#panels-container .panel');
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#panels-container',
        pin: true,
        start: 'top top',
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => `+=${panelsContainer.current.offsetWidth - innerWidth}`,
      },
    });
  }, []);

  const panels = [
    'Panel 1',
    'Panel 2',
    'Panel 3',
    'Panel 4',
    'Panel 5',
  ];

  return (
    <div>
      <main id="content" className="site-content" role="main">

        <section id="intro" className="full-screen pt-5 blue">
          <h1>A cool title</h1>

        </section>

        <section id="panels">

          <div id="panels-container" style={{ width: '500%' }} ref={panelsContainer}>

            {
          panels.map((text) => (

            <article id="panel-1" className="panel full-screen red">
              <div className="container">
                <div className="row">
                  <div className="col-6" />
                  <div className="col-6 d-flex flex-column">

                    <h2>Panel 1</h2>

                    <p className="step-description">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including
                      versions of Lorem Ipsum.
                    </p>

                    <div className="panels-navigation text-right">
                      <div className="nav-panel" data-sign="plus">
                        <a href="#panel-2" className="anchor">Next</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))
        }
          </div>

        </section>
      </main>
    </div>

  );
}
