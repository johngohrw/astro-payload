import * as migration_20260509_075220 from './20260509_075220';

export const migrations = [
  {
    up: migration_20260509_075220.up,
    down: migration_20260509_075220.down,
    name: '20260509_075220'
  },
];
