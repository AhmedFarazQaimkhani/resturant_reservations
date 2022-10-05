import moment from 'moment';

export const formatTime = (date: string | Date) => {
  if (!date) return '-';
  return moment(date).utc().format('h:mm a');
};
