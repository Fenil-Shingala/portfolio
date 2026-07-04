const unauthenticatedUser = async () => {
  const error = new Error("No authenticated Base44 user is available in standalone mode.");
  error.status = 401;
  throw error;
};

export const client = {
  auth: {
    me: unauthenticatedUser,
    logout: () => {},
    redirectToLogin: () => {},
  },
};
