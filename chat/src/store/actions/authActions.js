import "./swag.css";
export const loggedIn = (data) => {
  return dispatch => {
      dispatch({
          type: 'LOGGEDIN',
          payload: data
      })
  }
}

export const logout = () => {
  return dispatch => {
      dispatch({
          type: 'LOGGEDOUT',
          payload: null
      })
  }
}
// import * as AuthActions from './authActions';

// /* global $ */

// export const setupSocket = (token, userId) => {
//     return dispatch => {
//         const socket = new WebSocket('ws://localhost:8080');

//         socket.onopen = () => {
//             if(token) {
//                 // Add already logged in user
//                 socket.send(JSON.stringify({
//                     type: 'CONNECT_WITH_TOKEN',
//                     data: {
//                         token: token,
//                         userId: userId
//                     }
//                 }))
//                 dispatch({
//                     type: 'SETUP_SOCKET',
//                     payload: socket
//                 });
//             }
//             else {
//                 dispatch({
//                     type: 'SETUP_SOCKET',
//                     payload: socket
//                 });
//             }
//         }

//         socket.onmessage = (message) => {
//             let data = JSON.parse(message.data);

//             switch(data.type) {
//                 case 'LOGGEDIN':
//                     dispatch(AuthActions.loggedIn(data))
//                     break;
//                 case 'GOT_USERS':
//                     console.log(data);
//                     dispatch({
//                         type: 'GOT_USERS',
//                         payload: data.data.users
//                     });
//                     break;
//                 case 'ADD_THREAD':
//                     dispatch({
//                         type: 'ADD_THREAD',
//                         payload: data.data
//                     });
//                     break;
//                 case 'INITIAL_THREADS':
//                     dispatch({
//                         type: 'INITIAL_THREADS',
//                         payload: data.data
//                     });
//                     break;
//                 case 'GOT_MESSAGES':
//                     dispatch({
//                         type: 'ADD_MESSAGES_TO_THREAD',
//                         payload: {
//                             threadId: data.threadId,
//                             messages: data.messages
//                         }
//                     });
//                     break;
//                 case 'ADD_MESSAGE_TO_THREAD':
//                     dispatch({
//                         type: 'ADD_SINGLE_MESSAGE',
//                         payload: {
//                             threadId: data.threadId,
//                             message: data.message
//                         }
//                     });
//                     document.getElementById('main-view').scrollTop = document.getElementById('main-view').scrollHeight;
//                 default:
//                     // Do nothing
//             }
//         }
//     }
// }