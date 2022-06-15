<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Developer_social_profile_app_0"></a>Developer social profile app</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3">Приложение «Профиль разработчика».</p>
<h2 class="code-line" data-line-start=4 data-line-end=5 ><a id="__4"></a>Возможности приложения</h2>
<ol>
<li class="has-line-data" data-line-start="5" data-line-end="8">Редактирование имени разработчика и страны проживания:
<ul>
<li class="has-line-data" data-line-start="6" data-line-end="7">Поля валидируются на некорректные символы (например <code>$%#*(@</code>), показываются ошибки валидации.</li>
<li class="has-line-data" data-line-start="7" data-line-end="8">Сохранение данных происходит после потери фокуса из поля.</li>
</ul>
</li>
<li class="has-line-data" data-line-start="8" data-line-end="9">Когда изменяется имя, эти изменения отражаются в <code>title</code> страницы.</li>
<li class="has-line-data" data-line-start="9" data-line-end="10">При изменении страны, карта перемещается в новое место.</li>
<li class="has-line-data" data-line-start="10" data-line-end="14">Список скиллов разработчика:
<ul>
<li class="has-line-data" data-line-start="11" data-line-end="12">Скиллы можно добавлять и удалять.</li>
<li class="has-line-data" data-line-start="12" data-line-end="13">Список сортируется от более сильного к более слабому (по опыту).</li>
<li class="has-line-data" data-line-start="13" data-line-end="14">Списки скиллов в шапке страницы и в блоке <code>Experience</code> синхронизированы и обновляются одновременно.</li>
</ul>
</li>
<li class="has-line-data" data-line-start="14" data-line-end="15">Постарался сделать максимально адаптивную верстку — сайтом можно пользоваться как на десктопе, так и на мобильных.</li>
<li class="has-line-data" data-line-start="15" data-line-end="17">Страницу профиля можно скачать в PDF по нажатию на кнопку <code>Print this page</code></li>
</ol>
<h2 class="code-line" data-line-start=17 data-line-end=18 ><a id="___17"></a>Комментарии по реализации</h2>
<ul>
<li class="has-line-data" data-line-start="18" data-line-end="19">Я постарался выделить доменный слой. Для этого использовал TypeScript и протипизировал данные. По архитектурному стилю положил их в папку <a href="https://github.com/ireull/developer-profile/tree/master/src/domain">domain</a>.</li>
<li class="has-line-data" data-line-start="19" data-line-end="20">Написал несколько <a href="https://github.com/ireull/developer-profile/tree/master/src/__tests__">тестов</a>, использовал <code>Jest</code> и <code>React testing library</code>.</li>
<li class="has-line-data" data-line-start="20" data-line-end="21">Измененные данные пользователя сохраняются в <code>LocalStorage</code>. Для этого я написал кастомный хук <code>useLocalStorage</code>.</li>
<li class="has-line-data" data-line-start="21" data-line-end="22">Стили оформил как <code>CSS Modules</code> на <code>SCSS</code></li>
<li class="has-line-data" data-line-start="22" data-line-end="23">Для взаимодействия с картой использовал <code>google-map-react</code>.</li>
<li class="has-line-data" data-line-start="23" data-line-end="24">Для геокодинга строк в координаты использовал api <a href="http://trueway-geocoding.p.rapidapi.com">trueway-geocoding.p.rapidapi.com</a>. Для http запросов использовал <code>fetch</code>.</li>
<li class="has-line-data" data-line-start="24" data-line-end="26">Для сохранения страницы в PDF, использовал <code>react-to-pdf</code> (которая под капотом использует <code>jsPDF</code>). Из-за плохой поддержки Реакт 17+, карта немного съезжает.</li>
</ul>
<p class="has-line-data" data-line-start="26" data-line-end="28">Я хотел уделить больше внимания типизации и написать еще несколько тестов, но понял, что не успею по времени.<br>
Не успел добавить в блок <code>Sample code</code> настоящий код и сделать его подсветку. Планировал для этого использовать <code>React Syntax Highlighter</code>.</p>
<h2 class="code-line" data-line-start=29 data-line-end=30 ><a id="_29"></a>Демо</h2>
<p class="has-line-data" data-line-start="30" data-line-end="31">Я настроил автодеплой на Vercel, демо можно посмотреть здесь — <a href="https://test-task-dev.vercel.app/">Developer profile</a>.</p>
<h3 class="code-line" data-line-start=32 data-line-end=33 ><a id="__32"></a>Локальный запуск</h3>
<ul>
<li class="has-line-data" data-line-start="33" data-line-end="34"><code>yarn start</code></li>
<li class="has-line-data" data-line-start="34" data-line-end="35"><code>yarn test</code></li>
<li class="has-line-data" data-line-start="35" data-line-end="36">Открыть <a href="http://localhost:3000/">http://localhost:3000/</a></li>
</ul>
