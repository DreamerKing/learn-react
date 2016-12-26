/**
 * Created by DK on 2016/12/26.
 */
jest.autoMockOff();

 describe('sum', function() {
    test("adds 1 + 2 to equal 3", function() {
        const sum = require('../sum');
        expect(sum(1, 2)).toBe(3);
    });
 });
