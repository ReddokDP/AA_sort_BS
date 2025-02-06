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
	let alltext = someFileText.replace(/[0-9]/g, "").replace(/\n/g, " ").split(" ").filter(function(el) {return el != ""})  //replace(/[.]/g, "")
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
		'Сынбибоя' : 'Сынбибоя',
		'Сынбибол' : 'Сынбибоя',
		'Karakurt' : 'Karakurt',
		'Wendigo' : 'Wendigo',
		'Яруха' : 'Яруха',
		'Mescalin' : 'Mescaline',
		'Mescaline' : 'Mescaline',
		'Takeshi' : 'Takeshi',
		'Гарру' : 'Гарру',
		'Сатанана' : 'Сатананашрулевой',
		'Прощерес' : 'Прощереснуть',
		'Прощер' : 'Прощереснуть',
		'Прощер.' : 'Прощереснуть',
		'Прощер..' : 'Прощереснуть',
		'Темный.' : 'Тёмныйлучник',
		'Темный' : 'Тёмныйлучник',
		'Тёмный' : 'Тёмныйлучник',
		'Тёмный.' : 'Тёмныйлучник',
		'Тёмныйл.' : 'Тёмныйлучник',
		'Тёмныйл..' : 'Тёмныйлучник',
		'Тёмныйл...' : 'Тёмныйлучник',
		'Ckif' : 'Ckif',
		'Imos' : 'Imos',
		'Kittyy' : 'Kittyy',
		'Lriglana' : 'Lriglana',
		'Nkts' : 'Nkts',
		'Дашуляси' : 'Дашулясильная',
		'Дашуляс...' : 'Дашулясильная',
		'Дашуляс.' : 'Дашулясильная',
		'Дашуляс' : 'Дашулясильная',
		'Дашуляс..' : 'Дашулясильная',
		'Дикийкраб' : 'Дикийкраб',
		'Дикийкр' : 'Дикийкраб',
		'Дикийкр.' : 'Дикийкраб',
		'Дикийкр..' : 'Дикийкраб',
		'Дикийкр...' : 'Дикийкраб',
		'Тёмныймаг' : 'Тёмныймаг',
		'Lghtngst' : 'Lghtngstrm',
		'Lghtngstrm' : 'Lghtngstrm',
		'Lghtngst.' : 'Lghtngstrm',
		'Lghtngst..' : 'Lghtngstrm',
		'Lghtngst...' : 'Lghtngstrm',
		'Крупье' : 'Крупье',
		'Хотабыч' : 'Хотабыч',
		'Aquil' : 'Aquil',
		'Ligas' : 'Ligas',
		'Qiroid' : 'Qiroid',
		'Qirold' : 'Qiroid',
		'Курля' : 'Курля',
		'Кур' : 'Курля',
		'Kyp' : 'Курля',
		'Kyp.' : 'Курля',
		'Кур.' : 'Курля',
		'Кур..' : 'Курля',
		'Отишка' : 'Отишка',
		'Отишка': 'Отишка',
		'Пеcкарь': 'Пескарьиванович',
		'Сунг' : 'Сунг',
		'Тройныем' : 'Тройныемахать',
		'Тройные.' : 'Тройныемахать',
		'Тройны' : 'Тройныемахать',
		'Aufvvl': 'Aufvvledersehen',
		'Knlz' : 'Knlz',
		'Nafnaf' : 'Nafnaf',
		'Notss' : 'Notss',
		'Akron': 'Akron',
		'Арсюшаси' : 'Арсюшасильный',
		'Арсюшаси..' : 'Арсюшасильный',
		'Арсюшаси.' : 'Арсюшасильный',
		'Арсюша.' : 'Арсюшасильный',
		'Па' : 'Папа',
		'Папа' : 'Папа',
		'Паг' : 'Папа',
		'Хранюд..' : 'Хранюдетей',
		'Хранюд..' : 'Хранювыродков',
		'Хранюд.' : 'Хранюдетей',
		'Хранюд.' : 'Хранювыродков',
		'Nifnif' : 'Nifnif',
		'Malakat' : 'Mallakat',
		'Mallakat' : 'Mallakat',
		'Вредняха' : 'Вредняха',
		'Жрибанку' : 'Жрибанку',
		'Радарка' : 'Радарка',
		'Asviern' : 'Asviern',
		'Asviem' : 'Asviern',
		'Aufw' : 'Aufwledersehen',
		'Auflede.' : 'Aufwledersehen',
		'Auflede..' : 'Aufwledersehen',
		'Auflede' : 'Aufwledersehen',
		'Borshche..' : 'Borshchevrkazxc',
		'Borshche.' : 'Borshchevrkazxc',
		'Chipsik' : 'Chipsik',
		'Ibizza' : 'Ibizza',
		'Infectio' : 'Infection',
		'Kiselka' : 'Kiselka',
		'Leamas' : 'Leamas',
		'Lghtngst...' : 'Lghtngstrm',
		'Lghtngst..' : 'Lghtngstrm',
		'Lghtngst.' : 'Lghtngstrm',
		'Lghtngstm' : 'Lghtngstrm',
		'Lghtngstim' : 'Lghtngstrm',
		'Lghtingst' : 'Lghtngstrm',
		'Marjana' : 'Marjana',
		'Nezuko' : 'Nezuko',
		'Nufnuf' : 'Nufnuf',
		'Дочьби' : 'Дочьбибоя',
		'До' : 'Дочьбибоя',
		'Дочьбиб' : 'Дочьбибоя',
		'Дочьби.' : 'Дочьбибоя',
		'До.' : 'Дочьбибоя',
		'Дочьбиб.' : 'Дочьбибоя',
		'Дочьби..' : 'Дочьбибоя',
		'Дочьб.' : 'Дочьбибоя',
		'До..' : 'Дочьбибоя',
		'Дочьбиб..' : 'Дочьбибоя',
		'Доч' : 'Дочьбибоя',
		'Доч.' : 'Дочьбибоя',		
		'Доч..' : 'Дочьбибоя',
		'Доч...' : 'Дочьбибоя',
		'Труси' : 'Трусикиибусики',
		'Труси.' : 'Трусикиибусики',
		'Труси..' : 'Трусикиибусики',
		'Трусики.' : 'Трусикиибусики',
		'Трусики..' : 'Трусикиибусики',
		'Фурманя' : 'Фурманя',
		'Гестия' : 'Гестия',
		'Straits' : 'Straits',
		'Strats' : 'Straits',
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
