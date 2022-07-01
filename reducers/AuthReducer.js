export default (state, action) => {
    switch(action.type) {
        case 'AUTHENTICATED':
            return {
                ...state,
                authenticated: true,
                token: action.payload.token,
                user: action.payload.user
            }
        case 'UNAUTHENTICATED':
            return {
                ...state,
                authenticated: false,
                token: "",
                user: {}
            }
        case 'AUTH_ERROR':
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state;
    }
}