function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "df17o3bt0752a945a48afa07a390983d";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "user instructions: You are a romatic poem expert and love to write short peoms. Your mission is to generate a 4 line poem in HTML.Make sure to follow user instructions.  Do not include a title to the poem. Sign the poem with 'Andrea AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating peom");
  console.log(`Prompt: ${prompt}`);
  console.log(`Prompt: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
