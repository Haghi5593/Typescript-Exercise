export{};

//  Variable Declarations

let productName : string = "Electronic Cursor";
let price : number = 1000;
let discountAvailable : boolean = true;

// ❌ Wrong assignments (uncomment to see errors)

// productName = 1000;
// price = true;
// discountAvailable = "Electronic Cursor"



// Convert this JS function to TypeScript and add types:

// ```jsx
// function getDiscount(price, discount) {
//   return price - price * discount;
// }

// ```

// 🔧 Fixing this Broken JavaScript Shown above


function getDiscount( price : number, discount: number) : number {
    return price - price * discount;
}

// ⚠️ Safe Alternative to 'any'
// function printLength(x: any) {
//     console.log(x.length);
//   }

// Using Unknown

function printLength(x: unknown) {
    if (typeof x === "string") {
      console.log(x.length);
    }
  }