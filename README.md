# 🎵 INSANE Sound Visualizer

An interactive, web-based audiovisual experience that generates explosive colorful animations and unique sounds in response to user input. This project combines vector graphics with high-quality audio management.

---

## 🌟 Features

* **Interactive Explosions**: Clicking the screen or pressing keys triggers a burst of particle circles with random sizes and colors.
* **Alphabet Sound Grid**: Each letter key (A-Z) is mapped to a specific sound effect like bubbles, clay, or confetti.
* **Dynamic Animation**: Particles feature a "glow effect," change colors over time (hue cycling), and gradually fade out.
* **Visual Feedback**: Includes a UI overlay and an alphabet grid to guide users to "FEEL THE BEAT".

---

## 📂 Project Structure

| File | Description |
| :--- | :--- |
| **index.html** | Sets up the canvas, UI overlay, and loads Paper.js and Howler.js libraries. |
| **script.js** | Core logic for the particle engine, event listeners, and sound mapping. |
| **style.css** | Handles the dark radial-gradient background and UI positioning. |
| **sounds/** | A folder containing `.mp3` files for each keypress (required for audio). |

---

## 🛠️ Technologies Used

* **Paper.js**: A vector graphics scripting framework for animation.
* **Howler.js**: A JavaScript audio library for lag-free sound playback.
* **HTML5 Canvas**: The drawing surface for all visual animations.
* **CSS3**: Used for the immersive dark atmosphere and typography.

---

## ⚙️ Setup & Usage

1. **Clone the Files**: Ensure `index.html`, `script.js`, and `style.css` are in the same directory.
2. **Add Sounds**: Create a folder named `sounds/` and add the required `.mp3` files (e.g., `bubbles.mp3`, `clay.mp3`).
3. **Launch**: Open `index.html` in any modern web browser.
4. **Interact**: 
   * **Click**: Creates an explosion at the mouse cursor.
   * **Press Keys**: Triggers random explosions with unique sounds.

---

## 🎨 Key-to-Sound Mapping (Examples)

| Key | Sound File | Color Hex |
| :--- | :--- | :--- |
| **A** | `sounds/bubbles.mp3` | #1abc9c |
| **S** | `sounds/clay.mp3` | #3498db |
| **D** | `sounds/confetti.mp3` | #9b59b6 |
| **V** | `sounds/ufo.mp3` | #2980b9 |
