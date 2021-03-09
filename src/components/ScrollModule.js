import * as React from 'react';

export default function ScrollModule({ children }) {
  return (
    <div className="module bg-primary">
      <div className="container-fluid">
        {children}
      </div>
    </div>
  );
}
