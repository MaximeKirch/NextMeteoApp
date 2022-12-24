    import {Box, Text, Icon} from '@chakra-ui/react'
import WeatherIcon from '../../utils/WeatherIcon';
    
    export default function Weather(props:any) {
        const weather = props.weather;
        return (
            <Box mt={5}>
                <Box display='flex' flexDir='column' alignItems='center'>
                    <WeatherIcon weather={weather} />
                    <Text textAlign='center'>{weather.main}</Text>
                </Box>
            </Box>
        )
    }