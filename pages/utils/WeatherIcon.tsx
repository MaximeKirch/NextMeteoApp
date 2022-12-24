import {Box, Icon} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import {BsSun, BsCloud, BsCloudRain, BsCloudSnow, BsCloudLightning, BsCloudDrizzle} from 'react-icons/bs'

export default function WeatherIcon(props:any) {
    const weather = props.weather;

    const _setWeatherIcon = (weather:any) => {
        switch(weather.main) {
            case 'Clear':
                return <Icon as={BsSun} color={'yellow.500'} w={12} h={12}/>
            case 'Clouds':
                return <Icon as={BsCloud} color={'gray.500'} w={12} h={12}/>
            case 'Rain':
                return <Icon as={BsCloudRain} color={'blue.500'} w={12} h={12}/>
            case 'Snow':
                return <Icon as={BsCloudSnow} color={'blue.500'} w={12} h={12}/>
            case 'Thunderstorm':
                return <Icon as={BsCloudLightning} color={'blue.500'} w={12} h={12}/>
            case 'Drizzle':
                return <Icon as={BsCloudDrizzle} color={'blue.500'} w={12} h={12}/>
            default:
                return <Icon as={BsCloud} color={'gray.500'} w={12} h={12}/>
        }
    }


    useEffect(() => {
        _setWeatherIcon(weather);
    }, [weather])

    return (
        <Box>
            {weather && _setWeatherIcon(weather)}
        </Box>
    )
}