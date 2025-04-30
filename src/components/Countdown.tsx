import React, { useEffect, useMemo, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Countdown() {
  const targetDate = useMemo(() => new Date('2025-06-07T00:00:00-03:00'), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#9CB983] py-12 px-4 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-serif tracking-wide mb-8">
        CONTAGEM REGRESSIVA
      </h2>

      <div className="flex flex-nowrap overflow-x-auto justify-center gap-3 sm:gap-6 text-[#9CB983] font-bold text-3xl">
        {[
          { label: 'DIAS', value: timeLeft.days },
          { label: 'HORAS', value: timeLeft.hours },
          { label: 'MINUTOS', value: timeLeft.minutes },
          { label: 'SEGUNDOS', value: timeLeft.seconds },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md w-24 h-24 flex flex-col justify-center items-center shadow-md"
          >
            <span>{item.value.toString().padStart(2, '0')}</span>
            <span className="text-xs font-bold mt-1 text-[#9CB983]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
