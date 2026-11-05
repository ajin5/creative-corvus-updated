import { useEffect, useState } from 'react';

export default function LiveClock({ className = '' }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const str = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      });
      setTime(`${str} IST`);
    };
    update();
    const id = setInterval(update, 1000 * 15);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className={`font-mono text-xs tabular-nums text-mist-500 ${className}`}>
      {time} · Chennai
    </span>
  );
}
