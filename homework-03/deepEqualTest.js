/**
 * @file deepEqual.test.js
 * @author Polina Kurbatova
 * @date 08.08.2017
 */
'use strict';

describe('deepEqual', function() {

    it('Передаём пустые объекты', function() {
        assert.strictEqual(deepEqual({}, {}), true);
    });

    it('Передаём null и undefined', function() {
        assert.strictEqual(deepEqual(null, undefined), false);
    });

    it('Передаём null и object', function() {
        assert.strictEqual(deepEqual(null, {}), false);
    });

    it('Передаём null и null', function() {
        assert.strictEqual(deepEqual(null, null), true);
    });

    it('Передаём одинаковые числа', function() {
        assert.strictEqual(deepEqual(2, 2), true);
    });

    it('Передаём разные числа', function() {
        assert.strictEqual(deepEqual(2, 3), false);
    });

    it('Передаём одинаковые строки', function() {
        assert.strictEqual(deepEqual(' d', ' d'), true);
    });

    it('Передаём 0 и null', function() {
        assert.strictEqual(deepEqual(0, null), false);
    });

    it('Ничего не передаём', function() {
        assert.strictEqual(deepEqual(), false);
    });

    it('Передаём 1 объект', function() {
        assert.strictEqual(deepEqual(0), false);
    });


    it('Передаём объекты с разными свойствами', function() {
        let user = {
            name: 'Ilya'
        };
        let user2 = {
            age: 28,
            name: 'Ilya'
        };

        assert.strictEqual(deepEqual(user, user2), false);
    });

    it('Передаём объекты с одинаковыми свойствами в разном порядке', function() {
        let user = {
            name: 'Ilya',
            age: 28,
            prop: {
                isCoder: true
            }
        };

        let user2 = {
            age: 28,
            prop: {
                isCoder: true
            },
            name: 'Ilya'
        };
        assert.strictEqual(deepEqual(user, user2), true);
    });

    it('Передаём объекты с разными свойствами в разном порядке', function() {
        let user = {
            name: 'Ilya',
            age: 28,
            prop: {
                isCoder: true
            }
        };

        let user2 = {
            age: 25,
            prop: {
                isCoder: true
            },
            name: 'Ilya'
        };
        assert.strictEqual(deepEqual(user, user2), false);
    });

    it('Передаём одинаковые массивы', function() {
        let arr1 = ['1', '2'];
        let arr2 = ['1', '2'];
        assert.strictEqual(deepEqual(arr1, arr2), true);

    });

});
