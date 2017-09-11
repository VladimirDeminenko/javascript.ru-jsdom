/**
 * @file createObjectTree.js
 * @author Vladimir Deminenko
 * @date 08.09.2017
 */

'use strict';

/*
Результат должен быть таким:
<div id="tree">
    <ul>
        <li>Рыбы
            <ul>
                <li>Форель</li>
                <li>Щука</li>
            </ul>
        </li>
        <li>Деревья
            <ul>
                <li>Хвойные
                    <ul>
                        <li>Лиственница</li>
                        <li>Ель</li>
                    </ul>
                </li>
                <li>Цветковые
                    <ul>
                        <li>Берёза</li>
                        <li>Тополь</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
*/

(function () {
    let data = {
        "Рыбы": {
            "Форель": {},
            "Щука": {}
        },

        "Деревья": {
            "Хвойные": {
                "Лиственница": {},
                "Ель": {}
            },
            "Цветковые": {
                "Берёза": {},
                "Тополь": {}
            }
        }
    };

    function createTree(container, data) {
        if (isEmpty(data)) {
            return;
        }

        let ul = document.createElement('ul');

        for (let prop in data) {
            let li = document.createElement('li');

            li.innerHTML = prop;
            ul.appendChild(li);

            createTree(li, data[prop]);
        }

        container.appendChild(ul);
    }

    function isEmpty(obj) {
        for (let key in obj) {
            return false;
        }

        return true;
    }

    createTree(document.getElementById('tree'), data);
})();
