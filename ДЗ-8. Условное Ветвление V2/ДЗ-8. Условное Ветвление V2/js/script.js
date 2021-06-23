let yearOfBirth = prompt('Введите Ваш год рождения');
let now = new Date().getFullYear();
let ageCount = now - Number(yearOfBirth);

let city;
let sport;


if (yearOfBirth == null) {
    alert('Жаль, что Вы не захотели ввести свой год рождения.')
}
else  {
    yearOfBirth === false ? ageInfo = '1. Жаль, что Вы не захотели ввести свой год рождения. ' : ageInfo = '1. Вам ' + ageCount + ' лет. '
    city = prompt('В каком городе Вы живёте?');
    switch (city) {
        case 'Киев':
            var cityChosen = '2. Ты живешь в столице Украины.'
            break;
        case 'Москва':
            var cityChosen = '2. Ты живешь в столице РФ.'
            break;
        case 'Минск':
            var cityChosen = '2. Ты живешь в столице Белоруссии.'
            break;
        default:
            var cityChosen = 'Ты живёшь в городе ' + city
    }
    if (city == null) {
        alert('Жаль, что Вы не захотели ввести свой город.')
    }
    else 
        {
        city == false ? cityInfo = '2. Жаль, что Вы не захотели ввести свой город. ' : cityInfo = cityChosen;
        sport = prompt('Какой Ваш любимый вид спорта? Гонки, футбол или бокс?')
        if (sport === null) {
            alert('Жаль, что Вы не захотели ввести свой вид спорта.')
        }
        else {
            switch (sport) {
                case 'гонки':
                    var nameChosen = ' 3. Круто! Хочешь стать как Шумахер!'
                    break;
                case 'футбол':
                    var nameChosen = ' 3. Круто! Хочешь стать как Роналду!'
                    break;
                case 'бокс':
                    var nameChosen = ' 3. Круто! Хочешь стать как Кличко!'
                    break;
                default:
                    var nameChosen = ' 3. Твой выбор это ' + sport
            }
            sport == false ? sportInfo = '3. Жаль, что Вы не захотели ввести свой вид спорта.' : sportInfo = nameChosen
            alert(ageInfo + cityInfo + sportInfo)
        }
    }
}