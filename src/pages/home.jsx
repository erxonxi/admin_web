// packages
import React from 'react';
import { Button, Container, Flex, Heading, Text } from '@chakra-ui/react';

const Home = () => {

    const submitReloadProfileWeb = () => {
        console.log( 'click' );
    }

    return (
        <Flex h={'100%'} w={'100%'} >
            <Container maxWidth={'70%'} >
                <Heading mt={8} mb={4}>
                    Home
                </Heading>
                <Heading fontSize="xl" mb={4} color="teal.800">
                    rubenruizpedreira.es
                </Heading>
                <Button onClick={submitReloadProfileWeb} colorScheme="teal">
                    ACTUALIZAR WEB
                </Button>
            </Container>
        </Flex>
    )
}
export default Home
