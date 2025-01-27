const SET_LOCATIONS = 'directory/setLocations';
const SET_CONNECTORS = 'directory/setConnectors';

const setLocations = (locations) => ({
  type: SET_LOCATIONS,
  payload: locations
});

const setConnectors = (connectors) => ({
  type: SET_CONNECTORS,
  payload: connectors
});

export const fetchLocations = () => async (dispatch) => {
  const response = await fetch('/api/directory/locations');
  const locations = await response.json();
  dispatch(setLocations(locations));
};

export const fetchConnectorsByLocation = (location) => async (dispatch) => {
  const response = await fetch(`/api/directory/connectors?location=${location}`);
  const connectors = await response.json();
  dispatch(setConnectors(connectors));
};

const initialState = {
  locations: [],
  connectors: [],
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return { ...state, locations: action.payload };
    case SET_CONNECTORS:
      return { ...state, connectors: action.payload };
    default:
      return state;
  }
};

export default directoryReducer;
