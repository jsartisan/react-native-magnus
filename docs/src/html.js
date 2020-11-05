import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  /**
   * hot jar tracking tool
   */
  const addHotJarSnippet = () => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: ` (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:1967244,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
    );
  };

  /**
   * add drift chat widget
   */
  const addDriftChat = () => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `<!-- Start of Async Drift Code -->
            "use strict";

            !function() {
              var t = window.driftt = window.drift = window.driftt || [];
              if (!t.init) {
                if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
                t.factory = function(e) {
                  return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return n.unshift(e), t.push(n), t;
                  };
                }, t.methods.forEach(function(e) {
                  t[e] = t.factory(e);
                }), t.load = function(t) {
                  var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                  o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                  var i = document.getElementsByTagName("script")[0];
                  i.parentNode.insertBefore(o, i);
                };
              }
            }();
            drift.SNIPPET_VERSION = '0.3.1';
            drift.load('dcyzcaizxk2k');
           `,
        }}
      />
    );
  };

  const addDriftHelperSnippet = () => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `<!-- place this script tag after the Drift embed tag -->

      (function() {
        /* Add this class to any elements you want to use to open Drift.
         *
         * Examples:
         * - <a class="drift-open-chat">Questions? We're here to help!</a>
         * - <button class="drift-open-chat">Chat now!</button>
         *
         * You can have any additional classes on those elements that you
         * would like.
        */
        var DRIFT_CHAT_SELECTOR = '.drift-open-chat'
        /* http://youmightnotneedjquery.com/#ready */
        function ready(fn) {
          if (document.readyState != 'loading') {
            fn();
          } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
          } else {
            document.attachEvent('onreadystatechange', function() {
              if (document.readyState != 'loading')
                fn();
            });
          }
        }
        /* http://youmightnotneedjquery.com/#each */
        function forEachElement(selector, fn) {
          var elements = document.querySelectorAll(selector);
          for (var i = 0; i < elements.length; i++)
            fn(elements[i], i);
        }
        function openChat(driftApi, event) {
          event.preventDefault();
          driftApi.openChat();
          return false;
        }
        ready(function() {
          drift.on('ready', function(api) {
            var handleClick = openChat.bind(this, api)
            forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
              el.addEventListener('click', handleClick);
            });
          });
        });
      })();
    `,
        }}
      />
    );
  };

  return (
    <html {...props.htmlAttributes}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        {props.headComponents}
        <meta name="msapplication-TileColor" content="#da532c" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,800|Nunito+Sans:400,700,900"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="generator" content="Gatsby 2.20.12" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {addDriftChat()}
        {addDriftHelperSnippet()}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
