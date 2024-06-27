import { formatDistanceToNow } from "date-fns";

export const messageDate = (date) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    includeSeconds: true,
  });
};
