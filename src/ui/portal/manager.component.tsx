import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export interface IManagerHandles {
  mount(key: string, children: React.ReactNode): void;
  update(key?: string, children?: React.ReactNode): void;
  unmount(key?: string): void;
}

export const Manager = React.forwardRef((_, ref): any => {
  const [portals, setPortals] = React.useState<
    { key: string; children: React.ReactNode }[]
  >([]);

  React.useImperativeHandle(
    ref,
    (): IManagerHandles => ({
      mount(key: string, children: React.ReactNode): void {
        setPortals((prev) => [...prev, { key, children }]);
      },

      update(key: string, children: React.ReactNode): void {
        setPortals((prev) =>
          prev.map((item) => {
            if (item.key === key) {
              return { ...item, children };
            }

            return item;
          })
        );
      },

      unmount(key: string): void {
        setPortals((prev) => prev.filter((item) => item.key !== key));
      },
    })
  );

  return portals.map(({ key, children }, index: number) => (
    <View
      key={`react-native-magnus-portal-${key}-${index}`}
      collapsable={false}
      pointerEvents="box-none"
      style={StyleSheet.absoluteFill}
    >
      {children}
    </View>
  ));
});
