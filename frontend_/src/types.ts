export type ZipCode = {
  "post code": string;
  country: string;
  "country abbreviation": string;
  places: Array<{
    "place name": string;
    longitude: string;
    state: string;
    "state abbreviation": string;
    latitude: string;
  }>;
};
