import { Box, Text } from "@chakra-ui/react";

type ErrorProps = {
    error: string
}

export default function ErrorModal(props:ErrorProps) {
    return (
        <Box w={'100%'} h={'100%'} mt={2}>
            <Text textAlign='center'> {props.error}</Text>
        </Box>
    )
}