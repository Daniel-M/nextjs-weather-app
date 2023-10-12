import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { CityCard } from "@/ui-screens";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const cityNameToID = {
  Medellín: 107060,
  Girardota: 106977,
  Rionegro: 101851,
};

const apiKey = process.env.API_KEY || "";

const loadCities = async () => {
  const cities = Object.keys(cityNameToID).map((cityName) =>
    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${cityNameToID[cityName]}?details=true&apikey=${apiKey}`
    )
  );
  try {
    const responses = await Promise.all(cities);
    const jsonResponses = await Promise.all(
      responses.map((response) => response.json())
    );
    console.log("Responses");
    console.log(jsonResponses);
    return Object.keys(cityNameToID).map((cityName, idx) => ({
      cityName,
      ...jsonResponses[idx][0],
    }));
  } catch (error) {
    
    console.log(error);
    console.log('Returning fallback data');
    return [
      {
        cityName: "Medellín",
        HasPrecipitation: false,
        Temperature: {
          Metric: {
            Value: 30,
          },
        },
        RelativeHumidity: 70,
        WeatherText: "Cloudy",
      },
    ];
  }

  // TODO: Swap the implementation below for to debug and dev without consuming API quota
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve([
  //       {
  //         cityName: 'Medellín',
  //         HasPrecipitation: false,
  //         Temperature: {
  //           Metric: {
  //             Value: 30,
  //           },
  //         },
  //         RelativeHumidity: 70,
  //         WeatherText: 'Cloudy',
  //       }
  //     ])
  //   })
  // })
};

export default async function Home() {
  const cities = await loadCities();

  const renderCards =
    cities && cities.length ? (
      cities.map((city, idx) => (
        <Grid key={idx} item>
          <CityCard
            cityName={city.cityName}
            hasPrecipitation={city.HasPrecipitation}
            currentTemperature={city.Temperature.Metric.Value}
            currentHumidity={city.RelativeHumidity}
            weatherText={city.WeatherText}
          />
        </Grid>
      ))
    ) : (
      <LoadingSpinner />
    );

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {renderCards}
      </Grid>
    </Container>
  );
}
