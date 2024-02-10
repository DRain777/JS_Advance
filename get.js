class AvtoMobile {
    _horsePowers = 0; // Обьявления приватного свойства _horsePower, используя синтаксис приватных полей 
    
    
    set horsePowers(value) {
      // Определение сеттера для свойства  horsePowers
      if (value < 0) throw new Error("Отрицательное количество сил"); // проверкачто значение больше о или равно , иначе выкидывает исключение
      this._horsePowers = value; // установка значения свойства _horsePowers
    }

    get horsePowers () {
      // определения геттера для свойства _horsePowers
      return this._horsePowers; // возврвщает значения свойства  _horsePowers
    }


    constructor(power) {
        this._horsePowers = power; 
    }



}

// создаем новую машину
const auto = new AvtoMobile(100);// создания нового обьекта класса AvtoMobil и передача значения 100 в конструктор 


// устанавливаем количество сил
 auto.AvtoMobile =  -10; //  установка отрицательного значения вышовет ошибку!!! 