export const logout = (res) => {
    res.clearCookie('jwt');
    return 'Logged out';
};