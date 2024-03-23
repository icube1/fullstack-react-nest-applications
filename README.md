# Todo List

Це простий додаток для списку справ, побудований за допомогою NestJS, TypeORM, PostgreSQL та Docker.

## Використані технології
- **NestJS**: Прогресивний фреймворк Node.js для побудови ефективних, надійних та масштабованих серверних додатків.
- **TypeORM**: ORM, який може працювати на платформах NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo та Electron.
- **PostgreSQL**: Могутній, відкритий об'єктно-реляційний система управління базами даних.
- **React**: Бібліотека для створення інтерфейсів користувача, яка дозволяє розробникам будувати високопродуктивні UI-компоненти.

## Особливості
- **Створення задач**: Користувачі можуть створювати нові задачі з назвою.
- **Оновлення задач**: Користувачі можуть оновлювати існуючі задачі, включаючи позначення задач як завершені та у процесі.
- **Видалення задач**: Користувачі можуть видаляти непотрібні задачі.
- **Фільтрація задач**: Користувачі можуть фільтрувати задачі за статусом.

## Встановлення та налаштування
1. Склонуйте репозиторій на ваш комп'ютер.
2. Перейдіть до директорії проекту.
3. Встановіть залежності, виконавши команду `npm install`.
4. Налаштуйте змінні середовища, створивши файл `.env` та надавши необхідну конфігурацію.

### Змінні середовища для PostgreSQL:

Якщо у вас виникнуть проблеми з підключенням до PostgreSQL, використайте наступні змінні середовища:

- `POSTGRES_URL`: `postgres://default:YBOh7bAPJVD9@ep-little-breeze-a2npm9dk-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require`
- `POSTGRES_PRISMA_URL`: `postgres://default:YBOh7bAPJVD9@ep-little-breeze-a2npm9dk-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15`
- `POSTGRES_URL_NO_SSL`: `postgres://default:YBOh7bAPJVD9@ep-little-breeze-a2npm9dk-pooler.eu-central-1.aws.neon.tech:5432/verceldb`
- `POSTGRES_URL_NON_POOLING`: `postgres://default:YBOh7bAPJVD9@ep-little-breeze-a2npm9dk.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require`
- `POSTGRES_USER`: `default`
- `POSTGRES_HOST`: `ep-little-breeze-a2npm9dk-pooler.eu-central-1.aws.neon.tech`
- `POSTGRES_PASSWORD`: `YBOh7bAPJVD9`
- `POSTGRES_DATABASE`: `verceldb`


### Запуск сервера:

1. Відкрийте термінал.
2. Перейдіть до директорії, де знаходиться ваш серверний код.
3. Запустіть сервер, виконавши команду запуску`npm start`.

### Запуск клієнта:

1. Відкрийте новий термінал або закрийте термінал сервера та відкрийте новий.
2. Перейдіть до директорії з клієнтським кодом.
3. Запустіть клієнтський додаток, виконавши команду запуску, яка зазвичай є `npm start`.

### Перевірка роботи програми:

1. Після того, як обидва додатки успішно запущено, відкрийте веб-браузер.
2. Перейдіть на адресу, де працює ваш клієнтський додаток.
3. Переконайтеся, що клієнтська частина програми відображається і взаємодіє з сервером так, як ви очікуєте.

## Автори
- [Ruslan Voshchylo](https://github.com/rvoshchylo)
