import type { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';

import generateCalendar from './generateCalendar';
import type { CalendarProps } from './generateCalendar';

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);

export type CalendarType = typeof Calendar & {
  generateCalendar: typeof generateCalendar;
};

(Calendar as CalendarType).generateCalendar = generateCalendar;

export type { CalendarProps };
export default Calendar as CalendarType;
