// Grabbing the input element and the suggestions box for Step 3
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

// An incredible amount of fruits, is this really the best way of organizing this?
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// This function searches for fruits that match the input 'string'
function search(str) {
  // Creates an empty array to add filtered fruit to
	let results = [];
  // This makes sure to only start filtering once there is text in the field
	if (str.length > 0) {
    // This filters the list of fruits to find matches that include the sting. ie 'ppl' is in 'Apple', 'Custard Apple', 'Pineapple'. 
    // This also converts the string to lowercase for ease of search.
	  results = fruit.filter(f => f.toLowerCase().includes(str.toLowerCase()));
	}
	return results;
  }


function searchHandler(e) {
  // Grabs the current input value
	const inputVal = e.target.value;
  // Grabs the searcg results based on said input value
	const results = search(inputVal);
	// console.log(results); //logs the filtered results to the console
	showSuggestions(results, inputVal);
  }
// This fuction included inputVal in the starter code 
function showSuggestions(results) {
  // This clears the previous suggestions
  suggestions.innerHTML = '';
  if (results.length > 0) {
    // This makes list items for each suggestion
    results.forEach(result => {
      const li = document.createElement('li');
      // The way I was taught to do this was to change innertext or innerhtml but I found this and it worked as well
      li.textContent = result;
      suggestions.appendChild(li);

      // Event listeners for hover and click effects, 
      li.addEventListener('mouseover', highlightSuggestion);
      li.addEventListener('mouseout', removeHighlight);
      li.addEventListener('click', useSuggestion);
    });
    // This shows the suggestions container
    suggestions.parentElement.classList.add('has-suggestions');
  } else {
    // This hides the suggestions if there are no matches
    suggestions.parentElement.classList.remove('has-suggestions');
  }
}

// Step 8, I feel like this did not need to be 2 functions but this worked.
function highlightSuggestion(e) {
  e.target.classList.add('highlight');
}
function removeHighlight(e) {
  e.target.classList.remove('highlight');
}

// function highlight(e){
//   //this would need some sort of true/false switch
// }

// Step 9
function useSuggestion(e) {
  // This sets the input value to whatever suggestion is clicked
	input.value = e.target.textContent;
  // This clears the suggestions after the click
	suggestions.innerHTML = '';
  // Hides the suggestions container
	suggestions.parentElement.classList.remove('has-suggestions');
}

input.addEventListener('keyup', searchHandler);
// suggestions.addEventListener('click', useSuggestion);