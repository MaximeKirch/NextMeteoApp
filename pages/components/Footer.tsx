import {Box, Text, Link } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box pos="fixed" bottom={0} w='100%' h='30px'>
            <Text align='center'>
                Made with ❤️ by <Link href='https://maxime-portfolio.vercel.app'>Maxime K</Link>
            </Text>
        </Box>
    )
}