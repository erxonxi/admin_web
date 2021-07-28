// packages
import { Input, Button, Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// libs
import { loginAdmin } from '../lib/auth';

const Login = () => {

    let history = useHistory();

   const [username, setUsername] = useState('admin');
   const [password, setPassword] = useState('test');

    const submitLogin = () => {
        const ret = loginAdmin( username, password );
        if ( ret == true ) {
            history.push('/admin');
        }
    }

    const handleInput = ( e ) => {
        const value = e.target.value;
        const name = e.target.name;
        
        if ( name == 'username' ) {
            setUsername(value);
        }

        if ( name == 'password' ) {
            setPassword(value);
        }

    }

    return (
        <Flex direction="column" background="gray.100" p={12} rounded={6} >
            <Heading mb={6}>Log in</Heading>
            <Input placeholder="hansolo@rubenruizpedreira.es" variant="filled" mb={6} type="email" onChange={handleInput} name="username" />
            <Input placeholder="*******" variant="filled" mb={6} type="password" name="password" onChange={handleInput} />
            <Button colorScheme="teal" onClick={ submitLogin } >Entrar</Button>
        </Flex>
    )
}

export default Login
