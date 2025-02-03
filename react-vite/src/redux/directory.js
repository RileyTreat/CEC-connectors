const SET_LOCATIONS = 'directory/setLocations';
const SET_CONNECTORS = 'directory/setConnectors';
const SET_CONNECTOR = 'directory/setConnector';
const SET_EECBG_ACTIVITIES = 'directory/setEECBGActivities';
const SET_USER_CONNECTOR = 'directory/setUserConnector';

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

  const setUserConnector = (connector) => ({
    type: SET_USER_CONNECTOR,
    payload: connector,
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

  // Action to fetch the user's specific connector data
  export const fetchUserConnector = (userId) => async (dispatch, getState) => {
    const response = await fetch(`/api/directory/connectors/${userId}`);  // Fetch the user's connector
    const userConnector = await response.json();
    
    if (response.ok) {
        dispatch(setUserConnector(userConnector));  // Set the data into the Redux store
    } else {
        console.error('Failed to fetch user connector');
    }
  };

  export const updateConnector = (id, updatedData) => async (dispatch) => {
    try {
      // Make the PUT request to update the connector form
      const response = await fetch(`/api/form/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      // If the request was successful, dispatch the updated connector data to Redux
      if (response.ok) {
        const updatedConnector = await response.json();
        dispatch(setConnector(updatedConnector));  // You already have the setConnector action defined
        return updatedConnector;  // Return the updated connector if you need it for further use
      } else {
        const errorData = await response.json();
        console.error('Error updating connector:', errorData);
        throw new Error(errorData.error || 'Failed to update connector');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
    case SET_USER_CONNECTOR:
      return { ...state, userConnector: action.payload };
    default:
      return state;
  }
};

export default directoryReducer;
