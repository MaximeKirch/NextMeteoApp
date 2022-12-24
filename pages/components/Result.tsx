import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Temp from "./Card/Temp";
import Name from "./Card/Name";
import Weather from "./Card/Weather";

export default function Result(city:any) {
    return (
        <motion.div transition={{ease: "easeInOut", duration:3}}>
            <Box w={['xs','xl']} minH='150px' border='1px' borderColor='grey.400' borderRadius='25px' pt={5} pb={5}>
                {city.city && city.city.main.temp && city.city.weather[0] &&
                <>
                    <Name name={city.city.name} country={city.city.sys.country} />
                    <Temp temp={city.city.main.temp} />
                    <Weather weather={city.city.weather[0]} />
                </>
                }
            </Box>
        </motion.div>
    )
}