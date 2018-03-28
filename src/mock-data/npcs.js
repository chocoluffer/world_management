// API will eventually pass these as numeric values
city_names = {
   AMERE: 0,
   DAEOPOLIS: 1,
};

races = {
  HUMAN: 0,
  ELF: 1,
};

industry = {
  FOOD: 0,
  GOVERNMENT: 1,
};

// sorted by dateTime created ?
const npcs = [
  {
    name: 'Roland',
    industry: industry.FOOD,
    occupation: 'alcohol infused pastries bakery owner',
    race: races.HUMAN,
    city: city_names.AMERE,
  },
  {
    name: 'Faelynn',
    industry: industry.GOVERNMENT,
    occupation: 'city official',
    race: races.ELF,
    city: city_names.AMERE,
  }
];