<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Developer_social_page_app_0"></a>Developer social page app</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3">Приложение-профиль разработчика, реализовано с помощью библиотеки React.</p>
<p class="has-line-data" data-line-start="4" data-line-end="8">Для взаимодействия с картой использовал изначально yandex-maps, однако по ряду причин<br>
пришлось перейти на google-map-react.<br>
Для геокодина строк в координаты использовал api trueway-geocoding.p.rapidapi.comи и для<br>
одного GET запроса использовал fetch.</p>
<p class="has-line-data" data-line-start="9" data-line-end="10">Демо-страницы можно посмотреть здесь: <a href="http://example.comhttps://developer-profile-1yk23nmwe-ireull.vercel.app">developer profile</a></p>
<p class="has-line-data" data-line-start="12" data-line-end="23">Были реализованы следующие вещи:<br>
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
<p class="has-line-data" data-line-start="24" data-line-end="25">Для преобразования страницы в js to pdf, использовал jsPdf, но из-за того, что jsPdf плохо поддерживает реакт 17+ съезжает карта</p>
