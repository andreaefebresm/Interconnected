import React from 'react';

import assistantPng from '../images/assistant.png';

export default function AssistantPng({ style, className }) {
  return (
    <div className={`text-center ${className}`}>
      <img
        src={assistantPng}
        className="img-fluid mx-auto"
        alt="Responsive image"
        style={style}
      />
    </div>
  );
}
