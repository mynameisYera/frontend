# frontend

okay.
task#1
мен тек css өзгеррттім, кей жерлерде html сайз беру үшін.
responsive design display flex, flex-wrap арқылы жасадым 
2 matchpoint @media запрос жасадым. 1) 1000px 2) 690px
1 ші запроста item width 400px жане flex-wrap себебі 400px әр item container ге сыймайды
2 ші запроста item width 60% жане flex-wrap себебі экран әрдайым 100% болады. егер мен item width 50% десем item 1 қатарға түсіп қалар еді
жане медиа запростарда cart font-size жане active cart өшірдім. неге: себебі кішкендай экраннан бәрібір перемещение көрінбейді.
Жане wrap болғанда container flex, j-c center бердім. Болды!








task#2
Бұл тапсырмада fetch арқылы json инфоны алып name, phon,email шығару болатын.
мен get btn жасадым жане оны басқанда function қойдым. 
Start function json объекттерді алып оларды шығарады.
Ол қалай жұмыс жасайды?
block try:
1) перемнный response аштым. ол fetch жасап алды и сақтады. бірақ ол әлі promise қайтарады. сол үшін,
2) data переменныйға response.json() жазамыз. json(). енді бізде қарапайым object iшіндегі инфо бар.
3) сол алынған data дағы ақпаратты алдын ала ашылған USERS массивіне сақтаймыз. осы кезде жай 1 секундтық таймаут қостым.
4) одан соң getN function ына data ны береміз. getN html переменныйына data дан келген инфоны shygaru фнкциясына береді. Жане html(переменный) ды innerHTML мен шығарады.
5) енді shygaru функциясы қалай жұмыс жасап жатқанын айтсақ: бұл фукция бір ақ перемнный қайтарады ал переменный ішінде html код который getN функциясында innerHTML мен шығып жатқан.

   бонусовый заданиелерге келсек (поиск пользователей и обработку ошибок при загрузке данных екеуін жасадым)
1) ошибка бар екенін көрсететін catch() арқылы жасалды.қате болса QAteee bar деп қатені шығарып береді. ссылканы өзгертіп қарап көруге болады 
2) поиск жасауға маған input керек болды. arrow function аштым value переменныйына event.target.value.toLowerCase() арқылы енгізізген әр бір жаңа әріпті аламын, filtered функциясын аштым жане return ға юзердің атында includes арқылы value бар жоғын анықтап, жаңағы айтқан getN шығаратын фукнцияға data ны қойған жерге filtered беремін.


Назар бөлгендеріңізге рахмет
























