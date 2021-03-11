import React from 'react';
import Header from '../components/Header';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';

import '../scss/style.scss';
import { Link } from 'gatsby';

export default function Start() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center" style={{ height: '90vh' }}>
          <div className="col-6">
            <Vacuum style={{ height: '400px' }} />
          </div>
          <div className="col-6">
            <p>Choose one option to interact with the device</p>
            <div className="row pb-3">
              <Link to="firstOption"><button>first option</button></Link>
            </div>
            <div className="row pb-3">
              <Link to="secondOption"><button>second option</button></Link>
            </div>
            <div className="row">
              <Link to="thirdOption">
                <button>third option</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
