export default (min: number = 1000000, max: number = 10000000): number => {
  return (Math.floor(Math.random() * (max - min + 1) + min)) + Date.now();
}