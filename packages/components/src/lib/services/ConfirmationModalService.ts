import { DialogProps } from 'src/modals/ConfirmationModalScreen';

interface ConfirmationDialogProps {
  readonly cancelAction?: () => any;
  readonly cancelLabel: string;
  readonly confirmAction: () => any;
  readonly confirmLabel: string;
  readonly text: string;
  readonly title: string;
  readonly returnRoute: string;
  readonly showCancel?: boolean;
}

/**
 * Sets up the route params to be passed to the navigate('ConfirmationModal', <THESE_PARAMS>) route.
 */
export default function make(props: ConfirmationDialogProps): DialogProps {
  const { cancelAction, cancelLabel, confirmLabel, confirmAction, title, text, returnRoute, showCancel } = props;

  return {
    dismissButtonHandler: cancelAction,
    dismissButtonLabel: cancelLabel,
    confirmButtonHandler: confirmAction,
    confirmButtonLabel: confirmLabel,
    text,
    title,
    returnRoute,
    showCancel,
  };
}