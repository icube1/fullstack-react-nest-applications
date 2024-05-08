# Список задач
Это простой прототип системы ведения заявок для логистов в авто грузоперевозках в виде web-приложения.
## Используемые технологии
- **NestJS**: Прогрессивный фреймворк Node.js для построения эффективных, надежных и масштабируемых серверных приложений.
- **TypeORM**: ORM, который может работать на платформах NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo и Electron.
- **PostgreSQL**: Мощная, открытая объектно-реляционная система управления базами данных.
- **React**: Библиотека для создания пользовательских интерфейсов, позволяющая разработчикам строить высокопроизводительные UI-компоненты.
- **React context api**: API для взаимодействия изолированных компонентов между собой.
- **Docker**: Платформа для разработки, доставки и выполнения программного обеспечения с использованием контейнеризации. Позволяет упаковывать программы и их зависимости в контейнеры для легкого развертывания и управления средами разработки и производства.
## Особенности
- **Создание задач**: Пользователи могут создавать новые задачи с названием.
- **Обновление задач**: Пользователи могут обновлять существующие задачи, включая отметку задач как завершенных и в процессе.
- **Удаление задач**: Пользователи могут удалять ненужные задачи.
- **Фильтрация задач**: Пользователи могут фильтровать задачи по статусу.
## Установка и настройка
1. Склонируйте репозиторий на свой компьютер.
2. Перейдите в директорию проекта.
3. Установите зависимости, выполнив команду `npm install`.
### Запуск сервера:
1. Откройте терминал.
2. Перейдите в директорию `./server`.
3. Откройте терминал и создайте файл .env командой `npm run start:env`
4. Откройте новый терминал и запустите docker-container командой `docker-compose up --build`
5. Запустите сервер, выполнив команду запуска `npm start`.
4. Для дополнительной информации о содержании сервера, см. [README сервера](server/README.md).
### Запуск клиента:
1. Откройте новый терминал или закройте терминал сервера и откройте новый.
2. Перейдите в директорию ```./client```.
3. Запустите клиентское приложение, выполнив команду запуска, которая обычно `npm start`.
5. Для дополнительной информации о содержании клиента, см. [README клиента](client/README.md).
### Проверка работы программы:
1. После успешного запуска обоих приложений откройте веб-браузер.
2. Перейдите по адресу, где работает ваше клиентское приложение.
3. Убедитесь, что клиентская часть программы отображается и взаимодействует с сервером так, как вы ожидаете.