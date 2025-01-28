const SET_LOCATIONS = 'directory/setLocations';
const SET_CONNECTORS = 'directory/setConnectors';
const SET_CONNECTOR = 'directory/setConnector';
const SET_EECBG_ACTIVITIES = 'directory/setEECBGActivities';

const setLocations = (locations) => ({
  type: SET_LOCATIONS,
  payload: locations
});

const setConnectors = (connectors) => ({
  type: SET_CONNECTORS,
  payload: connectors
});

const setConnector = (connector) => ({
    type: SET_CONNECTOR,
    payload: connector
  });

  const setEECBGActivities = (activities) => ({
    type: SET_EECBG_ACTIVITIES,
    payload: activities,
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

export const fetchConnectorById = (id) => async (dispatch) => {
    const response = await fetch(`/api/directory/connectors/${id}`);
    const connector = await response.json();
    dispatch(setConnector(connector));
  };

  export const fetchConnectorsByActivity = (activity) => async (dispatch) => {
    const response = await fetch(`/api/directory/connectors?activity=${activity}`);
    const connectors = await response.json();
    dispatch(setConnectors(connectors));
  };

  export const fetchEECBGActivities = () => async (dispatch) => {
    const response = await fetch('/api/directory/activities');  
    const activities = await response.json();
    dispatch(setEECBGActivities(activities));  
  };

const initialState = {
  locations: [],
  connectors: [],
  connector: null,
  eecbgActivities: []
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return { ...state, locations: action.payload };
    case SET_CONNECTORS:
      return { ...state, connectors: action.payload };
    case SET_CONNECTOR:
      return { ...state, connector: action.payload };
    case SET_EECBG_ACTIVITIES:
        return { ...state, eecbgActivities: action.payload };
    default:
      return state;
  }
};

export default directoryReducer;
