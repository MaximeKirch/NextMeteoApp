import {Box, Text} from '@chakra-ui/react'

export default function Name(props:any) {
    const name = props.name;
    const country = props.country;

    return (
        <Box>
            <Text textAlign={'center'} mt={2} mb={2}>{name}, {country}</Text>
        </Box>
    )
}