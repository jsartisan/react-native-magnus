import React, { Component } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
} from 'react-native';

import { Toast } from './toast.component';
import {
  SnackbarState,
  SnackbarProps,
  SnackbarContainerProps,
} from './snackbar.type';
class Snackbar extends Component<
  SnackbarProps & SnackbarContainerProps,
  SnackbarState
> {
  constructor(props: SnackbarProps & SnackbarContainerProps) {
    super(props);

    this.state = {
      toasts: [],
    };
  }

  static defaultProps = {
    placement: 'bottom',
    offset: 0,
  };

  /**
   * adds new toast in the snackbar
   *
   * @param message
   * @param config
   */
  show = (message: string | JSX.Element, config?: SnackbarProps) => {
    let id = config?.id || Math.random().toString();
    const onClose = () => this.hide(id);

    requestAnimationFrame(() => {
      this.setState({
        toasts: this.state.toasts.filter((t) => t.id !== id),
      });
      this.setState({
        toasts: [
          {
            id,
            message,
            onClose,
            ...config,
          },
          ...this.state.toasts,
        ],
      });
    });

    return id;
  };

  /**
   * updates a existing toast
   *
   * @param id
   * @param message
   * @param config
   */
  update = (
    id: string,
    message: string | JSX.Element,
    config?: SnackbarProps
  ) => {
    this.setState({
      toasts: this.state.toasts.map((toast) =>
        toast.id === id ? { ...toast, message, ...config } : toast
      ),
    });
  };

  /**
   * removes a toast from the snackbar
   *
   * @param id
   */
  hide = (id: string) => {
    this.setState({
      toasts: this.state.toasts.filter((t) => t.id !== id),
    });
  };

  render() {
    const { toasts } = this.state;
    const { placement, offset } = this.props;

    let style: ViewStyle = {
      bottom: placement === 'bottom' ? offset : undefined,
      top: placement === 'top' ? offset : undefined,
      justifyContent: placement === 'bottom' ? 'flex-end' : 'flex-start',
      flexDirection: placement === 'bottom' ? 'column' : 'column-reverse',
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        style={[styles.container, style]}
        pointerEvents="box-none"
      >
        {toasts.map((toast) => {
          const { message, id, ...rest } = toast;

          return (
            <Toast key={id} {...this.props} {...rest}>
              {message}
            </Toast>
          );
        })}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
  },
});

export { Snackbar };
