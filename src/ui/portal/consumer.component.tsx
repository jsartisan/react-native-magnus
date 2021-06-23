import { useRef, ReactNode, useEffect } from 'react';

import { IProvider } from './host.component';

interface IConsumerProps {
  children: ReactNode;
  manager: IProvider | null;
}

export const Consumer = ({ children, manager }: IConsumerProps): null => {
  const key = useRef<string | undefined>(undefined);

  const checkManager = (): void => {
    if (!manager) {
      throw new Error('No portal manager defined');
    }
  };

  const handleInit = (): void => {
    checkManager();
    key.current = manager?.mount(children);
  };

  useEffect(() => {
    checkManager();
    manager?.update(key.current, children);
  }, [children, manager]);

  useEffect(() => {
    handleInit();

    return (): void => {
      checkManager();
      manager?.unmount(key.current);
    };
  }, []);

  return null;
};
