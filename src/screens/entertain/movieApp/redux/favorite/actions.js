export const FavoriteAdd = (movie) => {
  return {
    type: 'FAVORITE_ADD',
    payload: movie,
  };
};

export const FavoriteDeleted = (movie) => {
  return {
    type: 'FAVORITE_DELETE',
    payload: movie,
  };
};
