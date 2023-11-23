import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
export default function BackButton() {
  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ChevronLeftIcon />}
        style={{ color: "red", borderColor: "red" }}
      >
        Back
      </Button>
    </div>
  );
}
