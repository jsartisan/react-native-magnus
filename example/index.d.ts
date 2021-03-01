type Toast = React.RefObject<
  import('react-native-magnus').SnackbarRef
>['current'];

declare global {
  const toast: Toast;
}

declare var toast: Toast;
