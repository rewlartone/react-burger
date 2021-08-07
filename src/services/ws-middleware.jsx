
export const socketMiddleware = (wsUrl: string, wsMyUrl: string): Middleware<{}, RootState> => {
  return store => {
    let socket = null;
let socketmy = null;
    return next => action => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      if (type === 'WS_CONNECTION_START') {
        socket = new WebSocket(wsUrl);
      }
	  if (type === 'WS_CONNECTION_MY_START') {
        socketmy = new WebSocket(wsMyUrl+`?token=${localStorage.getItem('accessToken')}`);
      }
	  
      if (socket) {

        socket.onopen = event => {
          dispatch({ type: 'WS_CONNECTION_SUCCESS', payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: 'WS_CONNECTION_ERROR', payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
                    const parsedData = JSON.parse(data);
          dispatch({ type: 'WS_GET_ORDER', payload: parsedData });
        };
        socket.onclose = event => {
          dispatch({ type: 'WS_CONNECTION_CLOSED', payload: event });
        };
      }
	       if (socketmy) {

        socketmy.onopen = event => {
          dispatch({ type: 'WS_CONNECTION_MY_SUCCESS', payload: event });
        };

        socketmy.onerror = event => {
          dispatch({ type: 'WS_CONNECTION_MY_ERROR', payload: event });
        };

        socketmy.onmessage = event => {
          const { data } = event;
                    const parsedData = JSON.parse(data);
          dispatch({ type: 'WS_GET_MY_ORDER', payload: parsedData });
        };
        socketmy.onclose = event => {
          dispatch({ type: 'WS_CONNECTION_MY_CLOSED', payload: event });
        };
      }

      next(action);
    };
  };
}; 