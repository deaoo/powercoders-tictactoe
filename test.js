var test = require('tape');
var tictactoe = require('./tictactoe');

var shout = tictactoe.shout;
var sayHello = tictactoe.sayHello;
var shoutHello = tictactoe.shoutHello;
var removeDuplicates = tictactoe.removeDuplicates;
var allTheSame = tictactoe.allTheSame;


test('shout turns any string into UPPERCASE', function(t) {
    t.equals(shout('hello'), 'HELLO', 'it should shout HELLO');
    t.equals(shout(), null, 'if no string is given, it should return null');
    t.equals(shout(6), null, 'if no string is given, it should return null');
    t.end();
});

test.skip('sayHello should say hello the any given person', function(t) {
    t.equals(sayHello('powercoders'), 'Hello powercoders!');
    t.equals(sayHello('World'), 'Hello World!');
    t.end();
});

test.skip('shoutHello should shout the greeting', function(t) {
    t.equals(shoutHello('powercoders'), 'HELLO POWERCODERS!');
    t.equals(shoutHello('World'), 'HELLO WORLD!');
    t.end();
});

test.skip('removeDuplicates removes all duplicates from an array', function(t) {
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
