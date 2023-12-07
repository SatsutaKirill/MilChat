# План тестирования
---

# Содержание
1 [Введение](#introduction)  
2 [Объект тестирования](#items)  
3 [Атрибуты качества](#quality)  
4 [Риски](#risk)  
5 [Аспекты тестирования](#features)  
6 [Подходы к тестированию](#approach)  
7 [Представление результатов](#pass)  
8 [Выводы](#conclusion)

<a name="introduction"/>

## Введение

Данный документ описывает план тестирования приложения ["EnjoyPlayer"](https://github.com/glestorn/EnjoyPlayer). Документ предназначен для людей, выполняющих тестирование данного проекта. Цель тестирования - проверка соответствия реального поведения программы проекта и ее ожидаемого поведения, которое описано в [требованиях](https://github.com/glestorn/EnjoyPlayer/blob/master/Documents/Requirements/RussianRequirementsDocument.md).

<a name="items"/>

## Объект тестирования

В качестве объектов тестирования можно выделить следующие функциональные требования:

* Воспроизведение аудиоконтента;
* Создание плейлистов;
* Управление ранее созданными плейлистами;
* Функция перемешивания композиций из списка;
* Функция повторного воспроизведения плейлиста. 

<a name="quality"/>

## Атрибуты качества

1. Функциональность:
    - функциональная полнота: приложение должно выполнять все заявленные функции;
    - функциональная корректность: приложение должно выполнять все заявленные функции корректно;
2. Удобство использования:
    - все функциональные элементы пользовательского интерфейса имеют названия, описывающие действие, которое произойдет при выборе элемента.

<a name="risk"/>

## Риски

В данном случае к рискам можно отнести:
* то, что приложение не сможет работать с музыкой на носителе, который не асознаётся операционной системой.

<a name="features"/>

## Аспекты тестирования

В ходе тестирования планируется проверить реализацию основных функций приложения. Аспекты, подвергаемые тестированию: 
* Запуск приложения;  
* Остановка/продолжение воспроизведения композиции  
* Переход к предыдущему/следующему треку в списке  
* Переход к любому времени композиции 
* Изменение громкости воспроизведения аудиоконтента  
* Создание/удаление плейлиста  
* Включение/отключение перемешивания треков  
* Включение/отключение повторного воспроизведения плейлиста  

### Запуск приложения
Этот вариант использования небходимо протестировать на:
* запуск приложения;
* отображение окна приложения согласно [мокапу](https://github.com/glestorn/EnjoyPlayer/blob/master/Documents/Mockups/MainView.png).

### Остановка/продолжение воспроизведения композиции
Этот вариант использования небходимо протестировать на:
* остановку воспроизведения композиции;  
* продолжение воспроизведения композиции.  

### Переход к предыдущему/следующему треку в списке
Этот вариант использования небходимо протестировать на:
* переход к предыдущему треку в списке;  
* переход к предыдущему треку, если он первый в списке;  
* переход к следующему треку в списке;  
* переход к следующему треку, если он последний в списке.  

### Переход к любому времени композиции
Этот вариант использования небходимо протестировать на:
* переход к любому времени композиции;

### Изменение громкости воспроизведения аудиоконтента
Этот вариант использования небходимо протестировать на:
* изменение громкости воспроизведения аудиоконтента.

### Создание/удаление плейлиста
Этот вариант использования небходимо протестировать на:
* создание плейлиста;
* удаление плейлиста.

### Включение/отключение перемешивания треков
Этот вариант использования небходимо протестировать на:
* включение перемешивания треков;
* отключение перемешивания треков.

### Включение/отключение повторного воспроизведения плейлиста
Этот вариант использования небходимо протестировать на:
* включение повторного воспроизведения плейлиста;
* отключение повторного воспроизведения плейлиста.

## Нефункциональные требования:
* все функциональные элементы пользовательского интерфейса имеют названия, описывающие действие, которое произойдет при выборе элемента.

<a name="approach"/>

## Подходы к тестированию

При тестировании будет использован ручной подход.

<a name="pass"/>

## Представление результатов

Результаты представлены  в документе ["Результаты тестирования"]([https://github.com/DanutaGagua/Personal-film-collection-manager/blob/master/Test%20results.md](https://github.com/SatsutaKirill/RouteGo/blob/main/TestResults.md)).

<a name="conclusion"/>

## Выводы

Данный тестовый план позволяет протестировать основной функционал приложения. Успешное прохождение всех тестов не гарантирует полной работоспособности на всех версиях платформ и архитектурах, однако позволяет полагать, что данное программное обеспечение работает корректно. На момент прохождения тестирования с результатами в пункте 7, приложение работало некорректно из-за невыполнения задач в поставленные сроки. Данное тестирование должно быть проведено повторно согласно плану после окончания разработки проекта.