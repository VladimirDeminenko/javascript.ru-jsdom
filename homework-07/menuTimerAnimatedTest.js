/**
 * @file menuTimerAnimatedTest.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

describe(`AnimatingMenu`, function () {
    let menu;

    it(`по истечении 1 секунды, вызывается Menu.prototype.open()`, function () {
        menu.open();
        this.clock.tick(1000);

        assert(Menu.prototype.open.calledWith());
    });

    before(function () {
        menu = new AnimatingMenu();
        sinon.stub(Menu.prototype, `open`);
        this.clock = sinon.useFakeTimers(Date.now());
    });

    after(function () {
        Menu.prototype.open.restore();
        this.clock.restore();
        menu = null;
    });
});
