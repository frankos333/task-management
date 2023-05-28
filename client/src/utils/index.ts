import moment from "moment";

export function formatDate(date: string, format: string) {
  return moment(date).format(format);
}
