import { Loader } from './Popuploader.js';

let model;
let isLoadingModel = false; // Flag to track model loading state

export async function loadModel(messageContainer) {
  if (isLoadingModel) {
    console.log('Model is already loading...');
    return;
  }

  isLoadingModel = true; // Set the flag to true to indicate the model is being loaded
  const loader = Loader.showLoader(messageContainer);
  console.log('Loading model...');
  try {
    model = await mobilenet.load();
    console.log('Model loaded');
    Loader.hideLoader(loader);
    isLoadingModel = false; // Reset the flag after loading is complete
    return model;
  } catch (error) {
    console.error('Error loading the model:', error);
    Loader.hideLoader(loader);
    isLoadingModel = false; // Reset the flag after loading is complete
    return null;
  }
}

export async function classifyImage(imageElement, messageContainer) {
  if (!model) {
    console.error('Model not loaded yet');
    return [];
  }
  const loader = Loader.showLoader(messageContainer);
  try {
    const predictions = await model.classify(imageElement);
    console.log('Predictions:', predictions);
    Loader.hideLoader(loader);
    return predictions;
  } catch (error) {
    console.error('Error classifying the image:', error);
    Loader.hideLoader(loader);
    return [];
  }
}
