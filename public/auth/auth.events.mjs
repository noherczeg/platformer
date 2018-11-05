export const userLoggedIn = 'p-user-logged-id';
export const userLoggedOut = 'p-user-logged-out';

export const userLoggedInEvent = (username) => {
  const eventData = {
    bubbles: true,
    detail: { username },
  };
  return new CustomEvent(userLoggedIn, eventData);
};

export const userLoggedOutEvent = () => {
  const eventData = {
    bubbles: true,
  };
  return new CustomEvent(userLoggedOut, eventData);
};
