function initMemoryGame() {
    const memoryContainer = document.querySelector('.memory-game');
    const GRID_SIZE = 4; // Lưới 4x4
    const TOTAL_PAIRS = 8; // 8 cặp thẻ
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let canFlip = true;
    let moves = 0;

    // Danh sách ảnh cho các cặp thẻ
    const cardImages = [
        './images/pic23.jpg', './images/pic24.jpg', './images/pic25.jpg', './images/pic26.jpg',
        './images/pic27.jpg', './images/pic28.jpg', './images/pic29.jpg', './images/pic30.jpg'
    ];

    // Tạo giao diện game
    memoryContainer.innerHTML = `
        <div class="memory-header">
            <div class="memory-moves">Số lần lật: <span id="moveCount">0</span></div>
            <div class="memory-pairs">Cặp đã tìm thấy: <span id="pairCount">0</span>/${TOTAL_PAIRS}</div>
        </div>
        <div class="memory-board"></div>
        <button class="memory-new-game">Chơi lại 🎮</button>
    `;

    const board = document.querySelector('.memory-board');

    // Tạo và xáo trộn các thẻ
    function createCards() {
        cards = [];
        // Tạo các cặp thẻ
        for (let i = 0; i < TOTAL_PAIRS; i++) {
            console.log('Loading image:', cardImages[i]); // Debug log
            for (let j = 0; j < 2; j++) {
                cards.push({
                    id: `card-${i}-${j}`,
                    imageUrl: cardImages[i],
                    isFlipped: false,
                    isMatched: false
                });
            }
        }
        // Xáo trộn thẻ
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    // Hiển thị bảng game
    function renderBoard() {
        board.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;
        board.innerHTML = '';
        
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = `memory-card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`;
            cardElement.setAttribute('data-id', card.id);
            cardElement.innerHTML = `
                <div class="memory-card-inner">
                    <div class="memory-card-front">❤️</div>
                    <div class="memory-card-back" style="background-image: url('${card.imageUrl}')"></div>
                </div>
            `;
            cardElement.addEventListener('click', () => flipCard(card, cardElement));
            board.appendChild(cardElement);
        });
    }

    // Xử lý lật thẻ
    function flipCard(card, element) {
        if (!canFlip || card.isFlipped || card.isMatched) return;

        card.isFlipped = true;
        element.classList.add('flipped');
        flippedCards.push({ card, element });

        if (flippedCards.length === 2) {
            moves++;
            document.getElementById('moveCount').textContent = moves;
            canFlip = false;

            const [firstCard, secondCard] = flippedCards;
            if (firstCard.card.imageUrl === secondCard.card.imageUrl) {
                // Cặp thẻ khớp
                firstCard.card.isMatched = secondCard.card.isMatched = true;
                firstCard.element.classList.add('matched');
                secondCard.element.classList.add('matched');
                matchedPairs++;
                document.getElementById('pairCount').textContent = matchedPairs;
                flippedCards = [];
                canFlip = true;
                checkWin();
            } else {
                // Cặp thẻ không khớp
                setTimeout(() => {
                    firstCard.card.isFlipped = secondCard.card.isFlipped = false;
                    firstCard.element.classList.remove('flipped');
                    secondCard.element.classList.remove('flipped');
                    flippedCards = [];
                    canFlip = true;
                }, 1000);
            }
        }
    }

    // Kiểm tra chiến thắng
    function checkWin() {
        if (matchedPairs === TOTAL_PAIRS) {
            setTimeout(() => {
                Swal.fire({
                    title: 'Chúc mừng! 🎉',
                    text: `Em đã hoàn thành trò chơi trong ${moves} lượt!`,
                    imageUrl: './images/win.png',
                    imageWidth: 300,
                    confirmButtonText: 'Chơi lại',
                    showCancelButton: true,
                    cancelButtonText: 'Đóng'
                }).then((result) => {
                    if (result.isConfirmed) {
                        initNewGame();
                    }
                });
            }, 500);
        }
    }

    // Khởi tạo game mới
    function initNewGame() {
        moves = 0;
        matchedPairs = 0;
        flippedCards = [];
        canFlip = true;
        document.getElementById('moveCount').textContent = '0';
        document.getElementById('pairCount').textContent = '0';
        createCards();
        renderBoard();
    }

    // Thêm sự kiện cho nút chơi lại
    document.querySelector('.memory-new-game').addEventListener('click', initNewGame);

    // Khởi tạo game
    initNewGame();
} 