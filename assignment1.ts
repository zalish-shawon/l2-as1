function formatString(input: string, toUpper?: boolean): string {
    if(toUpper === true || toUpper === undefined) {
        return input.toUpperCase();
    } else if (toUpper === false) {
        return input.toLowerCase();
    }
    return input;
}





function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
   const ratingProperty = items.filter(item => item.rating >= 4);
   return ratingProperty;
}





function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((accumulator: T[], currentArray: T[]) => {
        return accumulator.concat(currentArray);
    }, []);
}





class Vehicle {

  constructor(private make: string, private year: number) {
    this.make = make;
    this.year = year;
  }

   getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`
  }

}

class Car extends Vehicle {
  
constructor(make: string, year: number, private model: string) {

  super(make, year)
  this.model = model;
  
}

getModel(): string {
        return `Model: ${this.model}`;
    }

  
}





function processValue(value: string | number): number {
  if (typeof(value) === "string") {
    return value.length
  } else {
    return value * 2
  }
}






interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null; 
    }

    return products.reduce((maxProduct, currentProduct) =>
        currentProduct.price > maxProduct.price ? currentProduct : maxProduct
    );
}




enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday"
    }
}





async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}
