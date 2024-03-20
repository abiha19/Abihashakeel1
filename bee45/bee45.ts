interface Carinfo {
    [key: string]: string | number;
}

function createCar(manufacturer: string, modelName: string, options: Carinfo = {}): object {
    const car = {
        manufacturer,modelName,...options,
    };
    return car;
}
const firstcar = createCar('hyundai', 'Sonata', { color: 'grey', year: 2024 });
const secondcar = createCar('BMW', 'M3', { color: 'Black', engine: 'V10', turbo: 'hybrid' });

console.log(firstcar);
console.log(secondcar);
