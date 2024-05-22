import { getZipCodeInfo } from '../src/services/zipCodeService';

describe('zipCodeService', () => {
  test('Debe retorna información sobre el ZipCode existente', async () => {
    const countryCode = 'MX'; 
    const zipCode = '60300'; 

    const result = await getZipCodeInfo(countryCode, zipCode);

    expect(result).toEqual({
      'post code': '60300',
      country: 'Mexico',
      'country abbreviation': 'MX',
      places: [
        {
          'place name': 'Los Reyes de Salgado Centro',
          longitude: '-102.1167',
          state: 'Michoacan De Ocampo',
          'state abbreviation': 'MIC',
          latitude: '19.3156',
        },
      ],
    });
  });
});
