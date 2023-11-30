import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface PhotoCardProps {
  headerVal: string;
  descriptionVal: string;
  imagePath: string;
}

export default function PhotoCard({
  headerVal,
  descriptionVal,
  imagePath,
}: PhotoCardProps) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagePath}
          alt="green iguana"
        />
        <CardContent sx={{ color: "white", backgroundColor: "#C61229" }}>
          <Typography gutterBottom variant="h5" component="div">
            {headerVal}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "white" }}
          >
            {descriptionVal}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
