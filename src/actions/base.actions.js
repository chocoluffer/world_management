// import Selectors from './../selectors';
import NPCs from './../mock-data/npcs';

const TYPES = {
  SET_METHOD: 'SET_METHOD',
};

// const retrievenpcs = () => {
//   // FETCH from API
//   // pass to sort method
//   // pass to action creator
// }

// pass in data from fetch
const sortNPCs = () => {
  
}

const setMethod = (method) => ({
  type: TYPES.SET_METHOD,
  method,
});

export default {
  TYPES,
  setMethod,
};