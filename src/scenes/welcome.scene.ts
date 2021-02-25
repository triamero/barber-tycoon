import * as Phaser from "phaser";

export class WelcomeScene extends Phaser.Scene {

    // noinspection JSUnusedGlobalSymbols
    create() {

        this.add.text(150, 300, "YOU'RE NOT SUPPOSED TO BE HERE. GO AWAY", {
            fontSize: "24px",
            fontFamily: "Arial",
            color: "#000000",
            wordWrap: {
                useAdvancedWrap: true,
                width: 300
            }
        });

        this.add.text(275, 370, "- LEVELORD", {
            fontSize: "24px",
            fontFamily: "Arial",
            color: "#000000"
        });
    }
}
