/**
 * @file cachingDecorator.js
 * @author Vladimir Deminenko
 * @date 20.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/caching-decorator
 * декоратор makeCaching() возвращает обёртку вокруг f(),
 * которая кеширует её результаты
 * @param   {Function}    f     декорируемая функция,
 *                              имеет только один числовой аргумент
 * @returns {Function}          результат выполнения функции f()
 */
function makeCaching(f) {
    let cache = {};

    return function (...args) {
        let arg = args[0];
        let result = cache[arg];

        if (!result) {
            result = f.call(this, arg);
            cache[arg] = result;
        }

        return result;
    }
}
