import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { useKey } from './hooks/useKey';
import { Manager, IManagerHandles } from './manager.component';

interface IHostProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export interface IProvider {
  mount(children: React.ReactNode): string;
  update(key?: string, children?: React.ReactNode): void;
  unmount(key?: string): void;
}

export const Context = React.createContext<IProvider | null>(null);

export const Host = ({ children, style }: IHostProps): JSX.Element => {
  const managerRef = React.useRef<IManagerHandles>(null);
  const queue: {
    type: 'mount' | 'update' | 'unmount';
    key: string;
    children?: React.ReactNode;
  }[] = [];
  const { generateKey, removeKey } = useKey();

  React.useEffect(() => {
    while (queue.length && managerRef.current) {
      const action = queue.pop();

      if (action) {
        switch (action.type) {
          case 'mount':
            managerRef.current?.mount(action.key, action.children);
            break;
          case 'update':
            managerRef.current?.update(action.key, action.children);
            break;
          case 'unmount':
            managerRef.current?.unmount(action.key);
            break;
        }
      }
    }
  }, []);

  const mount = (children: React.ReactNode): string => {
    const key = generateKey();

    if (managerRef.current) {
      managerRef.current.mount(key, children);
    } else {
      queue.push({ type: 'mount', key, children });
    }

    return key;
  };

  const update = (key: string, children: React.ReactNode): void => {
    if (managerRef.current) {
      managerRef.current.update(key, children);
    } else {
      const op = { type: 'mount' as 'mount', key, children };
      const index = queue.findIndex(
        (o) => o.type === 'mount' || (o.type === 'update' && o.key === key)
      );

      if (index > -1) {
        queue[index] = op;
      } else {
        queue.push(op);
      }
    }
  };

  const unmount = (key: string): void => {
    if (managerRef.current) {
      managerRef.current.unmount(key);
      removeKey(key);
    } else {
      queue.push({ type: 'unmount', key });
    }
  };

  return (
    <Context.Provider value={{ mount, update, unmount }}>
      <View
        style={[{ flex: 1 }, style]}
        collapsable={false}
        pointerEvents="box-none"
      >
        {children}
      </View>

      <Manager ref={managerRef} />
    </Context.Provider>
  );
};
