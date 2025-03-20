window.addEventListener("DOMContentLoaded", () => {
	function articles(showCount = 2) {
		const art = document.querySelectorAll(".articles__item");
		const showMore = document.querySelector(".articles__button");
		const emptyMessage = document.querySelector(".articles__empty");

		let showed = showCount;
		let limit = showCount;
		let startIndex = showed - limit;

		function hideButton() {
			if (!art.length) {
				showMore.style.display = "none";
				emptyMessage.style.display = "block";
			}
			if (art.length <= showCount) {
				showMore.style.display = "none";
			}
		}

		hideButton();

		function hideArticle() {
			return new Promise((resolve) => {
				for (let item of art) {
					item.style.display = "none";
				}
				resolve();
			});
		}

		if (art.length) {
			hideArticle().then(() => {
				showArticles(startIndex, showed);
			});
		}

		function showArticles(from, to) {
			try {
				for (let i = from; i < to; i++) {
					let item = art[i];
					item.style.display = "block";
				}
			} catch {}
		}

		showMore.addEventListener("click", () => {
			showed += limit;
			showArticles(startIndex, showed);
			if (showed >= art.length) {
				showMore.style.display = "none";
			}
		});
	}

	articles();
});
