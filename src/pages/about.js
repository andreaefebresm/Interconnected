import React from 'react';
import Header from '../components/Header';

import '../scss/style.scss';
import { Link } from 'gatsby';

export default function About() {
  return (
    <div>
      <Header />
      <div className="container-fluid h-100">
        <div className="row">
          <p className="display-4">BECAUSE STORING THIS DATA COMPANIES KNOW DATA COMPANIES KNOW</p>
        </div>
        <div className="row bordoTopAbout bordoBottomAbout">
          <div className="col-2">
            <div className="row pt-2 pb-2">
              <Link to="#primo">STRARTING POINT</Link>
            </div>
            <div className="row bordoTopAbout pt-2 pb-2">
              <Link to="#secondo">THE GOAL</Link>
            </div>
            <div className="row bordoTopAbout pt-2 pb-2">
              <Link to="#terzo">METHODOLOGY</Link>
            </div>
            <div className="row bordoTopAbout bordoBottomAbout pt-2 pb-2">
              <Link to="#quarto">RELEVANCE</Link>
            </div>
          </div>
          <div className="col-10 overflow-auto borderLeftAbout" style={{ height: '70vh' }}>
            <p className="workSansReg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor. Neque volutpat ac tincidunt vitae semper. Purus sit amet luctus venenatis lectus. Nec tincidunt praesent semper feugiat nibh sed. Id interdum velit laoreet id donec ultrices tincidunt. sasPhasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Risus in hendrerit gravida rutrum quisque non. Faucibus turpis in eu mi bibendum neque egestas.</p>
            <p className="workSansReg" id="primo">
              <span className="workSansStrong">Starting Point</span>
              <br />
              Eros donec ac odio tempor orci dapibus ultrices in. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Etiam sit amet nisl purus in mollis nunc sed id. Mollis aliquam ut porttitor leo. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Turpis egestas pretium aenean pharetra. Congue nisi vitae suscipit tellus. Tellus id interdum velit laoreet id donec. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Eros donec ac odio tempor orci dapibus ultrices. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Massa tincidunt dui ut ornare lectus sit. Ut lectus arcu bibendum at varius vel pharetra vel. Purus viverra accumsan in nisl nisi scelerisque eu.
            </p>
            <p className="workSansReg" id="secondo">
              <span className="workSansStrong">The goal</span>
              <br />
              Eros donec ac odio tempor orci dapibus ultrices in. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Etiam sit amet nisl purus in mollis nunc sed id. Mollis aliquam ut porttitor leo. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Turpis egestas pretium aenean pharetra. Congue nisi vitae suscipit tellus. Tellus id interdum velit laoreet id donec. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Eros donec ac odio tempor orci dapibus ultrices. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Massa tincidunt dui ut ornare lectus sit. Ut lectus arcu bibendum at varius vel pharetra vel. Purus viverra accumsan in nisl nisi scelerisque eu.
            </p>
            <p className="workSansReg" id="terzo">
              <span className="workSansStrong">Methodology</span>
              <br />
              Eros donec ac odio tempor orci dapibus ultrices in. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Etiam sit amet nisl purus in mollis nunc sed id. Mollis aliquam ut porttitor leo. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Turpis egestas pretium aenean pharetra. Congue nisi vitae suscipit tellus. Tellus id interdum velit laoreet id donec. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Eros donec ac odio tempor orci dapibus ultrices. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Massa tincidunt dui ut ornare lectus sit. Ut lectus arcu bibendum at varius vel pharetra vel. Purus viverra accumsan in nisl nisi scelerisque eu.
            </p>
            <p className="workSansReg" id="quarto">
              <span className="workSansStrong">Relevance</span>
              <br />
              Eros donec ac odio tempor orci dapibus ultrices in. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Etiam sit amet nisl purus in mollis nunc sed id. Mollis aliquam ut porttitor leo. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Turpis egestas pretium aenean pharetra. Congue nisi vitae suscipit tellus. Tellus id interdum velit laoreet id donec. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Eros donec ac odio tempor orci dapibus ultrices. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Massa tincidunt dui ut ornare lectus sit. Ut lectus arcu bibendum at varius vel pharetra vel. Purus viverra accumsan in nisl nisi scelerisque eu.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
