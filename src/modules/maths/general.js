const Blend = (a, b, factor) => {
  return (b - a) * factor + a;
};

const MinAngleBetween = function(a1, a2) {
  return Math.atan2(Math.sin(a2 - a1), Math.cos(a2 - a1))
}

const Rand = (n) => {
  return Math.random() * n - (n / 2);
};

const TwoPI = Math.PI * 2;

export { Blend, MinAngleBetween, Rand, TwoPI };
