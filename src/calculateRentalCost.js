/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRentalCost = 40;
  let discount = 0;
  
  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  return days * dailyRentalCost - discount;
}

module.exports = calculateRentalCost;
