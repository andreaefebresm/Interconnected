import React from 'react';
import { Helmet } from 'react-helmet';

import cover from '../images/cover.png';

function Seo() {
  return (
    <div className="App">
      <Helmet>

        <title>Interconnected</title>
        <meta name="title" content="Interconnected" />
        <meta
          name="description"
          content="Knowledge about what the Internet of Things is and how it works is part of the domain of experts using technical and abstract language. On the other hand, users of interconnected devices interact with the complex IoT infrastructure on a daily basis without directly assimilating its implications"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://interconnectedata.it" />
        <meta property="og:title" content="Interconnected" />
        <meta
          property="og:description"
          content="Knowledge about what the Internet of Things is and how it works is part of the domain of experts using technical and abstract language. On the other hand, users of interconnected devices interact with the complex IoT infrastructure on a daily basis without directly assimilating its implications"
        />
        <meta property="og:image" content={cover} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://interconnectedata.it/" />
        <meta property="twitter:title" content="Interconnected" />
        <meta
          property="twitter:description"
          content="Knowledge about what the Internet of Things is and how it works is part of the domain of experts using technical and abstract language. On the other hand, users of interconnected devices interact with the complex IoT infrastructure on a daily basis without directly assimilating its implications"
        />
        <meta property="twitter:image" content={cover} />

      </Helmet>
    </div>
  );
}

export default Seo;
