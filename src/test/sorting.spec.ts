import {merge} from '../sorting'

describe("merging test", () => {
    it("Result", () => {
        expect(merge([1,2],[1,2])).toStrictEqual([1,2,1,2])
    });

    it("Result", () => {
        expect(merge([1,2,3],[4,5,6])).toStrictEqual([1,2,3,4,5,6])
    });

});