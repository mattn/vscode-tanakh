'use strict';
import vscode = require('vscode');

let tanakh: Tanakh;
const face = [
    "  (´･_･`)´･_･`) ",
    "   (´･_･`)_･`)   ",
    "    (´･_･`)`)    ",
    "    ((´･_･`)     ",
    "   (´･(´･_･`)   ",
    "   (´･_(´･_･`)  ",
    "  (´･_･`)´･_･`) ",
    "   (´･_･`)_･`)   ",
    "    (´･_･`)`)    ",
    "    (´･_･`))     ",
    "     ((´･_･`)    ",
    "    (´･(´･_･`)  ",
    "   (´･_(´･_･`)  "
];

export function activate(context: vscode.ExtensionContext) {
    tanakh = new Tanakh();
    tanakh.start();
}

export function deactivate() {
    tanakh.stop();
}

class Tanakh {
    private _statusBarItem: vscode.StatusBarItem =  vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    private _index: number;
    private _timer: NodeJS.Timer;

    public start() {
        this._index = 0;
        this._timer = setInterval(() => {
            this._statusBarItem.text = face[this._index % face.length];
            this._index++;
        }, 200);
        this._statusBarItem.show();
    }

    stop() {
        clearInterval(this._timer);
        this._statusBarItem.dispose();
    }
}
