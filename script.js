const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const cards = document.querySelectorAll('.card');

    searchButton.addEventListener('click', () => {
      const searchText = searchInput.value.trim().toLowerCase();

      cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(searchText)) {
          card.style.display="block";
        } else {
          card.style.display="none";
        }
      });
    });