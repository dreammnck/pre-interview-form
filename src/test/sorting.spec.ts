import {merge} from '../sorting'

describe("merging test", () => {
    it("Result", () => {
        expect(merge([1,2],[1,2])).toStrictEqual([1,1,2,2])
    });

    it("Result", () => {
        expect(merge([1,2,3],[4,5,6])).toStrictEqual([1,2,3,4,5,6])
    });

    it("Result", () => {
        expect(merge([1,2,3,4],[3,7])).toStrictEqual([1,2,3,3,4,7])
    });

    it("Result", () => {
        expect(merge([4,5],[1,2,3])).toStrictEqual([1,2,3,4,5])
    });

});