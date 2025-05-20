// src/pages/_app.tsx
import { Provider } from 'react-redux';
import { store } from '../redux/store/index';
import '../styles/globals.css';

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  // Check if the page defines a getLayout function; otherwise, render the Component directly
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}