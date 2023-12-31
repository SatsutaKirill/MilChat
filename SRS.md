# Требования к проекту
---

# Содержание
1 [Введение](#intro)  
1.1 [Назначение](#appointment)  
1.2 [Бизнес-требования](#business_requirements)  
1.2.1 [Исходные данные](#initial_data)  
1.2.2 [Возможности бизнеса](#business_opportunities)      
2 [Требования пользователя](#user_requirements)  
2.1 [Программные интерфейсы](#software_interfaces)  
2.2 [Интерфейс пользователя](#user_interface)  
2.3 [Характеристики пользователей](#user_specifications)  
2.3.1 [Классы пользователей](#user_classes)  
2.3.2 [Аудитория приложения](#application_audience)  
2.3.2.1 [Целевая аудитория](#target_audience)  
2.3.2.1 [Побочная аудитория](#collateral_audience)  
2.4 [Предположения и зависимости](#assumptions_and_dependencies)  
3 [Системные требования](#system_requirements)  
3.1 [Функциональные требования](#functional_requirements)  
3.1.1 [Основные функции](#main_functions)  
3.1.1.1 [Вход пользователя в приложение](#user_logon_to_the_application)  
3.1.1.2 [Настройка профиля активного пользователя](#setting_up_the_profile_of_the_active_user)  
3.1.2 [Ограничения и исключения](#restrictions_and_exclusions)  
3.2 [Нефункциональные требования](#non-functional_requirements)  
3.2.1 [Атрибуты качества](#quality_attributes)  
3.2.1.1 [Требования к удобству использования](#requirements_for_ease_of_use)    
3.2.1.2 [Требования к безопасности](#security_requirements)  
3.2.1.3 [Требования к доступности](#access_requirements)  
3.2.2 [Внешние интерфейсы](#external_interfaces)  
3.2.3 [Ограничения](#restrictions)  

<a name="intro"/>

# 1 Введение

<a name="appointment"/>

## 1.1 Назначение
В этом документе описаны функциональные и нефункциональные требования к приложению «MilChat» для ОС Windows, macOS . Этот документ предназначен для команды, которая будет реализовывать и проверять корректность работы приложения.

<a name="business_requirements"/>

## 1.2 Бизнес-требования

<a name="initial_data"/>

### 1.2.1 Исходные данные
Большое количество людей имеют доступ к сети Интернет, в связи с чем разрабатываются новые приложения и веб-сервисы. Для обмена как текстовыми, так и графическими данными необходимо приложение, которое предоставляет возможность через сеть Интернет мгновенно обмениваться этими данными.

<a name="business_opportunities"/>

### 1.2.2 Возможности бизнеса
Большинство пользователей желают иметь приложение, которое предоставляет возможность через сеть Интернет мгновенно обмениваться текстовыми, графическими данными. Подобное приложение позволит им не тратить средства на отправку SMS/MMS, а также позволит иметь доступ к сохраненной информации независимо, подключён ли компьютер к интернету или нет. Интерфейс, спроектированный так, чтобы приложением могли пользоваться люди всех возрастных категорий, позволит увеличить количество людей, использующих данное приложение.

<a name="user_requirements"/>

# 2 Требования пользователя

<a name="software_interfaces"/>

## 2.1 Программные интерфейсы
Приложение использует ресурсы сервиса ChatEngine.

<a name="user_interface"/>

## 2.2 Интерфейс пользователя  
Окно регистрации нового пользователя.  

![Окно регистрации нового пользователя](https://github.com/SatsutaKirill/MilChat/blob/main/mockups/start.png)   

Окно входа для зарегистрированного пользователя.  

![Окно входа для зарегистрированного пользователя](https://github.com/SatsutaKirill/MilChat/blob/main/mockups/start1.png).

Главное окно приложения (пользователь зарегистрирован). 

![Главное окно приложения](https://github.com/SatsutaKirill/MilChat/blob/main/mockups/search.png)  

Главное окно приложения после выбора пользователя в списке. 

![Главное окно приложения после выбора пользователя в списке](https://github.com/SatsutaKirill/MilChat/blob/main/mockups/chat.png)      

<a name="user_specifications"/>

## 2.3 Характеристики пользователей

<a name="user_classes"/>

### 2.3.1 Классы пользователей

| Класс пользователей | Описание |
|:---|:---|
| Пользователи | Люди, использующие приложение |
| Зарегистрированные пользователи | Пользователи, которые вошли в приложение под своим именем|

<a name="application_audience"/>

### 2.3.2 Аудитория приложения

<a name="target_audience"/>

#### 2.3.2.1 Целевая аудитория
Люди, которые любят переписываться.

<a name="collateral_audience"/>

#### 2.3.2.2 Побочная аудитория
Люди, которые любят общаться.

<a name="assumptions_and_dependencies"/>

## 2.4 Предположения и зависимости
1.	Пользователь не может переписываться с другим пользователей при отсутствии подключения к Интернету;
2.	Пользователь может просматривать сообщения при отсутствии подключения к Интернету.

<a name="system_requirements"/>

# 3 Системные требования

<a name="functional_requirements"/>

## 3.1 Функциональные требования

<a name="main_functions"/>

### 3.1.1 Основные функции

<a name="user_logon_to_the_application"/>

#### 3.1.1.1 Вход пользователя в приложение
**Описание.** Пользователь имеет возможность использовать приложение с созданием собственного профиля либо войдя в свою учётную запись.

| Функция | Требования | 
|:---|:---|
| Вход в приложение с созданием собственного профиля | Приложение должно предоставить пользователю возможность войти в приложение |
| Регистрация нового пользователя | Приложение должно запросить у пользователя ввести имя для создания учётной записи. Пользователь должен ввести имя |
| Вход зарегистрированного пользователя в приложение | Приложение должно предоставить пользователю список имён зарегистрированных пользователей. Пользователь должен выбрать из списка своё имя |

<a name="setting_up_the_profile_of_the_active_user"/>

#### 3.1.1.2 Настройка профиля активного пользователя
**Описание.** Зарегистрированный пользователь имеет возможность выбрать другого пользователя, с которым общаться.
 
| Функция | Требования | 
|:---|:---|
| Поиск пользователя для общения | Приложение должно предоставить зарегистрированному пользователю поле для ввода имени пользователя. Пользователь должен ввести имя другого пользователя, с которым хочет общаться | 

<a name="restrictions_and_exclusions"/>

### 3.1.2 Ограничения и исключения
1.	Пользователье может добавлять новых пользователей только при наличии подключения к Интернету.

<a name="non-functional_requirements"/>

## 3.2 Нефункциональные требования

<a name="quality_attributes"/>

### 3.2.1 Атрибуты качества

<a name="requirements_for_ease_of_use"/>

#### 3.2.1.1 Требования к удобству использования
1. Приложение реализует все основные функции;
2. Все функциональные элементы пользовательского интерфейса имеют названия, описывающие действие, которое произойдет при выборе элемента.
3. Интерфейс не содержит лишних элементов.

<a name="security_requirements"/>

#### 3.2.1.2 Требования к безопасности
1.	Приложение предоставляет возможность просмотра списка пользователей для общения;
2.	Приложение предоставляет возможность просмотра истории сообщений с тем или иным пользователем.

<a name="access_requirements"/>

#### 3.2.1.3 Требования к доступности
Время реакции на действия пользователя минимально.

<a name="external_interfaces"/>

### 3.2.2 Внешние интерфейсы
Окна приложения удобны для использования пользователями:
  * размер шрифта не должен быть слишком маленьким.

<a name="restrictions"/>

### 3.2.3 Ограничения
1. Приложение реализовано для ОС Windows, macOS;
2.	Язык программирования – JavaScript.
