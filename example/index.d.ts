type Toast = React.RefObject<
  import('react-native-magnus').SnackbarRef
>['current'];

interface Global {
  toast: Toast;
}

declare var global: Global;
