const apiUri = () => {
    if (process.env.API === 'development') {
        console.warn('Development Mode');
        return 'http://localhost:3099';
    }
    return 'https://reet-api.herokuapp.com';
}

const apiReducer = (state = apiUri(), action) => {
    return state;
}

export default apiReducer;