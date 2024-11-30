function initPuzzleGame() {
    const puzzleContainer = document.querySelector('.puzzle-game');
    const PUZZLE_SIZE = 4;
    let pieces = [];
    
    // Tạo giao diện game
    puzzleContainer.innerHTML = `
        <div class="puzzle-header">
            <div class="moves">Số bước: <span id="moveCount">0</span></div>
            <button class="shuffle-btn">Trộn lại 🔄</button>
        </div>
        <div class="puzzle-image-preview">
            <img src="./images/puzzle.jpg" alt="Mục tiêu" class="target-image">
        </div>
        <div class="puzzle-board"></div>
        <button class="new-game-btn">Chơi lại 🎮</button>
    `;

    const board = document.querySelector('.puzzle-board');
    let moveCount = 0;
    let isGameComplete = false;

    // Sửa lại kích thước mỗi mảnh ghép trong CSS
    const pieceSize = 75;

    // Sửa lại hàm createPieces
    function createPieces() {
        pieces = [];
        for (let i = 0; i < PUZZLE_SIZE * PUZZLE_SIZE; i++) {
            const row = Math.floor(i / PUZZLE_SIZE);
            const col = i % PUZZLE_SIZE;
            pieces.push({
                value: i,
                currentRow: row,
                currentCol: col,
                rotation: 0,
                backgroundPosition: `-${col * pieceSize}px -${row * pieceSize}px`,
                backgroundSize: `${PUZZLE_SIZE * pieceSize}px ${PUZZLE_SIZE * pieceSize}px`
            });
        }
    }

    // Sửa lại hàm renderBoard để thêm backgroundSize
    function renderBoard() {
        board.style.gridTemplateColumns = `repeat(${PUZZLE_SIZE}, 1fr)`;
        board.innerHTML = '';
        
        pieces.forEach(piece => {
            const pieceElement = document.createElement('div');
            pieceElement.className = 'puzzle-piece';
            pieceElement.style.backgroundImage = 'url("./images/puzzle.jpg")';
            pieceElement.style.backgroundPosition = piece.backgroundPosition;
            pieceElement.style.backgroundSize = piece.backgroundSize;
            pieceElement.style.transform = `rotate(${piece.rotation}deg)`;
            pieceElement.setAttribute('data-value', piece.value);
            
            pieceElement.addEventListener('click', (e) => {
                if (e.ctrlKey || e.metaKey) {
                    movePiece(piece);
                } else {
                    rotatePiece(piece, pieceElement);
                }
            });
            
            board.appendChild(pieceElement);
        });
    }

    // Xoay mảnh ghép
    function rotatePiece(piece, element) {
        if (isGameComplete) return;
        
        // Đảm bảo góc xoay luôn là số dương
        piece.rotation = ((piece.rotation + 90) % 360 + 360) % 360;
        element.style.transform = `rotate(${piece.rotation}deg)`;
        
        moveCount++;
        document.getElementById('moveCount').textContent = moveCount;
        
        checkWin();
    }

    // Di chuyển mảnh ghép
    function movePiece(piece) {
        if (isGameComplete) return;
        
        // Tìm mảnh ghép có thể hoán đổi
        const adjacentPieces = pieces.filter(p => 
            (Math.abs(p.currentRow - piece.currentRow) === 1 && p.currentCol === piece.currentCol) ||
            (Math.abs(p.currentCol - piece.currentCol) === 1 && p.currentRow === piece.currentRow)
        );
        
        if (adjacentPieces.length > 0) {
            // Chọn ngẫu nhiên một mảnh để hoán đổi
            const targetPiece = adjacentPieces[Math.floor(Math.random() * adjacentPieces.length)];
            
            // Hoán đổi vị trí
            [piece.currentRow, targetPiece.currentRow] = [targetPiece.currentRow, piece.currentRow];
            [piece.currentCol, targetPiece.currentCol] = [targetPiece.currentCol, piece.currentCol];
            
            moveCount++;
            document.getElementById('moveCount').textContent = moveCount;
            
            renderBoard();
            checkWin();
        }
    }

    // Kiểm tra chiến thắng
    function checkWin() {
        // Kiểm tra từng mảnh ghép
        let allCorrect = true;
        pieces.forEach((piece, index) => {
            // Tính vị trí đúng dựa trên index
            const correctRow = Math.floor(index / PUZZLE_SIZE);
            const correctCol = index % PUZZLE_SIZE;
            
            // So sánh vị trí hiện tại với vị trí đúng
            const isPositionCorrect = (
                piece.currentRow === correctRow &&
                piece.currentCol === correctCol
            );
            
            // Kiểm tra góc xoay
            const isRotationCorrect = piece.rotation % 360 === 0;

            if (!isPositionCorrect || !isRotationCorrect) {
                allCorrect = false;
                console.log(`Mảnh ${index}:`, {
                    vị_trí: {
                        hiện_tại: [piece.currentRow, piece.currentCol],
                        cần_đặt_tại: [correctRow, correctCol],
                        đúng_vị_trí: isPositionCorrect
                    },
                    góc_xoay: {
                        hiện_tại: piece.rotation,
                        đúng_góc: isRotationCorrect
                    }
                });
            }
        });

        // In trạng thái hiện tại của puzzle
        console.log('Trạng thái puzzle:');
        const puzzleState = Array(PUZZLE_SIZE).fill().map(() => Array(PUZZLE_SIZE).fill(''));
        pieces.forEach((piece, index) => {
            puzzleState[piece.currentRow][piece.currentCol] = index;
        });
        console.table(puzzleState);

        if (allCorrect) {
            isGameComplete = true;
            pieces.forEach(piece => {
                piece.rotation = 0;
            });
            renderBoard();

            setTimeout(() => {
                Swal.fire({
                    title: 'Chúc mừng! 🎉',
                    text: `Em đã hoàn thành puzzle trong ${moveCount} bước!`,
                    imageUrl: './images/puzzle.jpg',
                    imageWidth: 300,
                    confirmButtonText: 'Chơi lại',
                    showCancelButton: true,
                    cancelButtonText: 'Đóng',
                    background: '#fff',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        initNewGame();
                    }
                });
            }, 500);
        }

        return allCorrect;
    }

    // Trộn các mảnh ghép
    function shufflePieces() {
        // Xoay ngẫu nhiên các mảnh
        pieces.forEach(piece => {
            piece.rotation = Math.floor(Math.random() * 4) * 90;
        });
        
        // Trộn vị trí các mảnh
        for (let i = pieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            
            // Hoán đổi vị trí
            [pieces[i].currentRow, pieces[j].currentRow] = [pieces[j].currentRow, pieces[i].currentRow];
            [pieces[i].currentCol, pieces[j].currentCol] = [pieces[j].currentCol, pieces[i].currentCol];
        }

        // Đảm bảo puzzle đã được xáo trộn
        const isSolved = pieces.every((piece, index) => {
            const correctRow = Math.floor(index / PUZZLE_SIZE);
            const correctCol = index % PUZZLE_SIZE;
            return piece.currentRow === correctRow && 
                   piece.currentCol === correctCol && 
                   piece.rotation === 0;
        });

        if (isSolved) {
            // Nếu puzzle chưa được xáo trộn, thử lại
            shufflePieces();
        }
    }

    // Khởi tạo game mới
    function initNewGame() {
        moveCount = 0;
        isGameComplete = false;
        document.getElementById('moveCount').textContent = '0';
        createPieces();
        shufflePieces();
        renderBoard();
    }

    // Thêm sự kiện cho các nút
    document.querySelector('.shuffle-btn').addEventListener('click', initNewGame);
    document.querySelector('.new-game-btn').addEventListener('click', initNewGame);

    // Khởi tạo game
    initNewGame();
} 