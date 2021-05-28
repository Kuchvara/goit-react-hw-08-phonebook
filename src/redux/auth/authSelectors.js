const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

const getLoading = state => state.auth.loading;

// eslint-disable-next-line
export default { getIsAuthenticated, getUserEmail, getLoading };