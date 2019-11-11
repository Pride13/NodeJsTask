module.exports = userObject => {
    const { email, password, firstName, lastName } = userObject;

    if ( !email || !password || !firstName || !lastName ) {
        throw new Error('User is not valid')
    }
};
