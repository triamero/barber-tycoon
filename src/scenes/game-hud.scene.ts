import * as Phaser from "phaser";

export class GameHudScene extends Phaser.Scene {

    private _money: Phaser.GameObjects.DynamicBitmapText;

    // noinspection JSUnusedGlobalSymbols
    create() {
        this.add.image(100, 50, "icon-container").setAlpha(0.75).setTintFill(0x888888);
        this.add.image(500, 50, "icon-container").setAlpha(0.75).setTintFill(0x888888);

        this.add.image(30, 50, "money").setTintFill(0x70ff70);
        this.add.image(440, 50, "happy").setScale(0.25);

        this._money = this.add.dynamicBitmapText(175, 52, "fnt", "150", 42).setTintFill(0xffffff).setOrigin(1, 0.5);
        this._money = this.add.dynamicBitmapText(575, 52, "fnt", "5", 42).setTintFill(0xffffff).setOrigin(1, 0.5);

        //70ff70 - green
        //ff7070 - red
    }
}
