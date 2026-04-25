export {};
// 1) Typed Arrays (with wrong pushes)

// array of strings
let name: string[] = ["Ali", "Amina", "Omar"];

// ✅ correct
name.push("Hassan");

// ❌ wrong (will cause compile error)
// name.push(100); 
// Error: Argument of type 'number' is not assignable to parameter of type 'string'


// -------------------------------

// array of numbers
let grade: number[] = [90, 85, 70];

// ✅ correct
grade.push(100);

// ❌ wrong
// grade.push("A+");
// Error: Type 'string' is not assignable to type 'number'


// -------------------------------

// array of booleans
let status: boolean[] = [true, false, true];

// ✅ correct
status.push(false);

// ❌ wrong
// status.push(1);
// Error: Type 'number' is not assignable to type 'boolean'


// ================================
// 2) Fix products array (strings only)
// ================================

// ❌ original (bad)
// let products = ["Phone", "Laptop", 99];

// ✅ fixed version
let products: string[] = ["Phone", "Laptop"];

// valid
products.push("Tablet");

// ❌ invalid
// products.push(99);
// Error: Type 'number' is not assignable to type 'string'


// 3) Tuples (fixed structure)

// city (string), latitude (number), longitude (number)
let location: [string, number, number] = ["Mogadishu", 2.0469, 45.3182];

// ✅ correct access
console.log(location);
// ❌ wrong order example
// let wrongLocation: [string, number, number] = [2.0469, "Mogadishu", 45.3182];
// Error: Type 'number' is not assignable to type 'string' at position 0
// Error: Type 'string' is not assignable to type 'number' at position 1


// ❌ wrong types
// let badLocation: [string, number, number] = ["Mogadishu", "2.0469", 45.3182];
// Error: Type 'string' is not assignable to type 'number'