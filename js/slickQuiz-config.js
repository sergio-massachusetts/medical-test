// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Интеллектуальный тест",
        "main":    "<p>Думаешь ты самый крутой решатель в этом городе? Что ж, гринго, это мы сейчас проверим!</p>",
        "results": "<p>Этот тест был под силу не каждому. Ты молодец, приходи еще.</p>",
        "level1":  "Первак",
        "level2":  "Второкур",
        "level3":  "Третий курс",
        "level4":  "Старшой",
        "level5":  "Синьорчик" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Под каким номером идет буква А в русском алфавите?",
            "a": [
                {"option": "8",      "correct": false},
                {"option": "14",     "correct": false},
                {"option": "1",      "correct": true},
                {"option": "23",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> Буква А — это первая буква в алфавите!</p>",
            "incorrect": "<p><span>Неверно.</span> Ты вообще ходил в детский сад?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Чем из перечисленного ты обычно завтракаешь?",
            "a": [
                {"option": "Бекон и яйца",                "correct": false},
                {"option": "Фрукты, хлопушки и йогурт",   "correct": true},
                {"option": "Остатки пиццы",               "correct": false},
                {"option": "Тосты и молоко",              "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Верно!</span> С твоим здоровьечком, пожалуй, все в порядке.</p>",
            "incorrect": "<p><span>Неверно.</span> Тебе нужно перейти на пп, мой друг.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Где ты находишься сейчас? Выбери все, что подходит.",
            "a": [
                {"option": "Земля",                 "correct": true},
                {"option": "Плутон",                "correct": false},
                {"option": "В телефоне",            "correct": true},
                {"option": "Млечный путь",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span> Ты просто гений, чувак.</p>",
            "incorrect": "<p><span>Не совсем.</span> Ты вообще-то в матрице. Но хорошая попытка</p>" // no comma here
        },
        { // Question 4
            "q": "Сколько сантиметров осадков выпадает в Красноярске в год?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span> Не знал, что ты знаешь это! Отлично!</p>",
            "incorrect": "<p><span>Неверно.</span> Прости, но ты лузер. Любой первоклассник ответит.</p>" // no comma here
        },
        { // Question 5
            "q": "Земля больше чем баскетбольный мяч?",
            "a": [
                {"option": "Да",    "correct": true},
                {"option": "Нет",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Супер!</span> Ты должно быть очень умный!</p>",
            "incorrect": "<p><span>Ноуп!</span> Ты вообще с какой планеты?!?</p>" // no comma here
        } // no comma here
    ]
};
