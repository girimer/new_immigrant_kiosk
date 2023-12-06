import BackButton from "./buttons/BackButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface HeaderProps {
  heading: string;
  body: string;
}

const Footer: React.FC<HeaderProps> = ({ heading, body }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <BackButton />
        <Paper
          elevation={3}
          style={{
            padding: "10px",
            maxWidth: "350px",
            margin: "50px",
            marginTop: "30px",
            backgroundColor: "#CCC6C6",
          }}
        >
          <Typography variant="h6">{heading}</Typography>
          <Typography variant="body1">{body}</Typography>
        </Paper>
      </div>
    </>
  );
};

export default Footer;
