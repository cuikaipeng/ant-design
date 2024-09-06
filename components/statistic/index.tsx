import Countdown from './Countdown';
import type { CountdownProps } from './Countdown';
import Statistic from './Statistic';
import type { StatisticProps } from './Statistic';

export type { CountdownProps, StatisticProps };

interface CompoundedComponent {
  Countdown: typeof Countdown;
}

export type CompoundedStatistic = typeof Statistic & CompoundedComponent;

(Statistic as CompoundedStatistic).Countdown = Countdown;

export default Statistic as CompoundedStatistic;
