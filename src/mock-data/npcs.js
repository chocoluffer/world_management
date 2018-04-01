// API will eventually pass these as numeric values
const city_names = {
   AMERE: 0,
   DAEOPOLIS: 1,
};

const races = {
  HUMAN: 0,
  ELF: 1,
};

const industry = {
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
    public: true,
  },
  {
    name: 'Faelynn',
    industry: industry.GOVERNMENT,
    occupation: 'city official',
    race: races.ELF,
    city: city_names.AMERE,
  }
];

// there are ofc npc generating sites, but perhaps having availability of seeing tailored ones is appealing --> QA tho?
// "star" NPCS => a dashboard that shows favorite NPCs
// we have filters, and user can provide their own filters too lol
const dbSettings = [
  showPublicNpcs: true,
]

export default npcs;