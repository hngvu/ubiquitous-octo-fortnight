import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router'
import App from './App.jsx'
import { ProgressProvider } from '@bprogress/react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProgressProvider height='3px' color='#ffd700'>
        <App />
      </ProgressProvider>
    </BrowserRouter>
  </StrictMode>,
)
