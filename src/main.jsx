import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux'
import store from './Store/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <Auth0Provider
  //   domain="dev-a2cqokgr380o5esg.us.auth0.com"
  //   clientId="ZiApeSbhX2OrgN7QN5bleYMozSWbWfKt"
  //   redirectUri={window.location.origin}
  // >
    <Provider store={store}>
    <App />
    </Provider>
  // </Auth0Provider>
)
