<p class="has-line-data" data-line-start="0" data-line-end="2">Developer social page app<br>
Приложение-профиль разработчика, реализовано с помощью библиотеки React.</p>
<p class="has-line-data" data-line-start="3" data-line-end="7">Для взаимодействия с картой использовал изначально yandex-maps, однако по ряду причин<br>
пришлось перейти на google-map-react.<br>
Для геокодина строк в координаты использовал api trueway-geocoding.p.rapidapi.comи и для<br>
одного GET запроса использовал fetch.</p>
<p class="has-line-data" data-line-start="8" data-line-end="9">Демо-страницы можно посмотреть здесь: developer profile</p>
<p class="has-line-data" data-line-start="10" data-line-end="21">Были реализованы следующие вещи:<br>
1.Редактирование поля Имени и Страны и их валидацию, сохранение происходит состояния происходит<br>
после потери фокуса.<br>
2.Добавление и удаление скилов пользователя<br>
3.Фильтрацию скилов от более сильного к менее сильному, так же они обновляются в поле<br>
с добавлением скилов.<br>
4.Интерактив при указании в имении специальных символов $%#*(@.<br>
5.Редактирование поля со страной, при изменении страны происходит перенос<br>
к выбранному местоположению на карте.<br>
6.Размещение данные я поместил в localStorage, написав свой хук useLocalStorage.<br>
7.Семантичность на странице</p>
<p class="has-line-data" data-line-start="22" data-line-end="23">Я добавил typescript и протипизировал данные, их разменсит по архитектурному стилю в папку <a href="https://github.com/ireull/developer-profile/tree/master/src/domain">domain</a></p>
<p class="has-line-data" data-line-start="24" data-line-end="25">Для преобразования страницы в js to pdf, использовал jsPdf, но из-за того, что jsPdf плохо поддерживает реакт 17+ карта немного съезжает</p>
