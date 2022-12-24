import { Box, Text } from "@chakra-ui/react";

export default function Temp(props:any) {
    const temp = props.temp;

    const _kelvinToCelsius = (kelvin:number) => {
        return Math.round(kelvin - 273.15);
    }

    return (
        <Box>
            <Text textAlign={'center'}>{_kelvinToCelsius(temp)} Degrees</Text>
        </Box>
    )
}