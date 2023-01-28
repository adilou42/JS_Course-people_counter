let countEl = document.getElementById("count-el")
count = 0

let entryEl = document.getElementById("entry-el")

let totalEl = document.getElementById("total-el")

let total = 0

function increment() {
	count++
	countEl.textContent = count
}

function decrease() {
	if (count > 0 ) {
		count--
		countEl.textContent = count
	}
}

function save() {
	if (count > 0) {

		entryEl.textContent += count + " - "
		total += count
		totalEl.textContent = total
	}
}

function restart() {
	count = 0
	countEl.textContent = 0

	entryEl.textContent = "Previous entries : "

	totalEl.textContent = "0"
	total = 0
}