// Set up the page

const N_ROOMS = 8;

const TMP_N = 24;
const TMP_M = 24;
const TMP_R = Math.floor((TMP_N + TMP_M) * 2.5);
const TMP_CELLSIZE = 24;

const game = new MinesweeperGame(TMP_N, TMP_M, TMP_R);

const board = new MinesweeperBoard(TMP_N, TMP_M, TMP_CELLSIZE, report_click);

$('#board-container').append(board.canvas);