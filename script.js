const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if (str.length > 0) {
	  results = fruit.filter(f => f.toLowerCase().includes(str.toLowerCase()));
	}
	return results;
  }

  function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	// console.log(results); //logs the filtered results to the console
	showSuggestions(results, inputVal);
  }

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = '';
  if (results.length > 0) {
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result;
      suggestions.appendChild(li);

      // Event listeners for hover and click effects, 
      li.addEventListener('mouseover', highlightSuggestion);
      li.addEventListener('mouseout', removeHighlight);
      li.addEventListener('click', useSuggestion);
    });
    suggestions.parentElement.classList.add('has-suggestions');
  } else {
    suggestions.parentElement.classList.remove('has-suggestions');
  }
}

function highlightSuggestion(e) {
  e.target.classList.add('highlight');
}

function removeHighlight(e) {
  e.target.classList.remove('highlight');
}


function useSuggestion(e) {
	input.value = e.target.textContent;
	suggestions.innerHTML = '';
	suggestions.parentElement.classList.remove('has-suggestions');
}

input.addEventListener('keyup', searchHandler);
// suggestions.addEventListener('click', useSuggestion);