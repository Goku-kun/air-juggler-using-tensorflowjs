# Air Juggler using TensorFlow.js - Gesture-Controlled Game

A beginner-friendly tutorial project that teaches TensorFlow.js and MediaPipe Hands through building an interactive gesture-controlled game.

<!-- TBD -->
<!-- ![Air Juggler Demo](demo.gif) -->

## What You'll Learn

- **TensorFlow.js** - Running machine learning models in the browser
- **MediaPipe Hands** - Real-time hand landmark detection
- **Webcam Access** - Using the `getUserMedia` API
- **Video Processing** - Drawing video feeds to HTML5 Canvas
- **Real-time Interactions** - Creating responsive gesture-based applications

## Quick Start

### Option 1: Start from Scratch

1. Open the **starter/** directory
2. Follow the **TUTORIAL.md** step-by-step
3. Complete the TODOs in the code
4. Reference **completed/** if you get stuck

### Option 2: Try the Completed Version

1. Open the **completed/** directory
2. Open `index.html` in a modern browser
3. Grant camera permissions
4. Click "Start Game" and play!

## File Structure

```
air-juggler/
├── starter/              # Incomplete code with TODOs (start here!)
│   ├── index.html       # HTML without TensorFlow scripts
│   ├── style.css        # Complete styling (provided)
│   ├── game.js          # Game boilerplate with TODOs
│   └── handTracking.js  # Hand tracking boilerplate with TODOs
├── completed/           # Fully working code (reference)
│   ├── index.html
│   ├── style.css
│   ├── game.js
│   └── handTracking.js
└── README.md            # This file
```

## How to Play

1. **Open the game** - Load `index.html` in a browser (Chrome, Firefox, Edge recommended)
2. **Grant camera permission** - Allow access when prompted
3. **Click "Start Game"** - Wait for the ML model to load (~2-3 seconds)
4. **Move your hands** - Position your hands in front of the camera
5. **Bounce the ball** - Keep the ball in the air by hitting it with your hands!

### Game Rules

- A ball falls due to gravity
- Your hands create invisible "paddles" that bounce the ball upward
- If the ball falls off the bottom of the screen, game over
- Score is based on how long you survive (in seconds)

## Prerequisites

- Basic JavaScript knowledge
- Understanding of async/await
- HTML5 Canvas basics (helpful but not required)
- Modern web browser with webcam

## Browser Compatibility

Requires a modern browser with:

- WebRTC support (for webcam access)
- ES6+ JavaScript support
- HTML5 Canvas support
- WebGL support (for GPU acceleration)

**Tested on:**

- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

## Technical Stack

- **HTML5 Canvas** - Game rendering
- **Vanilla JavaScript** - No frameworks needed!
- **TensorFlow.js** - Machine learning framework
- **MediaPipe Hands** - Pre-trained hand detection model

## Performance Notes

- **Detection runs at ~30 FPS** - Good balance of accuracy and performance
- **Rendering runs at 60 FPS** - Smooth visuals
- **Model loading** - First load downloads ~10MB, then cached
- **GPU acceleration** - Automatically used when available

## Troubleshooting

**Camera not working?**

- Ensure you've granted camera permissions
- Check that no other app is using your camera
- Try refreshing the page
- Check browser console for errors

**Model loading slowly?**

- First load downloads the MediaPipe Hands model
- Subsequent loads use browser cache
- Check your internet connection

**Hands not detected?**

- Ensure good lighting conditions
- Keep hands clearly visible to camera
- Try moving closer or adjusting camera angle
- Make sure hands are within the camera frame

**Low FPS/Performance?**

- Close other browser tabs
- Check if GPU acceleration is enabled
- Try using a different browser
- Reduce `maxHands` from 2 to 1 in configuration

## Next Steps

Once you've completed the tutorial, try these challenges:

1. **Multiple balls** - Juggle 2-3 balls instead of 1
2. **Difficulty levels** - Adjust gravity and bounce velocity
3. **Finger tracking** - Detect individual fingers instead of palm
4. **Gesture recognition** - Recognize specific hand gestures
5. **Sound effects** - Add audio feedback when bouncing
6. **Power-ups** - Add special items that appear randomly
7. **Leaderboard** - Save high scores to localStorage
8. **Multiplayer** - Two-player mode with different colored balls

## Resources

- [TensorFlow.js Documentation](https://www.tensorflow.org/js)
- [MediaPipe Hands Guide](https://google.github.io/mediapipe/solutions/hands.html)
- [Hand Pose Detection API](https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection)
- [WebRTC getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- [HTML5 Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

## Credits

Built as part of the [Codédex Projects](https://www.codedex.io/projects) tutorial series.

## License

MIT License - Feel free to use this code for learning and teaching!
