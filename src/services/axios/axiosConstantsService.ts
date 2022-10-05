export const axiosConstantsService = (function () {
  const STATUS_ENUMS = {
    UNAUTHORIZED: 401,
    TOKEN_EXPIRED: 403,
    SUCCESS: 200,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
  };

  return {
    STATUS_ENUMS,
  };
})();
