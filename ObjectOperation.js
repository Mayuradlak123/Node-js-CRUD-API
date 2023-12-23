// Car object constructor
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  // Function to merge two car objects
  function mergeCars(car1, car2) {
    // Create a new object to store the merged properties
    const mergedCar = {};
  
    // Iterate through the properties of the first car and add them to the merged object
    for (let prop in car1) {
      if (car1.hasOwnProperty(prop)) {
        mergedCar[prop] = car1[prop];
      }
    }
  
    // Iterate through the properties of the second car and add them to the merged object
    for (let prop in car2) {
      if (car2.hasOwnProperty(prop)) {
        mergedCar[prop] = car2[prop];
      }
    }
  
    return mergedCar;
  }
  
  // Example usage:
  const car1 = new Car("Toyota", "Camry", 2022);
  const car2 = new Car("Honda", "Accord", 2021);
  
  const mergedCar = mergeCars(car1, car2);
  console.log(mergedCar);
  