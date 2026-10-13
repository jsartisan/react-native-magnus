'use client';

import { useEffect, useState } from 'react';

// One delegated click handler for every "Copy" button inside rendered markdown
// (replaces gatsby-remark-code-buttons). Shows the same "Copied to clipboard!"
// toast. The old config kept the toast for 100 seconds, which looks like a
// typo; it is shown for 3.5 seconds here (the plugin's documented default).
const TOAST_MS = 3500;

export default function CopyCode() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    const onClick = async (event) => {
      const button = event.target.closest && event.target.closest('[data-copy-code]');
      if (!button) return;
      const code = button.parentElement?.querySelector('pre code') ||
        button.parentElement?.querySelector('pre');
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.textContent || '');
        setVisible(true);
        clearTimeout(timer);
        timer = setTimeout(() => setVisible(false), TOAST_MS);
      } catch {
        // Clipboard unavailable (insecure context); nothing to do.
      }
    };
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;
  return (
    <div className="copy-toaster" role="status">
      <div className="copy-toaster-text">Copied to clipboard!</div>
    </div>
  );
}
