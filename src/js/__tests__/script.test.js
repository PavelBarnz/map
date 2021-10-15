import ErrorRepository from "../script.js";

test("тест класса ErrorRepository", () => {
    const errorRep = new ErrorRepository();

    const result = [];
    for(let key of errorRep.errorCollect){
       result.push(key[0]);
    }
    expect(result).toEqual([ 400, 401, 402, 404 ])
})

test("тест метода translate класса ErrorRepository", () => {
    const errorRep = new ErrorRepository();
    const result = [];
    
    result.push(errorRep.translate(404));
    result.push(errorRep.translate(405));

    expect(result).toEqual([ 'Не найдено', 'Unknown error' ])
})