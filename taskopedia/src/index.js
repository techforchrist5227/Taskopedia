import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submitButton");
  const inputContainer = document.getElementById("inputContainer");
  let inputCount = 1;

  submitButton.addEventListener("click", function() {
      const inputElement = document.createElement("input");
      inputElement.setAttribute("type", "text");
      inputElement.setAttribute("name", "input" + inputCount);
      inputElement.setAttribute("placeholder", "Input " + inputCount);
      inputContainer.appendChild(inputElement);
      
      inputCount++;
  });
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);


