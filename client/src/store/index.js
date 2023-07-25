import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#566374   ',
  isLogoTexture: true,
  isFullTexture: true,
  logoDecal: './logo-no-background.png',
  fullDecal: './3d-geometric-white.jpg',
});

export default state;