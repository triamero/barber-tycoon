import * as Phaser from "phaser";

export class ZoomPlugin {

    constructor(
        private input: Phaser.Input.InputPlugin,
        private camera: Phaser.Cameras.Scene2D.Camera) {

        this.input.on("wheel", this._onMouseWheel, this);
    }

    private _onMouseWheel(_: any, isOver: boolean, dx: number, dy: number) {

        if (dy > 0) {
            this._zoomMap(-0.2);
        } else {
            this._zoomMap(0.2);
        }
    }

    private _zoomMap(step: number): void {

        let zoom = this.camera.zoom;

        if (step > 0 && zoom >= 1 || step < 0 && zoom <= 0.3) {
            return;
        }

        zoom += step;

        zoom = Math.round(zoom * 100) / 100;
        this.camera.zoomTo(zoom, 100, "Linear", false);
    }
}
