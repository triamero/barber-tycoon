import * as Phaser from "phaser";

export class BootScene extends Phaser.Scene {

    // noinspection JSUnusedGlobalSymbols
    preload() {

    }

    // noinspection JSUnusedGlobalSymbols
    create() {
        this.scene.start("welcome");
    }
}
