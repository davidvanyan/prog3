class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 9;
        this.directions =[];
    }


    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    move() {
        var fundCords = this.getDirections();
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];
 
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }


    eat() {
        var fundCords = this.getDirections(0);
        var fundCords1 = this.getDirections(1);
        var fundCords2 = this.getDirections(2);
        var fundCords3 = this.getDirections(3);
        var fundCords4 = this.getDirections(4);
        var fund4 = fundCords.concat(fundCords1);
        var fund3 = fund4.concat(fundCords2);
        var fund2 = fund3.concat(fundCords3);
        var fund1 = fund2.concat(fundCords4);
        var cord = random(fund1);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;

            this.energy++;

            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    let r = matrix[y][x];
                    if(r == 1){
                        xotArr.splice(i, 1);
                    } 
                    else if(r == 2){
                        eatArr.splice(i, 1);
                    } 
                    else if(r == 3){
                        gishatichArr.splice(i, 1);
                    } 
                    else if(r == 4){
                        gishatichakerArr.splice(i, 1);
                    } 
                }
            }

            if (this.multiply == 16) {
                this.mul()
                this.multiply = 0;
            }


        } else { 
            this.move();
            this.energy--;
            if (this.energy == 0) { 
                this.die();
            }
        }
    }

    mul() {
        var fundCords = this.getDirections();
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norAmenaker = new Amenaker(x, y);
            amenakerArr.push(norAmenaker);

            matrix[y][x] = 1;
            this.multiply = 0; 
        } 
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in amenakerArr) {
            if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
                amenakerArr.splice(i, 1);
            }
        }
        
    }

}