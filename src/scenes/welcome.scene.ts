import * as Phaser from "phaser";

export class WelcomeScene extends Phaser.Scene {

    // noinspection JSUnusedGlobalSymbols
    create() {

        this.add.bitmapText(150, 300, "fnt", "YOU'RE NOT SUPPOSED", 36).setTintFill(0x000000);
        this.add.bitmapText(150, 340, "fnt", "TO BE HERE. GO AWAY", 36).setTintFill(0x000000);

        this.add.bitmapText(275, 400, "fnt", "- LEVELORD", 32).setTintFill(0x000000);
    }
}
