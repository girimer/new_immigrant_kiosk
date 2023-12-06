import BackButtonSpanish from "./buttons/BackButtonSpanish";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const FooterSpanish = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <BackButtonSpanish />
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
          <Typography variant="h6">¿Tienes más preguntas?</Typography>
          <Typography variant="body1">
            Conéctese con nosotros marcando el 311. Nuestros agentes telefónicos
            tienen acceso a un servicio de traducción de idiomas que puede
            ayudar a los ciudadanos.
          </Typography>
        </Paper>
      </div>
    </>
  );
};

export default FooterSpanish;
