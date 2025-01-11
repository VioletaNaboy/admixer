//to start 'node index.js' 

function validSolution(solution) {
    const isRightFormat = (solution) => {
        if (!Array.isArray(solution) || solution.length !== 9) return false;
        for (let row of solution) {
            if (!Array.isArray(row) || row.length !== 9 || row.includes(0)) return false;
            for (let el of row) {
                if (el < 1 || el > 9 || isNaN(el)) return false;
            }
        }
        return true
    }
    const isUnique = (array) => {
        const count = Array(10).fill(0);

        for (let n of array) {
            count[n]++;
            if (count[n] > 1) return false;
        }
        return true;
    }

    if (!isRightFormat(solution)) return false

    //перевірка рядків і стовбців
    for (let i = 0; i < solution.length; i++) {
        for (let j = 0; j < solution.length; j++) {
            for (let k = 0; k < solution.length; k++) {
                if (i !== k && solution[i][j] === solution[k][j]) {  // Перевірка стовпця
                    return false
                }
                if (j !== k && solution[i][j] === solution[i][k]) {  // Перевірка рядка
                    return false
                }
            }
        }

    }
    //перевірка блоків
    for (let blockRow = 0; blockRow < 3; blockRow++) {
        for (let blockCol = 0; blockCol < 3; blockCol++) {
            const block = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    block.push(solution[blockRow * 3 + i][blockCol * 3 + j]);
                }
            }
            if (!isUnique(block)) return false;
        }
    }
    return true
}

const test1 = validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

const test2 = validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false

console.log(test1, test2)
