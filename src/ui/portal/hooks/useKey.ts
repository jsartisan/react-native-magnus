import * as React from 'react';

interface IUseKey {
  generateKey(): string;
  removeKey(key: string): void;
}

// Generates a random key
const keyGenerator = (): string => {
  return `portalize_${Math.random().toString(36).substr(2, 16)}-${Math.random()
    .toString(36)
    .substr(2, 16)}-${Math.random().toString(36).substr(2, 16)}`;
};

// Custom hook that checks for uniqueness and retries if clashes
export const useKey = (): IUseKey => {
  const usedKeys = React.useRef<Array<string>>([]);

  const generateKey = (): string => {
    let foundUniqueKey = false;
    let newKey = '';
    let tries = 0;

    while (!foundUniqueKey && tries < 3) {
      // limit number of tries to stop endless loop of pain
      tries++;
      newKey = keyGenerator();

      if (!usedKeys.current.includes(newKey)) {
        foundUniqueKey = true;
      }
    }

    // will only run if exited while loop without finding a unique key
    if (!foundUniqueKey) {
      newKey = `portalize_${Date.now()}_${Math.floor(Math.random() * 1000)}`; // fallback method
    }

    usedKeys.current.push(newKey);
    return newKey;
  };

  // Removes our key to make it 'available' again
  const removeKey = (key: string): void => {
    usedKeys.current = usedKeys.current.filter((k) => k !== key);
  };

  return { generateKey, removeKey };
};
