import React from 'react';
import '../scss/style.scss';

export default function Layout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
