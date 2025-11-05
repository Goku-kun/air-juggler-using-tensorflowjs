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
    // TODO: Step 2 - Request webcam access using getUserMedia
    // Use navigator.mediaDevices.getUserMedia() with video constraints
    // Set video resolution to 640x480

    // TODO: Step 3 - Connect the stream to the video element
    // Set video.srcObject to the stream
    // Wait for video to start playing

    // TODO: Step 4 - Load MediaPipe Hands model
    // Create model configuration with:
    // - runtime: 'mediapipe'
    // - solutionPath: CDN URL
    // - maxHands: 2
    // - modelType: 'full'

    // TODO: Step 5 - Create the detector
    // Use window.handPoseDetection.createDetector()

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
    // TODO: Step 6 - Run hand detection on current video frame
    // Use detector.estimateHands(video)
    // TODO: Step 7 - Transform hand landmarks to canvas coordinates
    // For each detected hand:
    // - Get the palm base keypoints (first 5 landmarks)
    // - Calculate average X and Y position
    // - Mirror the X coordinate (640 - x)
    // - Return array of {x, y} positions
    // TODO: Step 8 - Call the callback with hand positions
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
