# 🎨 Task 2 — Random Color Generator (Normal + Gradient)

This project generates **random colors** using JavaScript.  
It supports both:
- ✔ Solid RGB Colors  
- ✔ Gradient Backgrounds  

The background updates dynamically, and the generated color code is displayed on the screen.

---

## 🧠 How It Works

1. When the button is clicked:
   - `Math.random()` decides whether to create a **normal color** or a **gradient**
2. The script generates random RGB values using:
   ```js
   Math.floor(Math.random() * 256)
