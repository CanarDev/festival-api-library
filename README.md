# Festival library

## Explaination
This project is a library to get data from the [Governmental Festival API](https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/)

## Installation

```bash
 npm i festival-api-library
```

or with yarn :

```bash
 yarn add festival-api-library
```

## Usage

To use this library, you need to import it in your project with the following command:

```js
import getFestivals from 'festival-api-library';
const parameters = [{key: 'rows', value: '20'}, {key: 'lang', value: 'FR'}]

const festivalsData = getFestivals.data(parameters);
// or
const festivalsNames = getFestivals.names(parameters)
// or
const festivalsWebsite = getFestivals.website(parameters)
// or
const festivalsCities = getFestivals.cities(parameters)
// or
const festivalsAveragedBegins = getFestivals.averagedBegins(parameters)
```

For the CountryCode, we use the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) standard for the country code.

## Linter and tests

To run the linter and the tests, you need to run the following command:

```bash
npm run build
```

```bash
npm test
```

## Contributing
This project was made by [Clement Duvivier](https://github.com/ClemOurs) and [Vincent Michel](https://github.com/CanarDev) in peer-programming.

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.