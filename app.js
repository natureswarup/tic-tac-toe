let winningNumbers = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

let playerOneTurn = true

let playerOne = {
  name: 'Nature',
  mark: 'X',
}

let playerTwo = {
  name: 'Computer',
  mark: 'O',
}

let board = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function checkWinner() {
  for (var i = 0; i < winningNumbers.length; i++) {
    if (
      board[winningNumbers[i][0]] === 'X' &&
      board[winningNumbers[i][1]] === 'X' &&
      board[winningNumbers[i][2]] === 'X'
    ) {
      return console.log('player one wins!')
    } else if (
      board[winningNumbers[i][0]] === 'O' &&
      board[winningNumbers[i][1]] === 'O' &&
      board[winningNumbers[i][2]] === 'O'
    ) {
      return console.log('player two wins')
    }
  }
}

let cells = document.getElementsByTagName('td')

let cellsArr = Array.prototype.slice.call(cells)

cellsArr.map((item) => {
  item.addEventListener('click', () => {
    if (item.innerHTML === '') {
      if (playerOneTurn) {
        item.innerHTML = playerOne.mark
        board[parseInt(item.getAttribute('id'))] = playerOne.mark
        playerOneTurn = false
        console.log(board)
      } else {
        item.innerHTML = playerTwo.mark
        playerOneTurn = true
        board[parseInt(item.getAttribute('id'))] = playerTwo.mark
        console.log(board)
      }
      checkWinner()
    }
  })
})
