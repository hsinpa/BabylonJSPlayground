import './stylesheet/main.scss';
import 'babylonjs'

class Launcher {

    private _engine : BABYLON.Engine;
    private _scene : BABYLON.Scene;
    private _canvasDom : HTMLCanvasElement;

    constructor(canvasDom : HTMLCanvasElement) {
        this._canvasDom = canvasDom;
        console.log(canvasDom);
    }

    SetScene() {
        this._engine = new BABYLON.Engine(this._canvasDom, true);
        this._scene = new BABYLON.Scene(this._engine);

        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), this._scene);
        camera.attachControl(this._canvasDom, true);

        var light1: BABYLON.HemisphericLight = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), this._scene);
        var sphere: BABYLON.Mesh = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1 }, this._scene);    
    }

    Update() {
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });
    }
}

let domSelector = document.querySelector<HTMLCanvasElement>(".babylon_canvas");
let launcher = new Launcher(domSelector);
launcher.SetScene();
launcher.Update();