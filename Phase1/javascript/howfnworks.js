/*

📌 CODE:
========

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

----------------------------------

📘 L — Learn:
==============
🔹 Hoisting: During the memory creation phase, JS moves:
   - `var x` → hoisted with value `undefined` initially.
   - `a` and `b` → hoisted with their entire function definitions.

🔹 Global Execution Context (GEC) is created:
   - Memory phase: x → undefined, a → function, b → function.
   - Code phase: x → 1, a() runs, b() runs, console.log(x).

🔹 Function Execution Contexts (FECs):
   - Each function call (`a()`, `b()`) creates its **own** execution context with its own **local scope**.

🛠️ A — Apply:
===============

1️⃣ Memory Creation Phase:
--------------------------
x  → undefined  
a  → [Function: a]  
b  → [Function: b]  

2️⃣ Code Execution Phase:
--------------------------
x = 1  
a() → creates FEC_a  
  - var x = 10
  - console.log(x) → prints 10  
b() → creates FEC_b  
  - var x = 100
  - console.log(x) → prints 100  
console.log(x) → prints 1 (global x)

👀 S — See:
============

🧠 Call Stack:
--------------
1. GEC created → pushed on stack  
2. a() called → FEC_a pushed  
3. FEC_a pops after execution  
4. b() called → FEC_b pushed  
5. FEC_b pops after execution  
6. GEC resumes → prints global x (1)

🧠 Output:
----------
10  
100  
1

🧠 Why?
--------
Each function has its own local variable `x` (due to `var x = ...`), so the global `x` is not affected.

🧠 O — Observe:
=================

- ✅ Function declarations are fully hoisted.
- ✅ `var` is hoisted and initialized with `undefined`, but still gets shadowed in each function’s local scope.
- ❗ Even though all functions use `x`, they don’t interfere with each other because of **function scope**.
- 📌 This is a classic **example of scope + hoisting** + **execution context** working together.

*/
