import Dialog from "@mui/material/Dialog";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  DialogBoxContent: () => JSX.Element | null;
}

export default function RiderDialogBox(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, DialogBoxContent } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogBoxContent />
    </Dialog>
  );
}
