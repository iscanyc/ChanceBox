class ChanceBox {
    constructor(BoxName, el, Options) {
        if (!BoxName) return console.warn("BoxName is required.");
        if (!el) return console.warn("el is required.");
        this.name = BoxName;
        this.items = el || [];
        this.options = Options || {
            sameItem: false
        }
        this.all = [];
        this.init();
    }
    init() {
        this.items.forEach((el, index) => {
            if (!el.name) return;
            if (!el.chance) return;
            if (!this.options.sameItem) {
                if (this.all.find(item => item.name == el.name)) return;
            }
            for (var rn = 0; rn < el.chance; rn++) {
                this.all.push({
                    name: el.name,
                    chance: el.chance
                });
            }
        });
    }
    open() {
        return this.all[Math.floor(Math.random() * this.all.length - 1)];
    }
    getItems() {
        return this.all;
    }
    getItem(name) {
        return this.all.find(e => e.name == name);
    }
    deleteItem(name) {
        return this.all = this.all.filter(o => o.name !== name);
    }
    addItem(obj) {
        if (!obj.name) return;
        if (!obj.chance) return;
        if (!this.options.sameItem) {
            if (this.all.find(item => item.name == obj.name)) return;
        }
        for (let bc = 0; bc < obj.chance; bc++) {
            this.all.push({
                name: obj.name,
                chance: obj.chance
            });
        }
        return this.all;
    }
}
module.exports = ChanceBox;
