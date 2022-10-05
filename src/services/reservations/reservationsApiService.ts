// Axios Api Service
import { QueryParams } from '../../common/interfaces';
import { axiosApiService } from '../axios/axiosApiService';

export const reservationApiService = (() => {
  /**
   * @private_methods
   */

  /**
   * @returns Promise
   */

  const getReservations = async (): Promise<any> =>
    await axiosApiService.coreApi.get('/api/reservations');

  /**
   * @returns Promise
   */

  const getReservationsByQueryParam = async (
    queryParams: QueryParams
  ): Promise<any> =>
    await axiosApiService.coreApi.get(
      `/api/reservations?${
        queryParams?.status && `status=${queryParams.status}&`
      }${queryParams?.shift && `shift=${queryParams.shift}&`}${
        queryParams?.area && `area=${queryParams.area}`
      }${
        queryParams?.businessDate && `businessDate=${queryParams.businessDate}`
      }`
    );

  /**
   * NOTE: only declare methods you need to export from this service in this return object.
   */
  return {
    getReservations,
    getReservationsByQueryParam,
  };
})();
