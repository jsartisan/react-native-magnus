import React, { Component } from 'react';
import {
  StyleSheet,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Snackbar } from './snackbar.component';
import {
  SnackbarContainerState,
  SnackbarContainerProps,
  SnackbarProps,
} from './snackbar.type';

class SnackbarContainer extends Component<
  SnackbarContainerProps,
  SnackbarContainerState
> {
  constructor(props: SnackbarContainerProps) {
    super(props);

    this.state = {
      snackbars: [],
    };
  }

  static defaultProps = {
    placement: 'bottom',
  };

  show = (message: string | JSX.Element, config?: SnackbarProps) => {
    let id = config?.id || Math.random().toString();
    const onClose = () => this.hide(id);

    requestAnimationFrame(() => {
      this.setState({
        snackbars: this.state.snackbars.filter((t) => t.id !== id),
      });
      this.setState({
        snackbars: [
          {
            id,
            message,
            onClose,
            ...config,
          },
          ...this.state.snackbars,
        ],
      });
    });

    return id;
  };

  update = (
    id: string,
    message: string | JSX.Element,
    config?: SnackbarProps
  ) => {
    this.setState({
      snackbars: this.state.snackbars.map((toast) =>
        toast.id === id ? { ...toast, message, ...config } : toast
      ),
    });
  };

  hide = (id: string) => {
    this.setState({
      snackbars: this.state.snackbars.filter((t) => t.id !== id),
    });
  };

  render() {
    const { snackbars } = this.state;
    let { placement } = this.props;

    let style: ViewStyle = {
      justifyContent: placement === 'bottom' ? 'flex-end' : 'flex-start',
      flexDirection: placement === 'bottom' ? 'column' : 'column-reverse',
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        style={[styles.container, style]}
        pointerEvents="box-none"
      >
        {snackbars.map((snackbar) => {
          const { message, id, ...rest } = snackbar;

          return (
            <Snackbar key={id} {...this.props} {...rest}>
              {message}
            </Snackbar>
          );
        })}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  message: {
    color: '#333',
  },
});

export { SnackbarContainer };
