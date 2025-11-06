// Hand tracking state
let detector = null;
let video = null;
let isDetecting = false;
let detectionCallback = null;

/**
 * Setup hand tracking with MediaPipe Hands
 * @param {HTMLVideoElement} videoElement - Video element for webcam
 * @param {Function} callback - Called with hand positions [{x, y}]
 */
async function setupHandTracking(videoElement, callback) {
  video = videoElement;
  detectionCallback = callback;

  try {
    // TODO: Step 3 - Request Webcam Access
    // Request webcam access using getUserMedia:

    // Connect the stream to the video element:

    // TODO: Step 4 - Load MediaPipe Hands Model
    // Configure and load the model:

    // Create the detector:

    console.log("Hand tracking initialized successfully");
    return true;
  } catch (error) {
    console.error("Error setting up hand tracking:", error);
    alert(
      "Could not access webcam. Please ensure you have granted camera permissions.",
    );
    return false;
  }
}

/**
 * Start hand detection loop
 */
function startDetection() {
  if (!detector || !video) {
    console.error("Hand tracking not initialized");
    return;
  }

  isDetecting = true;
  detectHands();
}

/**
 * Stop hand detection loop
 */
function stopDetection() {
  isDetecting = false;
}

/**
 * Detect hands and call callback with positions
 */
async function detectHands() {
  if (!isDetecting) return;

  try {
    // TODO: Step 5 - Detect Hands in Real-Time
    // Run hand detection on current video frame:

    // TODO: Step 6 - Transform Hand Landmarks to Coordinates
    // Transform hand landmarks to canvas coordinates:

    // Call callback with hand positions:

  } catch (error) {
    console.error("Error detecting hands:", error);
  }

  // Continue detection loop (~30 FPS)
  setTimeout(() => detectHands(), 33);
}

// Export functions (if using modules, otherwise they're global)
window.handTracking = {
  setupHandTracking,
  startDetection,
  stopDetection,
};
