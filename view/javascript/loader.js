function showLoader(messageContainer) {
  const loaderElement = document.createElement('div');
  loaderElement.className = 'response';
  loaderElement.innerHTML = `
    <img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon">
    <div class="loader-container">
      <div class="loader-text">Getting Ready...</div>
      <div class="circle-container">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  `;
  messageContainer.appendChild(loaderElement);
  return loaderElement;
}

function hideLoader(loaderElement) {
  loaderElement.remove();
}

// Make functions globally accessible
window.showLoader = showLoader;
window.hideLoader = hideLoader;
