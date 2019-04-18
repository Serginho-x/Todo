export const _signUp = async (form) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
    };
    const response = await fetch(`http://localhost:4000/api/users/register/`, requestOptions);
    if (response.status === 401) {  
       return  {error: 'User with current e-mail exist'}
    }
    const user = await handleResponse(response);
    return user;
}

export const _login = async (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    const response = await fetch(`http://localhost:4000/api/users/login/`, requestOptions);
    if (response.status === 401) {  
        return  {error: 'User doesn\'t exist or wrong password'}
     }
    const user = await handleResponse(response);
    if (user.token) {     
        localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
}

export const _logout = () => {   
    localStorage.removeItem('user');
}

const handleResponse = (response) => {    
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                _logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}