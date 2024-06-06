// imageHandler.js
export function handleImageUpload(inputElement, messageContainer, userName, chatId) {
  const file = inputElement.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.src = e.target.result;
      img.onload = function() {
        // Create a canvas to resize the image
        const canvas = document.createElement('canvas');
        const maxDimension = 400; // Increase max width and height for larger display

        // Calculate the new dimensions while maintaining the aspect ratio
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDimension) {
            height *= maxDimension / width;
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width *= maxDimension / height;
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Convert the canvas to a data URL and create an image element
        const resizedImageUrl = canvas.toDataURL(file.type);
        displayImageMessage(resizedImageUrl, messageContainer, userName, chatId);
      };
    };
    reader.readAsDataURL(file);
  }
}

function displayImageMessage(imageUrl, messageContainer, userName, chatId) {
  const timestamp = new Date().toLocaleString();
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `
    <div class="message-content">
      <strong>${userName} (Chat ID: ${chatId}) - ${timestamp}:</strong>
      <img src="${imageUrl}" class="uploaded-image" alt="Uploaded Image">
    </div>
  `;
  messageContainer.appendChild(messageElement);
}
