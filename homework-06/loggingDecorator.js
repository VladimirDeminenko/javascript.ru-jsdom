/**
 * @file loggingDecorator.js
 * @author Vladimir Deminenko
 * @date 20.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/logging-decorator
 * https://learn.javascript.ru/task/logging-decorator-arguments
 * декоратор makeLogging() возвращает обёртку вокруг f(),
 * которая при каждом вызове записывает («логирует») аргументы в массив log,
 * а затем передает вызов в f()
 * @param   {Function}    f     декорируемая функция
 * @param   {Array}       log   массив для сохраняемых аргументов
 * @returns {Function}          резудьтат выполнения функции f()
 */
function makeLogging(f, log) {
    return function (...args) {
        if (args.length === 1) {
            log.push(args[0]);
        } else {
            log.push(args);
        }

        return f.apply(this, args);
    }
}
