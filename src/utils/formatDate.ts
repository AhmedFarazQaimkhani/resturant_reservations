import moment from 'moment';

export const formatDate = (date: string | Date | null) => {
  if (!date) return '';
  return moment(date).utc().format('DD.MM.YYYY');
};
