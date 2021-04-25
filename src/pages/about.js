import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../scss/style.scss';
import Layout from '../components/Layout';

export default function About() {
  const intro = 'Technology is not neutral. We’re inside of what we make, and it’s inside of us.\n'
    + '            We’re living in a world of connections — and it matters which ones get made and unmade.';
  const paragraph = [
    {
      title: 'Starting point',
      content: 'Knowledge about what the Internet of Things is and how it works is part of the domain of experts using technical and abstract language. On the other hand, users of interconnected devices interact with the complex IoT infrastructure on a daily basis without directly assimilating its implications. Users\' lack of knowledge about IoT puts the privacy of their personal and sensitive data at risk. Reviewing how interconnected devices are communicated to users allows identifying and reporting which aspects should be covered to promote critical informed use. Communication about the operation of interconnected devices to users is scarce, technical and incomplete. The platforms used by users to understand and inform themselves on personal data are not offering an omni comprehensive communication on the topic. There is hence an urgency to arise questions upon the implications of interconnected devices.',
      ordine: 'primo',
    },
    {
      title: 'The goal',
      content: 'The aim of this project is to inform the audience with simple language and clear content that Internet of Things devices collect, store and elaborate user data. Interconnected aims to visually show how data travels throught the ecosystem of smart objects and to do so dissects the ecosystems itself. The project takes its steps from the opacity of the communication of privacy concerns: smart objects are present in homes and rely on data capture to work. However, users’ privacy and security is not taken into account when talking about the benefit of these objects, that surely help to automate their lives. Interconnected wants to make people understand that inputs become data through algorithms and that this data crossed with the other devices’ one, creates a profile that matches the user and it is not clear where and how this data is used.\n',
      ordine: 'secondo',
    },
    {
      title: 'How was this project done? ↴',
      content: 'The project was designed after a research on smart objects used in homes. The research was made from the user’s point of view following the question: “How can an average user understand how the IoT is structured?”. The following step was to search on Google.com “Internet of Things ecosystem” to see what the answers were.',
      ordine: 'terzo',
    },
    {
      title: '⟶ PATH',
      content: 'In the first results were used some diagrams to explain better how information is sent and managed by the different things, alongside confusing textual descriptions regarding the topic. It was then decided to use a visual medium, the diagrams, that are of course a simplification of reality but give a general overview on how the whole ecosystem is represented. This decision led to the query “Internet of Things ecosystem diagram”, searched in Google using the Images search engine. The results of this research were used to create the main leit motiv of the project, hence the connections between entities.',
      ordine: 'terzouno',
    },
    {
      title: '⟶ SENSORS',
      content: 'IoT sensor technology is the backbone of the Internet of Things ecosystem. Data can not be obtained without a sensor capable of sensing temperature, motion, humidity or acceleration. A sensor is a device able to sense changes in the environment it is put in. A sensor by itself is worthless, but when it is used in an electronic device, it plays a vital role. A sensor can calculate a physical phenomenon (like temperature, strain, etc.) and translate it into an electrical signal: sensors are input devices which provide an output (signal) concerning a specific physical quantity (input).',
      ordine: 'terzodue',
    },
    {
      title: '⟶ COMPANIES',
      content: 'The research and the analysis conducted to understand the IoT ecosystem has made evident that the opacity of the path of data is an obstacle in the understanding of the matter. To investigate where data goes and if there were connections between companies, the archive of IoT devices found on three websites was considered: *Privacy Not Included by Mozilla, IoT Line Up and PostScapes. Leaving out the repetitions between the websites, a total of 216 devices were found. Each device was searched on Google.com looking for the manufacturer. The manufacturer company was then searched again on Google.com and on Crunchbase.com in order to obtain the name of the holding company. With this data, a dendrogram visualisation was created and the main finding of this representation is that looking only at the holdings is not enough to understand the real link behind devices and companies. Either way, almost half of the market of IoT devices is held by Amazon.com, Inc., Alphabet Inc. and Apple Inc.',
      ordine: 'terzotre',
    },
    {
      title: '⟶ PERCEPTION',
      content: 'The survey involved 140 people aged between 18 and +50 years old from Europe, Asia, North and South America. The participants to the survey were non-experts about the topic and their educational level was for the 42,14% third level degree, 35% were from master’s degree onwards, 18,57% secondary education and 4.29% vocational education level. \n'
        + 'The form was designed to investigate the level of IoT literacy, namely the ability to understand and evaluate information regarding the interconnected objects and their data capture-based business. In order to pursue this aim, the starting point was showing images with devices and asking which devices were known, which were owned, which devices captured personal data and which personal data was taken in their opinion. From the survey answers arose to two conclusions: there is a lack of knowledge about personal data taken from interconnected devices, and secondly, familiarity with devices, in terms of ownership and interaction, is not sufficient nor decisive for IoT literacy.',
      ordine: 'terzoquattro',
    },
    {
      title: '⟶ OPACITY',
      content: 'In the case of Interconnected, there were two types of opacity: the one related to the path of data and the one related to the data itself. These two different kinds of uncertainty could not be represented with the same shape, given that the lack of knowledge of the path supposes the certainty of the starting and arrival point. Therefore, the opacity of the path was represented with both the use of a dotted line and multiple path combinations from the starting to the arrival point. The opacity of the data, on the other hand, was represented with the blur of the elements that visualise the data. The blur is, eventually, a representation of the self censorship that is made when companies address these topics.',
      ordine: 'terzocinque',
    },
  ];
  return (
    <Layout title="About">
      <div className="contentGreen">
        <div className="container-fluid h-100">
          <div className="row">
            <p className="display-9 col-11">
              {intro}
              <em> Donna Haraway, 1991</em>
            </p>
          </div>
          <div className="row bordoTopAbout bordoBottomAbout">
            <div className="col-2">
              <div className="row pt-2 pb-2 animaz2">
                <Link to="#primo" className="upper">{paragraph[0].title}</Link>
              </div>
              <div className="row bordoTopAbout pt-2 pb-2 animaz2">
                <Link to="#secondo" className="upper">{paragraph[1].title}</Link>
              </div>
              <div className="row bordoTopAbout pt-2 pb-2 animaz2">
                <Link to="#terzo" className="upper">{paragraph[2].title}</Link>
              </div>
              <div className="row bordoTopAbout pt-2 pb-2 animaz2">
                <Link to="#terzouno" className="upper">{paragraph[3].title}</Link>
              </div>
              <div className="row bordoTopAbout pt-2 pb-2 animaz2">
                <Link to="#terzodue" className="upper">{paragraph[4].title}</Link>
              </div>
              <div className="row bordoTopAbout pt-2 pb-2 animaz2">
                <Link to="#terzotre" className="upper">{paragraph[5].title}</Link>
              </div>
              <div className="row bordoTopAbout pt-2 pb-2 animaz2">
                <Link to="#terzoquattro" className="upper">{paragraph[6].title}</Link>
              </div>
              <div className="row bordoTopAbout pt-2 pb-2 animaz2">
                <Link to="#terzocinque" className="upper">{paragraph[7].title}</Link>
              </div>
              <div className="row bordoTopAbout bordoBottomAbout pt-2 pb-2 animaz2">
                <Link to="#quarto" className="upper">Who made this project?</Link>
              </div>

            </div>
            <div className="col-10 overflow-auto borderLeftAbout" style={{ height: '70vh' }}>
              <div className="row">
                <div className="col-10">
                  <p className="fontText2 pt-2">{intro}</p>
                  {
                    paragraph.map(({
                      content, title, ordine,
                    }) => (
                      <p className="fontText2" id={ordine}>
                        <span className="fontTextStrong2">{title}</span>
                        <br />
                        {content}
                      </p>

                    ))
                  }
                  <p className="fontText2" id="quarto">
                    <span className="fontTextStrong2">Who made this project?</span>
                    <br />
                    Interconnected is a project developed as Master Degree Thesis Interconnected: interrogating Internet of Things communication  at Politecnico di Milano by Andrea Elena Febres Medina. This website was coded with the help of
                    &nbsp;
                    <a className="fw-bold" href="https://github.com/michelebruno" target="blank" style={{ color: '#497065' }}>Michele Bruno</a>
                    {' '}
                    &nbsp;and&nbsp;
                    {' '}
                    <a className="fw-bold" href="https://federicopozzi.github.io/portfolio/" target="blank" style={{ color: '#497065' }}>Federico Pozzi</a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </Layout>
  );
}
