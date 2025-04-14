/* 

                         🌐 Everything in JavaScript happens inside an **Execution Context**
                         -------------------------------------------------------------------
                Think of it like a big box 📦 that contains two main components:

                1️⃣ **Memory Component** (Variable Environment):
                    - Stores variables and function declarations as key-value pairs.
                    - Example: a = 10, fn = { ... }

                2️⃣ **Code Component** (Thread of Execution):
                    - Where code is executed one line at a time.
                    - JavaScript is a **synchronous**, **single-threaded** language,
                      meaning it can execute only one task at a time in a specific order.

                🔁 Together, these make up the execution context for any running JS code.


                    -----------------------------------
                    💡 Let's understand it with an example:
                    -----------------------------------

*/

var n = 2; 
// 🔹 Memory Phase: 'n' is allocated memory and initialized with 'undefined'.
// 🔸 Execution Phase: 'n' is now assigned the value 2.

function square(num) {
  // 🔹 Memory Phase: The entire function definition is stored as-is.
  // 🔸 Execution Phase: Nothing happens here until the function is invoked.

  var ans = num * num; // 'ans' is declared and calculated during execution.
  return ans;           // Returns the computed square.
}

var square2 = square(3); 
// 🧠 Memory Phase: 'square2' is declared and initialized as undefined.
// ⚙️ Execution Phase:
//  - Function `square(3)` is invoked.
//  - A new **function execution context** is created.
//     - Memory Phase: 
//         num: undefined
//         ans: undefined
//     - Execution Phase:
//         num = 3 (argument passed)
//         ans = 3 * 3 = 9
//         return 9 → assigned to `square2`

var square3 = square(6); 
// 💡 Same steps happen again:
//     - New execution context for `square(6)`
//     - num = 6, ans = 36
//     - return 36 → assigned to `square3` 


/* 

                          🧠 Call Stack in JavaScript
                          ----------------------------
      The **Call Stack** is like a stack of plates 🍽️ (Last In, First Out - LIFO).
      It's used to keep track of function calls (execution contexts).

      📌 Here's how it works:

      1️⃣ The **Global Execution Context** is pushed first when the program starts.
          - It's always at the bottom of the stack.

      2️⃣ When a function is **invoked**, a new execution context is **created** for it.
          - This new context is **pushed** on top of the stack.

      3️⃣ When the function finishes executing:
          - Its context is **popped off** the stack.
          - Control is returned to the context below (often the global context).

      🔁 This push/pop cycle continues for every function call.

      🧱 Example Stack Flow:
      -----------------------------------------------------
      | square(3) Execution Context                       | ← top (currently running)
      | Global Execution Context                          | ← bottom (main program)
      -----------------------------------------------------

      After square(3) completes:
      -----------------------------------------------------
      | Global Execution Context                          | ← back in control
      -----------------------------------------------------

      ✅ The call stack maintains the **order of execution contexts**.
      🧾 Also known as: 
         - Program Stack
         - Control Stack
         - Execution Context Stack
         - Runtime Stack
         - Machine Stack

*/
