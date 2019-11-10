module.exports = userObject => {
    const { id, email, password, firstName, lastName} = userObject;

    if ( !id || !email || !password || !firstName || !lastName ) {
        throw new Error('User is not valid')
    }
};
