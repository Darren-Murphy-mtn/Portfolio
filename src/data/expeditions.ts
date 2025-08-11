export type Expedition = {
  id: string;
  label: string;
  region: string;
  elevation?: string;
  date?: string;
  summary: string;
  images: string[];
  links?: { tripReport?: string; gpx?: string; photos?: string };
};

export const expeditions: Expedition[] = [
  {
    id: 'everest',
    label: 'Mount Everest',
    region: 'Himalayas',
    elevation: '8848m',
    date: 'May 2022',
    summary: 'Summited the highest peak on Earth via the South Col route.',
    images: ['everest-1.jpg', 'everest-2.jpg'],
    links: { tripReport: 'https://example.com/everest-report' }
  },
  {
    id: 'denali',
    label: 'Denali',
    region: 'Alaska Range',
    elevation: '6190m',
    date: 'June 2021',
    summary: 'Expedition to the highest peak in North America.',
    images: ['denali-1.jpg'],
    links: { tripReport: 'https://example.com/denali-report', gpx: 'denali.gpx' }
  },
  {
    id: 'mont-blanc',
    label: 'Mont Blanc',
    region: 'Alps',
    elevation: '4807m',
    date: 'Sept 2020',
    summary: 'Alpine climb with stunning views across France, Italy, and Switzerland.',
    images: ['montblanc-1.jpg', 'montblanc-2.jpg'],
    links: { photos: 'https://photos.example.com/montblanc' }
  },
  {
    id: 'kilimanjaro',
    label: 'Kilimanjaro',
    region: 'Tanzania',
    elevation: '5895m',
    date: 'Jan 2019',
    summary: 'Trekking to the Roof of Africa via the Machame route.',
    images: ['kili-1.jpg'],
    links: { tripReport: 'https://example.com/kili-report' }
  }
];