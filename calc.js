/* Доработайте калькулятор из прошлых заданий, выдавая сообщение "На ноль делить нельзя!" пользователю, если он пытается поделить на 0. */

// add switch

function showMessage() {

    let x = document.getElementById('x').value;

    let y = document.getElementById('y').value;

    let operation = document.getElementById('operation').value;

    let result = operation;

    switch (result) {
        case '+':
            document.getElementById('result').innerHTML = Number(x) + Number(y); break;
        case '-':
            document.getElementById('result').innerHTML = Number(x) - Number(y); break;

            case '/':
                if (Number(y) === 0) {
                    document.getElementById('result').innerHTML = ('На ноль делить нельзя!');
                    break;
                }
                
            document.getElementById('result').innerHTML = Number(x) / Number(y);
            break;

        case '*':
            document.getElementById('result').innerHTML = Number(x) * Number(y); break;
        default:
            alert('Ошибка!');
}

}

    /* if (operation==="+"){

        document.getElementById('result').innerHTML = Number(x) + Number(y);

    }

    if (operation==="-"){

        document.getElementById('result').innerHTML = Number(x) - Number(y);

    }

    if (operation==="*"){

        document.getElementById('result').innerHTML = Number(x) * Number(y);

    }

    if (operation==="/"){

        document.getElementById('result').innerHTML = Number(x) / Number(y);

    }

    } */