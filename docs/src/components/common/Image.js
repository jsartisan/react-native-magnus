import React from 'react';

export default function Image({ src }) {
  return (
    <img
      className="text-center d-block mt-2"
      style={{ width: '80%' }}
      src={src}
    />
  );
}
