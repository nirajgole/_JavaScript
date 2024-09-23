function main() {
  const numberVolunteers = 14;
  // Your code here.
  const requiredVolunteers = parseInt(numberVolunteers % 5);
  return requiredVolunteers === 0 ? 0 : 5 - requiredVolunteers;
}

console.log(main());
