console.log("Start");

setTimeout(() => {
  console.log("Timeout Done");
}, 0);

console.log("End");

/* 

📘 L — Learn:
==============
🔹 `setTimeout` runs via **Web API**, not JS engine
🔹 After timer ends, callback goes to **callback queue**
🔹 Event loop pushes it to **Call Stack** when stack is empty

🛠️ A — Apply:
==============
1. "Start" goes to stack → printed
2. `setTimeout` is offloaded to Web API
3. "End" goes to stack → printed
4. Callback from setTimeout enters queue
5. Event Loop pushes callback → printed after stack is empty

👀 S — See:
=============
Output:
Start  
End  
Timeout Done

🧠 O — Observe:
================
✅ Timer 0ms doesn't mean immediate  
✅ Callback waits for stack to empty

*/
