export const merge = (collection_1: Array<Number>, collection_2: Array<number>) => {
    let returnCollection = [];
    let idx_1 = 0;
    let idx_2 = 0;
    while(idx_1 < collection_1.length || idx_2 < collection_2.length) {
        if(collection_1.length === idx_1) {
            return returnCollection.concat(collection_2.splice(idx_2, collection_2.length))
        }
        if(collection_2.length === idx_2) {
            return returnCollection.concat(collection_1.splice(idx_1, collection_1.length))
        }
        if(collection_1[idx_1] <= collection_2[idx_2]) {
            returnCollection.push(collection_1[idx_1]);
            idx_1 += 1;
        }
        else {
            returnCollection.push(collection_2[idx_2])
            idx_2 += 1;
        }
    }
    return returnCollection;
}