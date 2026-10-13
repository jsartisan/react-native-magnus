export default function manifest() {
  return {
    name: 'Magnus UI',
    short_name: 'Magnus UI', // was "starter" (Gatsby starter leftover)
    start_url: '/',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'minimal-ui',
    icons: [
      { src: '/images/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
