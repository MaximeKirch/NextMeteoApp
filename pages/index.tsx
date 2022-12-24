import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Box, Container, Input, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SuggestedCities from "./components/Suggests";
import Result from "./components/Result";
import FormChecker from "./utils/FormChecker";
import ErrorModal from "./components/Modal/ErrorModal";

export default function Home() {
  const [city, setCity] = useState<string>("London");
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const fetchWeather = () => {
    if (FormChecker(city) && city.length > 0) {
      setIsLoading(true);
      {modal === true && setModal(false);}
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e417acee2f14055d35ce10dec5111e7`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data), setIsLoading(false);
        })
        .catch((e) => console.log("Error while fetching data", e));
    } else setModal(true);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
      <Head>
        <title>Next Meteo App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW={["2xl", "5xl", "5xl"]} mt={20}>
        <Box mt={10}>
          <Text align="center" fontSize={["2xl", "4xl"]} fontWeight='bold' fontStyle='italic'>
            Welcome to the Meteo App !{" "}
          </Text>
        </Box>

        <Box display="flex" mt={10} alignSelf={"center"} alignItems="center">
          <SearchIcon display={['none','block']} w={6} h={6} mr={2} onClick={fetchWeather} />
          <Input
            type={"text"}
            placeholder="Please enter a city name"
            onChange={(e) => setCity(e.target.value)}
            onSubmit={fetchWeather}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
            />
        </Box>
            {modal && <ErrorModal error={'Please enter a valid city name !'} />}

        <Box display="flex" mt={10} justifyContent="center" alignItems="start">
          {isLoading && <Text>Loading...</Text>}
          {data && !isLoading && <Result city={data} />}
        </Box>
      </Container>
    </>
  );
}
