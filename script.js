function generateCompliment() {
    const compliments = [
       "Светлана, ты просто невероятно красивая!",
        "Светлана, твоя улыбка освещает весь мир!",
        "Светлана, ты самая добрая и заботливая!",
        "Светлана, твоя энергия вдохновляет всех вокруг!",
        "Светлана, ты умна, талантлива и прекрасна!",
        "Светлана, твоя доброта не знает границ!",
        "Светлана, ты настоящая королева!",
        "Светлана, твоя красота завораживает!",
        "Светлана, ты самая обаятельная и привлекательная!",
        "Светлана, ты делаешь мир лучше!",
        "Светлана, твоя мудрость восхищает!",
        "Светлана, ты светишься изнутри!",
        "Светлана, ты вдохновляешь на подвиги!",
        "Светлана, твой стиль безупречен!",
        "Светлана, ты всегда находишь нужные слова!",
        "Светлана, твоя улыбка заразительна!",
        "Светлана, ты настоящий друг!",
        "Светлана, твоя щедрость не знает границ!",
        "Светлана, ты всегда поддержишь в трудную минуту!",
        "Светлана, твоя уверенность вдохновляет!",
        "Светлана, ты делаешь мир ярче!",
        "Светлана, ты настоящая звезда!",
        "Светлана, твоя сила духа восхищает!",
        "Светлана, ты всегда видишь лучшее в людях!",
        "Светлана, ты обладаешь невероятной харизмой!",
        "Светлана, твоя доброта согревает сердца!",
        "Светлана, ты умеешь находить радость в мелочах!",
        "Светлана, ты всегда готова прийти на помощь!",
        "Светлана, твоя честность вызывает уважение!",
        "Светлана, ты умеешь слушать и слышать!",
        "Светлана, ты настоящий пример для подражания!",
        "Светлана, твоя жизнерадостность заразительна!",
        "Светлана, ты всегда полна идей!",
        "Светлана, ты умеешь радоваться успехам других!",
        "Светлана, твоя искренность подкупает!",
        "Светлана, ты всегда остаешься собой!",
        "Светлана, ты умеешь создавать уют!",
        "Светлана, ты обладаешь невероятной интуицией!",
        "Светлана, ты всегда находишь выход из любой ситуации!",
        "Светлана, ты умеешь вдохновлять на мечты!",
        "Светлана, твоя отзывчивость не знает границ!",
        "Светлана, ты умеешь видеть красоту в простом!",
        "Светлана, ты всегда полна энтузиазма!",
        "Светлана, твоя справедливость вызывает уважение!",
        "Светлана, ты умеешь находить общий язык с кем угодно!",
        "Светлана, ты всегда готова учиться новому!",
        "Светлана, ты обладаешь невероятной стойкостью!",
        "Светлана, ты умеешь ценить каждый момент!",
        "Светлана, ты настоящий оптимист!",
        "Светлана, твоя нежность делает мир лучше!",
        "Светлана, ты умеешь вдохновлять на перемены!",
		"Светик, ты такая хорошулька",
		"Светик, ты такая симпампулька"
    ];

    const randomIndex = Math.floor(Math.random() * compliments.length);
    const complimentText = compliments[randomIndex];
    const complimentElement = document.getElementById('compliment');

    complimentElement.style.opacity = 0;
    setTimeout(() => {
        complimentElement.textContent = complimentText;
        complimentElement.style.opacity = 1;
    }, 300);
}
const correctPasswordHash = "7ab6244fc6ae9621510dd5777dba50144950b0f898972247eecbef7ae724e59c";

async function checkPassword() {
    const inputPassword = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');
    const authContainer = document.getElementById('auth-container');
    const contentContainer = document.getElementById('content-container');

    // Хешируем введённый пароль
    const inputHash = await hashPassword(inputPassword);

    if (inputHash === correctPasswordHash) {
        authContainer.classList.add('hidden');
        contentContainer.classList.remove('hidden');
    } else {
        errorMessage.classList.remove('hidden');
    }
}

// Функция для хеширования пароля
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}