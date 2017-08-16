/**
 * @file replacePropertyGetterTest.js
 * @author Vladimir Deminenko
 * @date 16.08.2017
 */

'use strict';

describe("replace property getter", function () {
    let user;

    beforeEach(function () {
        user = new User('Василий Попкин');
    });

    afterEach(function () {
        user = null;
    });

    it("returns first name", function () {
        assert.equal(user.firstName, "Василий");
    });

    it("returns last name", function () {
        assert.equal(user.lastName, "Попкин");
    });

    it("returns changed full name", function () {
        user.lastName = 'Сидоров';
        user.firstName = 'Михаил';
        assert.equal(user.fullName, "Михаил Сидоров");
    });
});
