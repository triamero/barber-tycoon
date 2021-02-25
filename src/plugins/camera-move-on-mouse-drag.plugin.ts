import * as Phaser from "phaser";

export class CameraMoveOnMouseDragPlugin {

    private origDragPoint: any;

    constructor(
        private activePointer: Phaser.Input.Pointer,
        private camera: Phaser.Cameras.Scene2D.Camera) {
        this.origDragPoint = null;
    }

    update() {
        if (this.activePointer.isDown) {
            if (this.origDragPoint) {

                let speed = 1;

                if (this.camera.zoom < 1) {
                    speed += this.camera.zoom;
                }

                this.camera.scrollX += speed * (this.origDragPoint.x - this.activePointer.position.x);
                this.camera.scrollY += speed * (this.origDragPoint.y - this.activePointer.position.y);
            }
            this.origDragPoint = this.activePointer.position.clone();
        } else {
            this.origDragPoint = null;
        }
    }
}
