import * as Phaser from "phaser";
import {BootScene, GameHudScene, GameScene, WelcomeScene} from "./scenes";

class Main extends Phaser.Game {
    constructor() {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: 600,
            height: 800,
            parent: "root",
            backgroundColor: 0xada286,
            scale: {
                autoCenter: Phaser.Scale.Center.CENTER_BOTH,
                mode: Phaser.Scale.ScaleModes.FIT
            },
            render: {
                //transparent: true
            },
            audio: {
                noAudio: true
            }
        };

        super(config);

        this.scene.add("boot", BootScene, false);
        this.scene.add("game", GameScene, false);
        this.scene.add("game-hud", GameHudScene, false);
        this.scene.add("welcome", WelcomeScene, false);

        this.scene.start("boot");
    }
}

window.addEventListener("load", start);

function start() {
    let app = new Main();
    (<any>window).gameApp = app;
}



