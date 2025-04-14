/*

🪄 HOISTING in JavaScript — LASO Breakdown
==========================================

📘 L — Learn:
--------------
Hoisting is JavaScript's default behavior of **moving declarations** to the **top of their scope**
during the **Memory Creation Phase** of the Execution Context.

🔸 `var` → hoisted and initialized as `undefined`.
🔸 `function` declarations → hoisted with the entire function body.
🔸 `let` and `const` → hoisted but **not initialized**. They stay in a **temporal dead zone (TDZ)** until the line of declaration.

📌 Remember: Only **declarations** are hoisted, **not initializations**.

🛠️ A — Apply:
--------------
Let’s see hoisting in action with variables and functions.

*/

console.log(a);       // 🔸 Output: undefined (due to var hoisting)
var a = 10;

console.log(b);       // 🔹 ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(add(2, 3)); // ✅ Output: 5 (function is hoisted completely)
function add(x, y) {
  return x + y;
}

// ❌ This would throw TypeError: multiply is not a function
console.log(multiply(2, 3));
var multiply = function(x, y) {
  return x * y;
};

/*

👀 S — See:
-----------
Let’s break down what the JS engine does in the background.

🔹 Memory Phase:
----------------
a → undefined  
b → uninitialized (in TDZ)  
add → function(x, y) { return x + y }  
multiply → undefined  

🔸 Execution Phase:
-------------------
console.log(a) → prints undefined  
console.log(b) → ReferenceError (still in TDZ)  
console.log(add(2, 3)) → works  
console.log(multiply(2, 3)) → TypeError (trying to call undefined as a function)

🧠 O — Observe:
---------------
- ✅ `var` is hoisted and initialized with `undefined`, which can cause bugs if misused.
- ❌ `let` and `const` are safer because they’re not accessible before declaration (TDZ).
- ✅ Function declarations are fully hoisted.
- ❌ Function expressions assigned to `var` are hoisted as `undefined`, NOT as functions.

*/
