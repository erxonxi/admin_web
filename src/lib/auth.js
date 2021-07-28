export const loginAdmin = ( { username, password } ) => {
    if ( username == 'admin' && password == 'test') return true;
    return false;
}