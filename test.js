var test = require('tape');
var { removeDuplicates, allTheSame } = require('./tictactoe');

test('removeDuplicates removes all duplicates from an array', function(t) {
    t.deepEquals(removeDuplicates([1, 2, 3]), [1, 2, 3]);
    t.deepEquals(removeDuplicates([1, 1, '1']), [1, '1'], 'data types matter');
    t.deepEquals(removeDuplicates([0, 'a', null, undefined, 'a', null]), [0, 'a', null, undefined]);
    t.deepEquals(removeDuplicates([]), []);
    t.end();
});

test.skip('allTheSame checks if all elements in array are the same', function(t) {
    t.equal(allTheSame([1, 1, 1]), true);
    t.equal(allTheSame([2, 2, '2']), false, 'data types matter');
    t.equal(allTheSame([null, undefined]), false, 'null and undefined are not the same thing');
    t.equal(allTheSame([]), true, 'returns true for an empty array');
    t.end();
});
