import {
  userLoggedIn,
  userLoggedInEvent,
  userLoggedOut,
  userLoggedOutEvent,
} from './auth.events.mjs';

const LOGIN_TOKEN = 'user-token';

export const isLoggedIn = () => {
  return !!window.localStorage.getItem(LOGIN_TOKEN);
}

export const login = ({username}) => {
  window.localStorage.setItem(LOGIN_TOKEN, username);
  window.dispatchEvent(userLoggedInEvent(username));
};

export const logout = () => {
  window.localStorage.removeItem(LOGIN_TOKEN);
  window.dispatchEvent(userLoggedOutEvent());
};

window.addEventListener(userLoggedIn, () => {
  // Listening to "storage" on window won't trigger, by design since we are on the same page...............
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Responding_to_storage_changes_with_the_StorageEvent
  window.location.href = '#home';
});

window.addEventListener(userLoggedOut, () => {
  // Listening to "storage" on window won't trigger, by design since we are on the same page...............
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Responding_to_storage_changes_with_the_StorageEvent
  window.location.href = '#login';
});
