let Ilich = function() {

    this.getInfo = function() {
        this.time = +prompt('Введите время работы лампочки от 0 до 24, ч');
        this.power = +prompt('Введите мощность лампочки от 0 до 180, Вт');
        this.cost = +prompt('Введите стоимость электроэнергии от 0 до 50, руб');

        this.checkInfo();
    };

    this.checkInfo = function() {
        if (this.time > 24) {
            alert('Странный ты , спишь со светом');
            this.getInfo();
        } else if (this.time <= 0) {
            alert('А ломпочку можно было бы и включить');
            this.getInfo();
        } else if (this.power <= 0) {
            alert('Так она в жизни не загорится');
            this.getInfo();
        } else if (this.power > 180) {
            alert('Полегче , тебе же не прожектор нужен');
            this.getInfo();
        } else if (this.cost <= 0) {
            alert('Кончено , разбежался , а платить кто будет');
            this.getInfo();
        } else if (this.cost > 50) {
            alert('За такие деньги можно уже и нефть попалить');
            this.getInfo();
        } else this.counting();
    }

    this.counting = function() {
        this.money = ((this.time * this.power) / 1000 * this.cost);

        this.result();
    };
    
    this.result = function() {
        alert('Лампочка проработала ' + this.time + ' ч' + ' расход за горение лампочки: ' + this.money + ' рублей');
    };
}
let ilich = new Ilich();
ilich.getInfo();