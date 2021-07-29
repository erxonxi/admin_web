export const loginAdmin = ( username, password ) => {
    fetch("http://localhost:8080/api/auth/singin", {
        "method": "POST",
        "headers": {
        "Content-Type": "application/json"
    }, "body": JSON.stringify({username,password})
    }).then(response => {
        console.log(response);
    }).catch(err => {
      console.error(err);
    });
}