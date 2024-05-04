import App from "./App";

const routes = [
  {
    path: '/',
    element: <App />
  },

  {
    path: '/:page',
    element: <App />
  },

  {
    path: '/:page/:shop',
    element: <App />
  },
]

export default routes
