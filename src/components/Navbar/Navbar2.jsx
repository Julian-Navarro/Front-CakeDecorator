import { Box, Text } from "@chakra-ui/layout"
export default function Navbar() {
    return (
        <Box bg="green.400" minH="2rem"
        display="flex" justifyContent="space-between">
            <Text fontFamily="Roboto" 
            fontSize="2rem" fontWeight="bold">
              Navbar
            </Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <Text>5</Text>
        </Box>
    )
}