import * as React from 'react';
import PropTypes from 'prop-types';
import config from '../config';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.css" integrity="sha384-NFTC4wvyQKLwuJ8Ez9AvPNBv8zcC2XaQzXSMvtORKw28BdJbB2QE8Ka+OyrIHcQJ" crossOrigin="anonymous"/>
          <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.js" integrity="sha384-z9arB7KJHppq8kK9AESncXcQd/KXIMMPiCrAdxfFpp+5QU438lgBE7UFGbk+gljP" crossOrigin="anonymous"></script>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {config.siteMetadata.ogImage ? (
            <meta property="og:image" content={config.siteMetadata.ogImage} />
          ) : null}
          <meta property="twitter:card" content="summary_large_image" />
          {config.siteMetadata.ogImage ? (
            <meta property="twitter:image" content={config.siteMetadata.ogImage} />
          ) : null}
          {config.siteMetadata.favicon ? (
            <link rel="shortcut icon" type="image/svg" href={config.siteMetadata.favicon} />
          ) : null}
          <noscript key="noscript"></noscript>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
            function navBarClose() {
              document.getElementById("navbar").classList.toggle("responsive");
            }
            document.addEventListener('click',function(e){
              if(e.target && e.target.tagName.toLowerCase() === 'a'){
                navBarClose();
              }
           });
            `,
            }}
          />
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
