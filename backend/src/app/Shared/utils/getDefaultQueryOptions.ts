export const getDefaultQueryOptions = (extraOptions = {}) => {
  return {
    attributes: { exclude: ["createdAt", "updatedAt"] },
    ...extraOptions,
  };
};
