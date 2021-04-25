import React from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import '../scss/style.scss';
import Seo from './Seo';
import Header from './Header';

gsap.registerPlugin(MotionPathPlugin);

gsap.registerPlugin(ScrollTrigger);

console.log('Developed by Federico Pozzi and Michele Bruno.');

export default function Layout({ children, title, header }) {
  return (
    <>
      {header && <Header className="sticky-top" />}
      <Seo title={title} />
      {children}
    </>
  );
}

Layout.defaultProps = {
  header: true,
};
