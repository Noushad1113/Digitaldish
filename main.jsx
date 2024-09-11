import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QRCodeComponent from './CodeComponent.jsx'
import feed from './feed.jsx'
import MenuAndPaymentOptions from './MenuAndPaymentOptions.jsx'
import OnlinePaymentSection from './OnlinePaymentSection.jsx'
import Track from './Track.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main/>
  </StrictMode>
);
