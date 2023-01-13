export const paginate = (users, currentPage, count) => {
  return [...users].splice((currentPage - 1) * count, count);
};
