Uber price Calculator


class UberPriceCalculator {
  constructor(distanceInKm, timeInMinutes) {
    this.distanceInKm = distanceInKm;
    this.timeInMinutes = timeInMinutes;
    this.baseFare = 5; // in Rs
    this.costPerKm = 1.5; // in Rs
    this.costPerMinute = 0.25; // in Rs
  }

  calculatePrice() {
    const distanceCost = this.distanceInKm * this.costPerKm;
    const timeCost = this.timeInMinutes * this.costPerMinute;
    const totalCost = this.baseFare + distanceCost + timeCost;
    return `Rs${totalCost.toFixed(2)}`;
  }
}

// Example usage
const distance = 10; // in km
const time = 20; // in minutes
const ride = new UberPriceCalculator(distance, time);
console.log(`The estimated cost of the ride is ${ride.calculatePrice()}.`);

// The Estimated cost of the ride is Rs25.00
