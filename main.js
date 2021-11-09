

function shuffle_board() {
    temp = 0;
    x = 0;
    y = 0;

    t1 = 0, t2 = 0, t3 = 0, t4 = 0;

    for (k = 1; k <= 20; ++k) {
        do {
            x = ((int) (Math.random()*3)) - 1;
            y = ((int) (Math.random()*3) ) - 1;

            t1 = (x_branco+x);
		    t2 = y_branco + y;
		    t3 = Math.abs(x) + Math.abs(y);
		    t4 = x + y;
        } while ( (t1 > 2) || (t1 < 0) || (t2 > 2) || (t2 < 0) || (t3 > 1) || (t4 == 0) );

        temp = tabuleiro[x_branco][y_branco];
	    tabuleiro[x_branco][y_branco] = tabuleiro[x_branco+x][y_branco+y];
	    tabuleiro[x_branco+x][y_branco+y] = temp;
			
	    x_branco = x_branco + x;
	    y_branco = y_branco + y;
    }
}

function init_var() {
    k = 0;
    tabuleiro = new int[3][3];
    for(i = 0;i<tabuleiro.length;i++) {
        for(j = 0;j<tabuleiro[i].length;j++) {
            k++;
            tabuleiro[i][j] = k;
        }
    }
    
    x_branco = 2;
    y_branco = 2;
    movimento = 0;
}

function print_board() {

}

function win() {

}

function next_move() {

}

function update_board(move) {

}



