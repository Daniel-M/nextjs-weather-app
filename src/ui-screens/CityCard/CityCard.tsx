import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components";
import Image from "next/image";

interface CityCardProps {
  cityName: string;
  hasPrecipitation: boolean;
  currentTemperature: number;
  currentHumidity: number;
  weatherText: string;
}

export function CityCard({
  cityName,
  hasPrecipitation,
  currentTemperature,
  currentHumidity,
  weatherText,
}: CityCardProps) {
  let weatherIcon;
  switch (weatherText) {
    case "Cloudy":
      weatherIcon = <WbCloudyIcon />;
      break;
    case "Thunderstorm":
      weatherIcon = <ThunderstormIcon />;
      break;
    case "Sunny":
      weatherIcon = <WbSunnyIcon />;
      break;
    default:
      weatherIcon = <WbSunnyIcon />;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Suspense fallback={<LoadingSpinner />}>
        <Image
          src="https://source.unsplash.com/random"
          alt={cityName}
          width={345}
          height={140}
        />
      </Suspense>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography gutterBottom variant="h5" component="div">
              {cityName}
            </Typography>
          </Grid>
          <Grid item>
            {weatherIcon} {hasPrecipitation ? <WaterDropIcon /> : null}
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          {weatherText ? `${weatherText}` : null}{" "}
          {weatherText && hasPrecipitation ? "with rain" : null}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h3" color="text.secondary">
              {currentTemperature ? `${currentTemperature} °C` : "---"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" color="text.secondary">
              RH: {currentHumidity ? `${currentHumidity} %` : "---"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CityCard;
