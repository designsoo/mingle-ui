import dayjs from 'dayjs';

export const getDateDiff = (date: string) => {
  const nowDate = dayjs();
  const createDate = nowDate.format(date);
  const diffDate = nowDate.diff(createDate);
  const formatToDay = ~~(diffDate / (1000 * 60 * 60 * 24));

  return formatToDay;
};
