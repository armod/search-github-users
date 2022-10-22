import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GithubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-6x1vjgpryfcbbxgx.us.auth0.com
// yjykSOfJmt4nRdg9XtLuRDieJ2wgJrrK

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-6x1vjgpryfcbbxgx.us.auth0.com' clientId='yjykSOfJmt4nRdg9XtLuRDieJ2wgJrrK' redirectUri={window.location.origin} cacheLocation='localstorage'>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
)
