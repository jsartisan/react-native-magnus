import Script from 'next/script';

const DRIFT_ID = 'dcyzcaizxk2k';
const INSPECTLET_WID = 1550740511;

const driftSnippet = `
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
      o.type = "text/javascript", o.async = !0, o.crossOrigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('${DRIFT_ID}');
// Any element with the class "drift-open-chat" opens the chat widget.
// Delegated so it also works for elements rendered after client navigation.
drift.on('ready', function(api) {
  document.addEventListener('click', function(event) {
    if (event.target.closest && event.target.closest('.drift-open-chat')) {
      event.preventDefault();
      api.openChat();
    }
  });
});
`;

const inspectletSnippet = `
(function() {
  window.__insp = window.__insp || [];
  __insp.push(['wid', ${INSPECTLET_WID}]);
  var ldinsp = function() {
    if (typeof window.__inspld != "undefined") return;
    window.__inspld = 1;
    var insp = document.createElement('script');
    insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync";
    insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=${INSPECTLET_WID}&r=' + Math.floor(new Date().getTime() / 3600000);
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(insp, x);
  };
  setTimeout(ldinsp, 0);
})();
`;

// Third-party scripts, same set as the Gatsby site: Drift chat in every
// environment, Inspectlet and Google Analytics in production only.
export default function Scripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'UA-149664330-1';
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <>
      <Script
        id="drift"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: driftSnippet }}
      />
      {isProd && (
        <Script
          id="inspectlet"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: inspectletSnippet }}
        />
      )}
      {isProd && gaId.startsWith('G-') && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
            }}
          />
        </>
      )}
      {isProd && gaId.startsWith('UA-') && (
        <Script
          id="ga-universal"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','${gaId}','auto');ga('send','pageview');`,
          }}
        />
      )}
    </>
  );
}
