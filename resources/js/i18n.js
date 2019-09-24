import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
	"kk": {
		login: {
			page_title: 'Жүйеге кіру'
		},
		logout: {
			message: 'Жүйеден шығуда...'
		},
'Add New':'Жаңасын қосу',
'All':'Барлығы',
'Are you sure that you want to delete that ':'Осыны өшіруге сенімдісіз бе',
'Are you sure?':'Сіз сенімдісіз бе?',
'Bad credentials': 'Мұндай қолданушы табылмады',
'Cancel':'Болдырмау',
'Choose code group':'Кодтың тобын таңдаңыз',
'Code':'Код',
'Code created successfully':'Код сәтті сақталды',
'Code has already been taken':'Мұндай код қолданылған болатын',
'Code must be with length 17':'Кодтың ұзындығы 17 символдан құралуы керек',
'Codes':'Кодтар',
'Codes create':'Жаңа код толтыру',
'Codes edit':'Кодты өңдеу',
'Create':'Жаңа',
'Delete':'Өшіру',
'Description':'Сипаттамасы',
'Description kk':'Қазақша сипаттамасы',
'Description ru':'Орысша сипаттамасы',
'Filter':'Іздеу',
'Group':'Топ',
'Group Deleted':'Топ өшірілген',
'Group have to be choosen':'Топ таңдалуы шарт',
'Group updated':'Топ өңделді',
'Groups':'Топтар',
'Groups create':'Жаңа топ ашу',
'Groups edit':'Топты өңдеу',
'Loading':'Жүктелінуде',
'Login':'Кіру',
'Logout':'Шығу',
'Migrate':'Көшіру',
'Migrate codes':'Кодтарды көшіру',
'Name':'Атауы',
'Name KK':'Қазақша атауы',
'Name RU':'Орысша атауы',
'Name can not be empty':'Атау толтырылуы қажет',
'Name in kazakh can not be empty':'Қазақша атауды толтырыңыз',
'Name in russian can not be empty':'Орысша атауды толтырыңыз',
'Name kk':'Қазақша атауы',
'Name ru':'Орысша атауы',
'No':'Жоқ',
'Search returned an empty result':'Іздеуіңіз нәтиже бермеді',
'Specify code description in kazakh':'Кодтың қазақша сипаттамасын енгізіңіз',
'Specify code description in russian':'Кодтың орысша сипаттамасын енгізіңіз',
'Specify code name in kazakh':'Кодтың қазақша атауын енгізіңіз',
'Specify code name in russian':'Кодтың орысша атауын енгізіңіз',
'Specify description in kazakh':'Қазақша сипаттамасын енгізіңіз',
'Specify description in russian':'Орысша сипаттамасын енгізіңіз',
'Specify valid email':'Дұрыс email енгізіңіз',
'Subgroup':'Топша',
'Subgroup Deleted':'Топша өшірілді',
'Subgroup created':'Топша сақталды',
'Subgroup updated':'Топша өңделді',
'Subgroups':'Топшалар',
'Subgroups create':'Жаңа топша ашу',
'Subgroups edit':'Топшаны өңдеу',
'Successfully migrated':'Сәтті көшірілді',
'Total selected':'Жалпы таңдалғандар',
'Total to be migrated':'Жалпы көшірілетіні',
'Type': 'Түрі',
'Update':'Өңдеу',
'User Deleted':'Қолданушы жойылды',
'User updated':'Қолданушы өңделді',
'Users':'Қолданушылар',
'Users create':'Жаңа қолданушы қосу',
'Users edit':'Қолданушыны өңдеу',
'Yes':'Ия',
'You have to apply some filters before selecting all':'Барлығын таңдардың алдында фильтр-ды қолданғаныңыз шарт',
'You have to apply some filters before selecting all items':'Барлығын таңдардың алдында фильтр-ды қолданғаныңыз шарт',
'ZKS':'ЗКС',
'codes migrated: ':'кодтар көшірілді',
'subgroups migrated: ':'топшалар көшірілді',
'isZKS':'КСС белгісі',
'updated successfully':'сәтті өңделді',
'WORK': 'Жұмыс',
'SERVICE': 'Қызмет',
'GOODS': 'Тауар',
'sort': 'сорт.',
'The given data was invalid.': 'Мәлімет дұрыс толтырылмады',
'validation.unique_group_id_and_name_ru':'Мұндай топтағы орысша топша атауы қолданылған',
'validation.unique_is_z_k_s_and_name_ru':'Мұндай топ аты және КСС белгісі қолданылған',
'The name ru has already been taken.':'Орысша атауы қолданылған',
'The name kk has already been taken.':'Қазақша атауы қолданылған',
'Not Found':'Бет табылмады',
'Woops! Looks like the page you requested cannot be found.':'Сіз іздеген бет табылмады',
'Apply some filters before migrating all':'Көшірудің алдында фильтр қолдануыңыз шарт',
'Items per page':'Кестедегі элементтер саны',
'Settings':'Баптаулар',
'Language':'Тіл',
'Save':'Сақтау',
'Saved': 'Сақталған',
	},
	"ru": {
		login: {
			page_title: 'Войти в систему'
		},
		logout: {
			message: 'Выход из системы...'
		},
'Add New':'Добавить',
'All':'Все',
'Are you sure that you want to delete that ':'Вы уверены, что хотите удалить это',
'Are you sure?':'Вы уверены?',
'Bad credentials': 'Неверные креденциалы',
'Cancel':'Отмена',
'Choose code group':'Выберите группу кода',
'Code':'Код',
'Code created successfully':'Код сохранен успешно',
'Code has already been taken':'Такой код уже используется',
'Code must be with length 17':'Длина кода должна состоять из 17 цифр',
'Codes':'Коды',
'Codes create':'Создание кода',
'Codes edit':'Изменение кода',
'Create':'Создать',
'Delete':'Удалить',
'Description':'Характеристика',
'Description kk':'Характеристика на казахском',
'Description ru':'Характеристика на русском',
'Filter':'Поиск',
'Group':'Группа',
'Group Deleted':'Группа удалена',
'Group have to be choosen':'Группа должна быть выбрана обязательно',
'Group updated':'Группа изменена',
'Groups':'Группы',
'Groups create':'Создать группу',
'Groups edit':'Изменить группу',
'Loading':'Загрузка',
'Login':'Ввойти',
'Logout':'Выйти',
'Migrate':'Перенести',
'Migrate codes':'Перенести коды',
'Name':'Наименование',
'Name KK':'Наименование на казахском',
'Name RU':'Наименование на русском',
'Name can not be empty':'Наименование не может быть пустым',
'Name in kazakh can not be empty':'Наименование на казахском не может быть пустым',
'Name in russian can not be empty':'Наименование на русском не может быть пустым',
'Name kk':'Наименование на казахском',
'Name ru':'Наименование на русском',
'No':'Нет',
'Search returned an empty result':'Поиск дал пустой результат',
'Specify code description in kazakh':'Заполните описание кода на казахском',
'Specify code description in russian':'Заполните описание кода на русском',
'Specify code name in kazakh':'Заполните наименование на казахском',
'Specify code name in russian':'Заполните наименование на русском',
'Specify description in kazakh':'Заполните спецификацию на казахском',
'Specify description in russian':'Заполните спецификацию на русском',
'Specify valid email':'Введите правильный email',
'Subgroup':'Подгруппа',
'Subgroup Deleted':'Подгруппа удалена',
'Subgroup created':'Подгруппа создана',
'Subgroup updated':'Подгруппа изменена',
'Subgroups':'Подгруппы',
'Subgroups create':'Создание подгруппы',
'Subgroups edit':'Изменение подгруппы',
'Successfully migrated':'Успешно перенесены',
'Total selected':'Всего выбрано',
'Total to be migrated':'Всего будет перенесено',
'Type': 'Тип',
'Update':'Изменить',
'User Deleted':'Пользователь удален',
'User updated':'Пользователь изменен',
'Users':'Пользователи',
'Users create':'Создание пользователя',
'Users edit':'Изменение пользователья',
'Yes':'Да',
'You have to apply some filters before selecting all':'Необходимо применить поиск перед выделением всех',
'You have to apply some filters before selecting all items':'Необходимо применить поиск перед выделением всех элементов',
'ZKS':'ЗКС',
'codes migrated: ':'коды перенесены',
'subgroups migrated: ':'подгруппы перенесены',
'isZKS':'признак ЗКС',
'updated successfully':'успешно изменен(а)',
'WORK': 'Работа',
'SERVICE': 'Услуга',
'GOODS': 'Товар',
'sort': 'сорт.',
'The given data was invalid.': 'Введенные данные не корректны',
'validation.unique_group_id_and_name_ru':'В данной группе указанное наименование на русском уже используется',
'The name ru has already been taken.':'Наименование на русском уже используется',
'The name kk has already been taken.':'Наименование на казахском уже используется',
'Not Found':'Не найдено',
'Woops! Looks like the page you requested cannot be found.':'Страница которую вы искали не найдена',
'Apply some filters before migrating all':'Перед переносом проведите поиск',
'validation.unique_is_z_k_s_and_name_ru':'Данное наименование и признак ЗКС уже используются',
'Items per page':'Элементы в таблице',
'Settings':'Настройки',
'Language':'Язык',
'Save':'Сохранить',
'Saved': 'Сохранено',
	},
}

export const i18n = new VueI18n({
  	locale: 'kk', 
	fallbackLocale: 'kk',
	silentTranslationWarn: true,
  	messages: messages, // set locale messages
})