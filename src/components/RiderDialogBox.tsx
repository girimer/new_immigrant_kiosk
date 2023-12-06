import Dialog from "@mui/material/Dialog";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  DialogBoxContent: () => JSX.Element | null;
}

export default function RiderDialogBox(props: SimpleDialogProps) {
  const { onClose, open, DialogBoxContent } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogBoxContent />
    </Dialog>
  );
}
