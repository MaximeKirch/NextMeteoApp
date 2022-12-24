import {Box, Text} from '@chakra-ui/react'

interface Props  {
    name: String;
    temperature: Number;
}

export default function CityCard(city:any) {

    const temperature = city.temperature
    const name = city.name
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="200px"
            h="200px"
            bg="gray.700"
            borderRadius="lg"
            m={5}
        >
            <Text>{name}</Text>
            <Text>{temperature}</Text>
        </Box>
    )
}