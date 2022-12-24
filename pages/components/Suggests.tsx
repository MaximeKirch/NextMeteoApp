import { Box, Text } from "@chakra-ui/react";
import CityCard from "./CityCard";

export default function SuggestedCities() {

    const suggestedCities:{id: string; name : string; temperature:number;}[] = [
        {id: '0', name : 'Paris', temperature: 20},
        {id: '1', name : 'Lyon', temperature: 20},
        {id: '2', name : 'Marseille', temperature: 20},
    ]

    return (
        <Box>
        <Text align='center' fontSize="xl" fontWeight="bold" mb={2}>
            Suggested Cities
        </Text>
        <Box display="flex" flexWrap="wrap" alignContent={'center'}>
            {suggestedCities && suggestedCities.map((city) => (
                <CityCard
                    key={city.id}
                    city={city}
                />
            ))}
        </Box>
        </Box>
    );
}