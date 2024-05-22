export type ZipCode = {
  'post code': string;
  'country abbreviation': string;
  country: string;
  places: Array<{
    'place name': string;
    longitude: string;
    state: string;
    'state abbreviation': string;
    latitude: string;
  }>;
};
