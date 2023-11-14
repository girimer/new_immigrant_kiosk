import Button from "@mui/material/Button";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export default function ExitButton() {
    return (
        <div>
            <Button
            variant="outlined"
            size="medium"
            endIcon={<ExitToAppIcon/>}
            style={{ color: "red", borderColor: "red"}}
            >
            Exit
            </Button>
        </div>
    )
}