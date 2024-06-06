function displayContent(option, append = false) {
  const contentDiv = document.getElementById("content");
  let content = `<h3>${option.name}</h3>`;
  content += `<p>${option.description}</p>`;
  
  // Check if append is false to clear content if not appending
  if (!append) contentDiv.innerHTML = ""; 

  if (option.topics) {
    content += "<p><strong>Topics:</strong></p>";
    content += "<ul>";
    for (const topic in option.topics) {
      // Modify to add buttons for each topic
      content += `<li><button onclick="displayTopicDescription('${topic}')">${topic}</button></li>`;
    }
    content += "</ul>";
  }

  contentDiv.innerHTML += content;
}

function displayTopicDescription(topic) {
  const contentDiv = document.getElementById("content");
  const selectedOption = document.getElementById("options").value;
  const option = genreClassification[selectedOption];
  if (option && option.topics && option.topics[topic]) {
    contentDiv.innerHTML = `<h3>${topic}</h3><p>${option.topics[topic]}</p>`;
  }
}
