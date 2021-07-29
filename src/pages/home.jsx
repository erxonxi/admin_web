// packages
import React, { useEffect, useState } from 'react';
import { Button, Container, Flex, Heading, HStack, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Textarea, Badge, Text } from '@chakra-ui/react';

const Home = () => {

    const [scripts, setScripts] = useState([]);
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef();

    const listScripts = async () => {
        await fetch("http://localhost:8080/api/scripts", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": "{\"select\":{\"name\":true}}"
        })
        .then(async response => {
            const data = await response.json();
            setScripts(data);
        })
        .catch(err => {
            console.error(err);
        });
    }

    const executeScript = async ( script_name ) => {
        await fetch("http://localhost:8080/api/script/" + script_name + "/execute", {
            "method": "GET",
        })
        .then( async response => {
            const data = await response.text();
            setStatus({ value: response.status, color: 'green' })
            setContent( data );
        })
        .catch(err => {
            setStatus({ value: response.status, color: 'red' })
            setContent( err );
        });
    }

    const submitExecuteScript = async ( e ) => {
        const script_name = e.target.value;
        await executeScript( script_name );
        setIsOpen(true)
    }

    useEffect(async () => {
        await listScripts();
    }, [])

    return (
        <Flex h={'100%'} w={'100%'} >
            <Container maxWidth={'70%'} >

                <Heading mt={8} mb={4} color="teal.900">
                    🖥️ Servers
                </Heading>

                <Heading fontSize="3xl" mb={4} color="teal.800">
                    🧑‍💻 rubenruizpedreira.es
                </Heading>

                <Heading fontSize="xl" mb={4} color="teal.700">
                    📜 scripts
                </Heading>

                <HStack mb={4}>
                {
                    scripts.map(( value, index ) => {
                        return (
                            <Button key={ index } onClick={ submitExecuteScript } colorScheme="teal" value={ value.name }>
                                { value.name }
                            </Button>
                        )
                    })
                }
                </HStack>

                <Heading fontSize="xl" mb={4} color="teal.700" >
                    ✍🏻 Create Script
                </Heading>

                <Button colorScheme="orange" onClick={ submitExecuteScript }>
                    Crear Script
                </Button>

                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    size='xl'
                >
                    <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader mt={4} fontSize="xl" fontWeight="bold">
                            <HStack>
                                <Text fontSize="2xl" fontWeight="extrabold">
                                    status_code:
                                </Text>
                                <Badge fontSize="2xl" fontWeight="extrabold" borderRadius="md" px={2} py={1} colorScheme={ status.color } >
                                    { status.value }
                                </Badge>
                            </HStack>
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            <Text fontSize="2xl" fontWeight="extrabold">
                                response:
                            </Text>
                            <Textarea height="45vh" value={content} disabled>
                                { content }
                            </Textarea>
                        </AlertDialogBody>

                        <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="red" onClick={onClose} ml={3}>
                            Guardar
                        </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>

            </Container>
        </Flex>
    )
}
export default Home
