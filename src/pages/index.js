import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollModule from '../components/ScrollModule';

import '../scss/style.scss';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const container = useRef();

  useEffect(() => {
    gsap.to(container.current, {
      x: () => `${-(container.current.scrollWidth - document.documentElement.clientWidth)}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        markers: true,
        end: () => `+=${container.current.offsetWidth}`,
      },
    });
  }, []);

  return (
    <div>

      <div id="container" ref={container}>

        <ScrollModule>
          <div className="row h-100">
            <div className="col-8 display-6">
              <p>Smart objects are devices that have network connectivity and they work by collecting user data, process and analyse that data and then return it back to the user.</p>
            </div>
          </div>
        </ScrollModule>
        <ScrollModule>
          <div className="row h-100 align-items-end">
            <div className="col-8 display-6">
              <p>The data they collect comes from our interaction with the objects: your voice, your face, the map of your house and even your habits.</p>
            </div>
          </div>
        </ScrollModule>
        <ScrollModule>
          <div className="row h-100">
            <div className="col-8 display-6">
              <p>Data is stored in big server farms where Artificial Intelligences analyse this data and understand stuff from it. </p>
            </div>
          </div>
        </ScrollModule>
        <ScrollModule>
          <div className="row h-100 align-items-end">
            <div className="col-8 display-6">
              <p>This data is not only stored by the company that produces the object (FIRST PARTY), but also from other companies that are called second and third parties. </p>
            </div>
          </div>
        </ScrollModule>
        <ScrollModule>
          <div className="row h-100 align-items-end">
            <div className="col-8 display-6">
              <p>The path of the data from first parties to second and third parties is still not clear, but we do know that data has economical value.</p>
            </div>
          </div>
        </ScrollModule>

      </div>

    </div>

  );
}
