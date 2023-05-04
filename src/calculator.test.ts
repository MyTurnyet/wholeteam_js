import {Calculator} from './calculator';

describe('Calculator', () => {
    it('works', () => {
        const calculator = new Calculator();
        expect(calculator.works()).toBe(true);

    });
});