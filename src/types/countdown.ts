export type TimeUnit = 'days' | 'hours' | 'minutes' | 'seconds';

export interface TimeValue {
  readonly value: number;
  readonly label: TimeUnit;
  readonly displayLabel: string;
}

export interface CountdownState {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly isExpired: boolean;
  readonly totalMilliseconds: number;
}

export type CountdownConfig = {
  readonly targetDate: Date;
  readonly onExpire?: () => void;
  readonly locale?: string;
};

export type TimeUnitConfig = Record<TimeUnit, {
  readonly singular: string;
  readonly plural: string;
  readonly abbreviation: string;
}>;

export const TIME_UNIT_LABELS: TimeUnitConfig = {
  days: { singular: 'día', plural: 'días', abbreviation: 'd' },
  hours: { singular: 'hora', plural: 'horas', abbreviation: 'h' },
  minutes: { singular: 'minuto', plural: 'minutos', abbreviation: 'm' },
  seconds: { singular: 'segundo', plural: 'segundos', abbreviation: 's' },
} as const;

export const formatTimeUnit = (value: number, unit: TimeUnit): string => {
  const config = TIME_UNIT_LABELS[unit];
  return value === 1 ? config.singular : config.plural;
};

export const calculateCountdown = (targetDate: Date): CountdownState => {
  const now = new Date().getTime();
  const target = targetDate.getTime();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
      totalMilliseconds: 0,
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    isExpired: false,
    totalMilliseconds: difference,
  };
};
