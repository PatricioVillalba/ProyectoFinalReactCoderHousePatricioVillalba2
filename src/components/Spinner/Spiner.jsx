import * as React from 'react';
import { CircularProgress, styled } from '@mui/material';
import escudoCapi from "./escudoCapi.png";
import spiderman from "./spiderman.png";
import hulk from "./hulk.png";
import pantera from "./pantera.png";
import wolverine from "./wolverine.png";

const RotatingImage = styled('img')`
  animation: rotate 3s linear infinite;
  transform-origin: center;
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function CircularIndeterminate() {
  const images = [escudoCapi, spiderman, hulk, pantera, wolverine];
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <RotatingImage src={selectedImage} alt="Logo" style={{ width: '150px', height: '150px' }} />
    </div>
  );
}
