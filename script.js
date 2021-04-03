if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

class MatchedCards {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining')
        this.ticker = document.getElementById('flips-made');
    }
}

function ready() {
    let overlays = Array.from(document.querySelectorAll(".overlay-text"));
    let cards = Array.from(document.querySelectorAll(".card"));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
            //game.startGame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
        //game.flipCard(card);
        });
    });
}