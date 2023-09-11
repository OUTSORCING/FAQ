---
title: Калькулятор заробітньої платні
summary: "Розрахуйте свою заробітню платню за допомогою цих калькуляторів"
sidebar: mydoc_sidebar
permalink: calculateSalary.html
folder: mydoc
---

## Нормативи на день

|           Лід           | Норма |
|:-----------------------|:-----:|
| Норма |  **120 анкет на день** |
| Термінові/гарячі        |   **5**   |
| Теплі                   |   **8**   |
| Гіпотетично зацікавлені |   **44**  |
| Інші (Холодні)          |   **63**  |

## Калькулятор

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#profile" data-toggle="tab">Дистанційно</a></li>
    <li><a class="noCrossRef" href="#match" data-toggle="tab">В офісі</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="profile">
{% include calculate.html %}
</div>

<div role="tabpanel" class="tab-pane" id="match">
{% include calculateOffline.html %}
</div>
</div>

## Графік виплати заробітньої плати

<style>
.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.month .prev {
  float: left;
  padding-top: 10px;
}

.month .next {
  float: right;
  padding-top: 10px;
}

.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #ddd;
}

.weekdays li {
  display: inline-block;
  width: 13.6%;
  color: #666;
  text-align: center;
}

.days {
  padding: 10px 0;
  background: #eee;
  margin: 0;
}

.days li {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size:12px;
  color: #777;
}

.days li .active {
  padding: 5px;
  background: #ff0000;
  color: white !important
}

/* Add media queries for smaller screens */
@media screen and (max-width:720px) {
  .weekdays li, .days li {width: 13.1%;}
}

@media screen and (max-width: 420px) {
  .weekdays li, .days li {width: 12.5%;}
  .days li .active {padding: 2px;}
}

@media screen and (max-width: 290px) {
  .weekdays li, .days li {width: 12.2%;}
}
</style>
<div>
<ul class="weekdays">
  <li>Пн</li>
  <li>Вт</li>
  <li>Ср</li>
  <li>Чт</li>
  <li>Пт</li>
  <li>Сб</li>
  <li>Нд</li>
</ul>

<ul class="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li><span class="active">15</span></li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li><span class="active">30</span></li>
</ul>
</div>
<br>

З `1` по `15` - Аванс.

 З `15` по `30`  - Оплата згідно розрахунку системи.

{% include note.html content=" якщо ви хочете детальніше дізнатись про розрахунок заробітньої плати [перейдіть за посиланнями](https://outsorcing.github.io/FAQ/tutorials.html#розрахунок-заробітньої-плати)" %}