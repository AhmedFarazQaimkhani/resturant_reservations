import { axiosConstantsService } from './axiosConstantsService';

// eslint-disable-next-line func-names
export const apiUtilService = (function () {
  const isResponseOk = (status: number) =>
    status === axiosConstantsService.STATUS_ENUMS.SUCCESS;

  const isErrorResponse = (status: number) =>
    status !== axiosConstantsService.STATUS_ENUMS.INTERNAL_SERVER_ERROR;

  return {
    isResponseOk,
    isErrorResponse,
  };
})();
