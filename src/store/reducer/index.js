export const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    code: '' || false,
    user: '' || false,
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    proxy_url: process.env.REACT_APP_PROXY_URL
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
        localStorage.setItem("code", JSON.stringify(action.payload.code))
        localStorage.setItem("user", JSON.stringify(action.payload.user))
        localStorage.setItem("access_token", JSON.stringify(action.payload.access_token))
        return {
          ...state,
          isLoggedIn: action.payload.isLoggedIn,
          code: action.payload.code,
          user: action.payload.user
        };
      }
      case "LOGOUT": {
        localStorage.clear()
        return {
          ...state,
          isLoggedIn: false,
          user: null
        };
      }
      default:
        return state;
    }
  };