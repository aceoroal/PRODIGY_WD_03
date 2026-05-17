# ♟️ Tic Tac Toe Game

A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Play against the computer or another player in this interactive web-based implementation.

## 🎮 Features

- **Interactive Gameplay** - Click to place your marks (X or O)
- **Player vs Computer** - Challenge the AI opponent
- **Real-time Game Status** - See whose turn it is and who wins
- **Responsive Design** - Works on desktop and mobile devices
- **Game Reset** - Start a new game anytime with the reset button
- **Win Detection** - Automatic detection of wins and draws

## 🛠️ Tech Stack

- **HTML** (15.6%) - Game structure and layout
- **CSS** (43.2%) - Styling and visual design
- **JavaScript** (41.2%) - Game logic and interactivity

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### How to Play

1. **Open the Game** - Open `index.html` in your web browser
2. **Make Your Move** - Click any empty square to place your mark
3. **Computer's Turn** - The AI will automatically make its move
4. **Win Condition** - Get three in a row (horizontal, vertical, or diagonal) to win
5. **Draw** - If all squares are filled with no winner, it's a draw
6. **Reset** - Click the reset button to start a new game

### Running Locally

**Using Python (Python 3):**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

**Using Live Server (VS Code):**
- Install the Live Server extension
- Right-click `index.html` and select "Open with Live Server"

## 📁 Project Structure

```
PRODIGY_WD_03/
├── index.html      # Main game structure
├── style.css       # Game styling and layout
├── script.js       # Game logic and AI
└── README.md       # Project documentation
```

## 🎯 Game Rules

- Players take turns marking spaces in a 3×3 grid
- The player who succeeds in placing three marks in a horizontal, vertical, or diagonal row wins the game
- If all 9 squares are filled and no player has won, the game is a draw

## 📝 Notes

- The game uses minimax algorithm for AI decision-making (if implemented)
- All code is vanilla JavaScript with no external dependencies

---

**Enjoy playing! 🎉**
