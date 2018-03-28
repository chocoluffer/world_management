// import Selectors from './../selectors';

const TYPES = {
  SET_METHOD: 'SET_METHOD',
};

const setMethod = (method) => ({
  type: TYPES.SET_METHOD,
  method,
});

export default {
  TYPES,
  setMethod,
};