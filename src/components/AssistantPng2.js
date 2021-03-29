import React from 'react';

import assistantPng from '../svg/assistant.png';

export default function AssistantPng2() {
  return (
    <div className="d-flex justify-content-center">
      <img
        src={assistantPng}
        className="img-fluid mx-auto"
        alt="Responsive image"

      />
    </div>
  );
}
