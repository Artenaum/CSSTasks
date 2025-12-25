let progress = 0
const progressBar = document.querySelector('.progressbar')
const percentageText = document.querySelector('.percentage')

function updateProgress() {
	if (progress < 100) {
		progress++;
		progressBar.style.setProperty('--progress', progress)
		percentageText.textContent = `${progress}%`
	} else {
		progress = 0
	}
}

setInterval(updateProgress, 20)