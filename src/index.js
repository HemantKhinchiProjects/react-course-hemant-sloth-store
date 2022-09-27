import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ProductsProvider } from './context/products_context';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </StrictMode>
);
