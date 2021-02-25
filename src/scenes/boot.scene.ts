import * as Phaser from "phaser";

export class BootScene extends Phaser.Scene {

    // noinspection JSUnusedGlobalSymbols
    preload() {
        this.load.bitmapFont("fnt", "fonts/font48.png", "fonts/font48.xml");

        this.load.image("money", "assets/icons/money.png");
        this.load.image("happy", "assets/icons/happy-customer.png");
        this.load.image("unhappy", "assets/icons/unhappy-customer.png");
        this.load.image("star", "assets/icons/star.png");
        this.load.image("icon-container", "assets/icons/icon-container.png");


        this.load.tilemapTiledJSON("room1", "assets/room1/untitled.json");
        this.load.image("door", "assets/room1/door.png");
        this.load.image("floor", "assets/room1/floor.png");
        this.load.image("furniture", "assets/room1/furniture.png");
        this.load.image("props", "assets/room1/props.png");
        this.load.image("walls", "assets/room1/walls.png");
    }

    // noinspection JSUnusedGlobalSymbols
    create() {
        this.scene.start("game");
    }
}
