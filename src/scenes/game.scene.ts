import * as Phaser from "phaser";
import {CameraMoveOnMouseDragPlugin, ZoomPlugin} from "@app/plugins";

export class GameScene extends Phaser.Scene {

    private _zoom: ZoomPlugin;
    private _drag: CameraMoveOnMouseDragPlugin;

    init() {
        this._zoom = new ZoomPlugin(this.input, this.cameras.main);
        this._drag = new CameraMoveOnMouseDragPlugin(this.input.activePointer, this.cameras.main);

        this.scene.launch("game-hud");
    }

    // noinspection JSUnusedGlobalSymbols
    create() {
        let map = this.make.tilemap({key: "room1"});

        map.addTilesetImage("floor", "floor", 360, 640);
        map.addTilesetImage("door", "door", 360, 640);
        map.addTilesetImage("furniture", "furniture", 360, 640);
        map.addTilesetImage("props", "props", 360, 640);
        map.addTilesetImage("walls", "walls", 360, 640);

        map.createLayer("floor", "floor").setSkipCull(true);
        map.createLayer("walls", ["walls", "door"]).setSkipCull(true);
        map.createLayer("furniture", "furniture").setSkipCull(true);
        map.createLayer("props", "props").setSkipCull(true);

        this.cameras.main.setScroll(500, 400).setZoom(0.5);
    }

    update(time: number, delta: number) {
        super.update(time, delta);
        this._drag.update();
    }
}
