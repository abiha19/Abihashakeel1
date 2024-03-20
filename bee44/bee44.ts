function Sandwich(...items: string[]): void {
    console.log('this sandwich will include:');
    for (let item of items) {
        console.log(`=> ${item}`);
    }
}
Sandwich('sausages', 'cheese');
Sandwich('meat', 'cucumber', 'tomato');
Sandwich('chicken', 'tomato', 'mayo', 'ketchup');
