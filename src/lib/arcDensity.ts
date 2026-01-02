type RingType = "seconds" | "minutes" | "hours" | "days";

export function getArcCount(width: number, ring: RingType) {
  // Base density from screen width
  const base = Math.floor(width / 120);

  // Ring-specific multipliers
  const multipliers: Record<RingType, number> = {
    seconds: 1.2,  // densest
    minutes: 1.0,
    hours: 0.8,
    days: 0.6,     // sparsest
  };

  let count = Math.floor(base * multipliers[ring]);

  // Minimums based on readability & Figma size
  const MIN: Record<RingType, number> = {
    seconds: 13,
    minutes: 11,
    hours: 9,
    days: 7,
  };

  // Maximums (prevent clutter)
  const MAX: Record<RingType, number> = {
    seconds: 21,
    minutes: 19,
    hours: 15,
    days: 13,
  };

  count = Math.max(MIN[ring], Math.min(MAX[ring], count));

  // Force odd count
  if (count % 2 === 0) count -= 1;

  return count;
}
