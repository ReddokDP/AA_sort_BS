//Элементы HTML.
let upload = document.getElementById('upload');
let outputBx = document.getElementById('outputBx');
let outputBx1 = document.getElementById('outputBxs');
let countRed = document.getElementById('outputBxs1')
let outputBx2 = document.getElementById('outputBxss');
let countSort = document.getElementById('outputBxss1')
let outputBx3 = document.getElementById('outputBxsss')
let countSort1 = document.getElementById('outputBxsss1')
let textSucCopy = document.getElementById('sucCopy')
let listMember = document.getElementById('listMember')


//Нужные переменные для общего скоупа.
let someFileText;
let resultT;


listMember.oninput = function() {
	someFileText = outputBx.textContent = listMember.value
}


//Форматирование текста от всяких цифр, знаков.
function refreshText() {
	let alltext = someFileText
		.replace(/[0-9]/g, '')
		.replace(/[.]/g, '')
		.replace(/[\[\]]/g, '')
		.replace(/\n/g, ' ')
		.split(' ')
		.filter(function (el) {
			return el != ''
		})  //replace(/[.]/g, "")
	outputBx1.textContent = alltext
	countRed.textContent = `Всего в рейде - ${alltext.length}.`
	console.log(typeof alltext, `Вывод замен символов - ${alltext}`)
	resultT = alltext
}

//Открытие сайта для парсинга изображения.
function openSite() {
	window.open('https://www.imagetotext.info/ru/image-to-text')
}

//Словарь участников гильдии.
function fullNames() {
	const dictionaryMember = {
		'Артафырк' : 'Артафырк',
		'Артафы' : 'Артафырк',
		'Артаф' : 'Артафырк',
		'Арта' : 'Артафырк',
		'Артафыр' : 'Артафырк',

		'Пулькавпопульку' : 'Пулькавпопульку',
		'Пулькав' : 'Пулькавпопульку',


		'Сукафрукт' : 'Сукафрукт',

		'Nedorazumeniye' : 'Nedorazumeniye' ,
		'Nedoraz' : 'Nedorazumeniye' ,


		'Элендиль' : 'Элендиль',
		'Ckiff' : 'Ckiff',
		'Imosik' : 'Imosik',
		'Kity' : 'Kity' ,
		'Napodlete' : 'Napodlete',
		'Nktss' : 'Nktss',
		'Передернуластвол' : 'Передернуластвол',


		'Pierferdi' : 'Pierferdi',
		'Wasteaway' : 'Wasteaway',
		'Дикийкраб' : 'Дикийкраб',
		'Дикийкр' : 'Дикийкраб',
		
		'Эльрос' : 'Эльрос',
		'Страдар' : 'Страдар',
		'Xotabchh' : 'Xotabchh',
		'Staap' : 'Staap',
		'Toldyaso' : 'Toldyaso' ,
		'Tokdyaso' : 'Toldyaso' ,


		'Сиятьтвоюмать' : 'Сиятьтвоюмать',
		'Сиятьтв' : 'Сиятьтвоюмать',



		'Гиройд' : 'Гиройд',
		'Япашка' : 'Япашка',
		'Япашк' : 'Япашка',
		'Япаш' : 'Япашка',
		'Япашка' : 'Япашка',

		
		'Отишка' : 'Отишка',
		'Inthelastgame' : 'Inthelastgame' ,
		'Inthelastg' : 'Inthelastgame' ,
		'Inthelast' : 'Inthelastgame' ,

		'Жанклодмамдрал' : 'Жанклодмамдрал' ,
		'Жанкл' : 'Жанклодмамдрал' ,

		'Notss' : 'Notss',
		'Harlin' : 'Harlin',
		'Сияюкакбалантайс' : 'Сияюкакбалантайс',
		'Сияюкак' : 'Сияюкакбалантайс',
		'Сияюка' : 'Сияюкакбалантайс',
		'Силюка' : 'Сияюкакбалантайс',


		'Сиятьвбездне' : 'Сиятьвбездне',
		'Сиятьвбе' : 'Сиятьвбездне',
		'Сиятьвб' : 'Сиятьвбездне',



		'Акронн' : 'Акронн',
		'Арсюшасильный' : 'Арсюшасильный',
		'Арсюша' : 'Арсюшасильный',

		'Apcio' : 'Арсюшасильный',
		'Арсюш' : 'Арсюшасильный',
		'Арсю' : 'Арсюшасильный',

		'Дедмаксим' : 'Дедмаксим' ,
		'Дедм' : 'Дедмаксим' ,
		'Дед' : 'Дедмаксим' ,
		'Де' : 'Дедмаксим' ,
		'Д' : 'Дедмаксим' ,

		'Manzxc' : 'Manzxc',

		'Стивблоуджобс' :'Стивблоуджобс' ,
		'Стивбло' :'Стивблоуджобс' ,
		'Стивбл' :'Стивблоуджобс' ,
		'Стивб' :'Стивблоуджобс' ,
		'Стив' :'Стивблоуджобс' ,
		'Сти' :'Стивблоуджобс' ,

		'Mallakat' : 'Mallakat',

		'Жрибанку' : 'Жрибанку',
		'Asvien' : 'Asvien',
		'Womanzxc' : 'Womanzxc' ,
		'Thira' : 'Thira',
		'Kiselik' : 'Kiselik',
		'Zicelik' : 'Zicelik' ,

		'Пивнаясиська' : 'Пивнаясиська' ,
		'Пивнаяс' : 'Пивнаясиська' ,
		'Пивная' : 'Пивнаясиська' ,
		'Пивна' : 'Пивнаясиська' ,
		'Пивн' : 'Пивнаясиська' ,

		'Marjanaa' : 'Marjanaa',
		'Коварныйкусь' : 'Коварныйкусь',
		'Arbuzer' : 'Arbuzer' ,

		'Шизадеда' : 'Шизадеда' ,
		'Шиза' : 'Шизадеда' ,
		'Ши' : 'Шизадеда' ,
		'Шизадела' : 'Шизадеда' ,

		'Трусикибусики' : 'Трусикибусики',
		'Трусикиб' : 'Трусикибусики',
		'Трусики' : 'Трусикибусики',

		'Фурманясодомит' : 'Фурманясодомит',
		'Фурманя' : 'Фурманясодомит',
		'Фурман' : 'Фурманясодомит',
		'Фурм' : 'Фурманясодомит',

		'Гестья' : 'Гестья' ,
		'Увыньк' : 'Увыньк',
		'Лаувейя' : 'Лаувейя' ,
		'Хилупа' : 'Хилупа',
	}
	const completeName = []
	resultT.forEach(resultTs => {
		const fullName = dictionaryMember[resultTs]
		completeName.push(fullName)
		const completeNameSort = completeName.filter(el => el !== undefined)
		// console.log(`Итерация - ${completeNameSort}`)
		let notTwice = [...new Set(completeNameSort)]
		console.log(notTwice)
		outputBx3.innerText = notTwice
		countSort1.textContent = `Всего в рейде - ${notTwice.length}.`
	})
}

//Копирование готовой строки для вставки в таблицу гугл.
function copyText() {
	var range = document.createRange()
	range.selectNode(outputBx3)
	window.getSelection().removeAllRanges()
	window.getSelection().addRange(range)
	document.execCommand('copy')
	window.getSelection().removeAllRanges()
	textSucCopy.textContent = 'Скопировано в буфер обмена Ctrl + Shift + V для вставки в таблицу'
}
