import { render } from 'react-dom'
import App from './App.js';
import { ThemeProvider } from './contexts/theme.js';

import './index.css'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
