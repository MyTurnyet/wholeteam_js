import {NumbersToWords} from './numbersToWords';

describe('Numbers To Wordsre', () => {
    it('works', () => {
        const calculator = new NumbersToWords();
        expect(calculator.works()).toBe(true);

    });
});