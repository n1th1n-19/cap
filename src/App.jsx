import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { Outlet } from 'react-router-dom';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import CampaignIcon from '@mui/icons-material/Campaign';
import TextoSpeach from './pages/TextoSpeech.jsx'

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'to-speech',
    title: 'Text to Speech',
    icon: <CampaignIcon />,
  },
  {
    segment: 'qr-code',
    title: 'QR Code',
    icon: <QrCodeIcon />,
  },
];

const BRANDING = {
  title: "MetaMorph",
  logo: '',
  homeUrl: '',
};

export default function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}
