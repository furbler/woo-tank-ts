/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/canvas2d.ts":
/*!*************************!*\
  !*** ./src/canvas2d.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Canvas2DUtility = void 0;\n/**\n * Canvas2D API をラップしたユーティリティクラス\n */\nclass Canvas2DUtility {\n    /**\n     * @constructor\n     * @param {HTMLCanvasElement} canvas - 対象となる canvas element\n     */\n    constructor(canvas) {\n        this.canvasElement = canvas;\n        this.context2d = canvas.getContext('2d');\n    }\n    /**\n     * @return {HTMLCanvasElement}\n     */\n    get canvas() { return this.canvasElement; }\n    /**\n     * @return {CanvasRenderingContext2D}\n     */\n    get context() { return this.context2d; }\n    /**\n     * 矩形を描画する\n     * @param {number} x - 塗りつぶす矩形の左上角の X 座標\n     * @param {number} y - 塗りつぶす矩形の左上角の Y 座標\n     * @param {number} width - 塗りつぶす矩形の横幅\n     * @param {number} height - 塗りつぶす矩形の高さ\n     * @param {string} [color] - 矩形を塗りつぶす際の色\n     */\n    drawRect(x, y, width, height, color) {\n        // 色が指定されている場合はスタイルを設定する\n        if (color != null) {\n            this.context2d.fillStyle = color;\n        }\n        this.context2d.fillRect(x, y, width, height);\n    }\n    // /**\n    //  * 線分を描画する\n    //  * @param {number} x1 - 線分の始点の X 座標\n    //  * @param {number} y1 - 線分の始点の Y 座標\n    //  * @param {number} x2 - 線分の終点の X 座標\n    //  * @param {number} y2 - 線分の終点の Y 座標\n    //  * @param {string} [color] - 線を描画する際の色\n    //  * @param {number} [width=1] - 線幅\n    //  * dash : trueで破線になる\n    //  */\n    drawLine(x1, y1, x2, y2, color, width = 1) {\n        // 色が指定されている場合はスタイルを設定する\n        if (color != null) {\n            this.context2d.strokeStyle = color;\n        }\n        // 線幅を設定する\n        this.context2d.lineWidth = width;\n        // パスの設定を開始することを明示する\n        this.context2d.beginPath();\n        // パスの始点を設定する\n        this.context2d.moveTo(x1, y1);\n        // 直線のパスを終点座標に向けて設定する\n        this.context2d.lineTo(x2, y2);\n        // パスを閉じることを明示する\n        this.context2d.closePath();\n        // 設定したパスで線描画を行う\n        this.context2d.stroke();\n    }\n    //破線を描画\n    drawDashLine(x1, y1, x2, y2, color, width = 1) {\n        // 色が指定されている場合はスタイルを設定する\n        if (color != null) {\n            this.context2d.strokeStyle = color;\n        }\n        // 線幅を設定する\n        this.context2d.lineWidth = width;\n        // パスの設定を開始することを明示する\n        this.context2d.beginPath();\n        //破線\n        this.context2d.setLineDash([20, 50]);\n        // パスの始点を設定する\n        this.context2d.moveTo(x1, y1);\n        // 直線のパスを終点座標に向けて設定する\n        this.context2d.lineTo(x2, y2);\n        // パスを閉じることを明示する\n        this.context2d.closePath();\n        // 設定したパスで線描画を行う\n        this.context2d.stroke();\n    }\n    /**\n     * 多角形を描画する\n     * @param {Array<number>} points - 多角形の各頂点の座標\n     * @param {string} [color] - 多角形を描画する際の色\n     */\n    drawPolygon(points, color) {\n        // points が配列であるかどうか確認し、多角形を描くために\n        // 十分な個数のデータが存在するか調べる\n        if (Array.isArray(points) !== true || points.length < 6) {\n            return;\n        }\n        // 色が指定されている場合はスタイルを設定する\n        if (color != null) {\n            this.context2d.fillStyle = color;\n        }\n        // パスの設定を開始することを明示する\n        this.context2d.beginPath();\n        // パスの始点を設定する\n        this.context2d.moveTo(points[0], points[1]);\n        // 各頂点を結ぶパスを設定する\n        for (let i = 2; i < points.length; i += 2) {\n            this.context2d.lineTo(points[i], points[i + 1]);\n        }\n        // パスを閉じることを明示する\n        this.context2d.closePath();\n        // 設定したパスで多角形の描画を行う\n        this.context2d.fill();\n    }\n    /**\n     * 円を描画する\n     * @param {number} x - 円の中心位置の X 座標\n     * @param {number} y - 円の中心位置の Y 座標\n     * @param {number} radius - 円の半径\n     * @param {string} [color] - 円を描画する際の色\n     * 塗りつぶしするかどうか\n     */\n    drawCircle(x, y, radius, color, fillCircle = true) {\n        // パスの設定を開始することを明示する\n        this.context2d.beginPath();\n        // 円のパスを設定する\n        this.context2d.arc(x, y, radius, 0.0, Math.PI * 2.0);\n        // パスを閉じることを明示する\n        this.context2d.closePath();\n        // 設定したパスで円の描画を行う\n        if (fillCircle) {\n            //図形内部を塗りつぶす\n            // 色が指定されている場合はスタイルを設定する\n            if (color != null)\n                this.context2d.fillStyle = color;\n            this.context2d.fill();\n        }\n        else {\n            //図形内部を塗りつぶさない\n            // 色が指定されている場合はスタイルを設定する\n            if (color != null)\n                this.context2d.strokeStyle = color;\n            this.context2d.stroke();\n        }\n        // if (color != null) this.context2d.fillStyle = \"blue\";\n        // this.context2d.fill();\n        // //図形内部を塗りつぶさない\n        // // 色が指定されている場合はスタイルを設定する\n        // if (color != null) this.context2d.strokeStyle = color;\n        // this.context2d.stroke();\n    }\n    /**\n     * 扇形を描画する\n     * @param {number} x - 扇形を形成する円の中心位置の X 座標\n     * @param {number} y - 扇形を形成する円の中心位置の Y 座標\n     * @param {number} radius - 扇形を形成する円の半径\n     * @param {number} startRadian - 扇形の開始角\n     * @param {number} endRadian - 扇形の終了角\n     * @param {string} [color] - 扇形を描画する際の色\n     */\n    drawFan(x, y, radius, startRadian, endRadian, color) {\n        // 色が指定されている場合はスタイルを設定する\n        if (color != null) {\n            this.context2d.fillStyle = color;\n        }\n        // パスの設定を開始することを明示する\n        this.context2d.beginPath();\n        // パスを扇形を形成する円の中心に移動する\n        this.context2d.moveTo(x, y);\n        // 円のパスを設定する\n        this.context2d.arc(x, y, radius, startRadian, endRadian);\n        // パスを閉じることを明示する\n        this.context2d.closePath();\n        // 設定したパスで扇形の描画を行う\n        this.context2d.fill();\n    }\n    /**\n     * 線分を二次ベジェ曲線で描画する\n     * @param {number} x1 - 線分の始点の X 座標\n     * @param {number} y1 - 線分の始点の Y 座標\n     * @param {number} x2 - 線分の終点の X 座標\n     * @param {number} y2 - 線分の終点の Y 座標\n     * @param {number} cx - 制御点の X 座標\n     * @param {number} cy - 制御点の Y 座標\n     * @param {string} [color] - 線を描画する際の色\n     * @param {number} [width=1] - 線幅\n     */\n    drawQuadraticBezier(x1, y1, x2, y2, cx, cy, color, width = 1) {\n        // 色が指定されている場合はスタイルを設定する\n        if (color != null) {\n            this.context2d.strokeStyle = color;\n        }\n        // 線幅を設定する\n        this.context2d.lineWidth = width;\n        // パスの設定を開始することを明示する\n        this.context2d.beginPath();\n        // パスの始点を設定する\n        this.context2d.moveTo(x1, y1);\n        // 二次ベジェ曲線の制御点と終点を設定する\n        this.context2d.quadraticCurveTo(cx, cy, x2, y2);\n        // パスを閉じることを明示する\n        this.context2d.closePath();\n        // 設定したパスで線描画を行う\n        this.context2d.stroke();\n    }\n    /**\n     * 線分を三次ベジェ曲線で描画する\n     * @param {number} x1 - 線分の始点の X 座標\n     * @param {number} y1 - 線分の始点の Y 座標\n     * @param {number} x2 - 線分の終点の X 座標\n     * @param {number} y2 - 線分の終点の Y 座標\n     * @param {number} cx1 - 始点の制御点の X 座標\n     * @param {number} cy1 - 始点の制御点の Y 座標\n     * @param {number} cx2 - 終点の制御点の X 座標\n     * @param {number} cy2 - 終点の制御点の Y 座標\n     * @param {string} [color] - 線を描画する際の色\n     * @param {number} [width=1] - 線幅\n     */\n    drawCubicBezier(x1, y1, x2, y2, cx1, cy1, cx2, cy2, color, width = 1) {\n        // 色が指定されている場合はスタイルを設定する\n        if (color != null) {\n            this.context2d.strokeStyle = color;\n        }\n        // 線幅を設定する\n        this.context2d.lineWidth = width;\n        // パスの設定を開始することを明示する\n        this.context2d.beginPath();\n        // パスの始点を設定する\n        this.context2d.moveTo(x1, y1);\n        // 三次ベジェ曲線の制御点と終点を設定する\n        this.context2d.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);\n        // パスを閉じることを明示する\n        this.context2d.closePath();\n        // 設定したパスで線描画を行う\n        this.context2d.stroke();\n    }\n    /**\n     * テキストを描画する\n     * @param {string} text - 描画するテキスト\n     * @param {number} x - テキストを描画する位置の X 座標\n     * @param {number} y - テキストを描画する位置の Y 座標\n     * @param {string} [color] - テキストを描画する際の色\n     * @param {number} [width] - テキストを描画する幅に上限を設定する際の上限値(オプション)\n     */\n    drawText(text, x, y, color, width = 0) {\n        // 色が指定されている場合はスタイルを設定する\n        if (color != null) {\n            this.context2d.fillStyle = color;\n        }\n        if (width === 0) {\n            this.context2d.fillText(text, x, y);\n        }\n        else {\n            this.context2d.fillText(text, x, y, width);\n        }\n    }\n    /**\n     * 画像をロードしてコールバック関数にロードした画像を与え呼び出す\n     * @param {string} path - 画像ファイルのパス\n     * @param {function} [callback] - コールバック関数\n     */\n    imageLoader(path, callback) {\n        // 画像のインスタンスを生成する\n        let target = new Image();\n        // 画像がロード完了したときの処理を先に記述する\n        target.addEventListener('load', () => {\n            // もしコールバックがあれば呼び出す\n            if (callback != null) {\n                // コールバック関数の引数に画像を渡す\n                callback(target);\n            }\n        }, false);\n        // 画像のロードを開始するためにパスを指定する\n        target.src = path;\n    }\n}\nexports.Canvas2DUtility = Canvas2DUtility;\n\n\n//# sourceURL=webpack://woo-tank/./src/canvas2d.ts?");

/***/ }),

/***/ "./src/character.ts":
/*!**************************!*\
  !*** ./src/character.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Tank = exports.Vector2 = void 0;\nconst AngleDefault = -Math.PI / 2;\nconst EPS = 0.00001; //浮動小数点演算の誤差用のEPSILON\n/**\n * 座標を管理するためのクラス\n */\nclass Vector2 {\n    /**\n     * @constructor\n     * @param {number} x - X 座標\n     * @param {number} y - Y 座標\n     */\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    /**\n     * ベクトルの長さを返す静的メソッド\n     * @static\n     * @param {number} x - X 要素\n     * @param {number} y - Y 要素\n     */\n    static calcLength(x, y) {\n        return Math.sqrt(x * x + y * y);\n    }\n    /**\n     * ベクトルを単位化した結果を返す静的メソッド\n     * @static\n     * @param {number} x - X 要素\n     * @param {number} y - Y 要素\n     */\n    static calcnormal(x, y) {\n        let len = Vector2.calcLength(x, y);\n        return new Vector2(x / len, y / len);\n    }\n    /**\n     * 値を設定する\n     * @param {number} [x] - 設定する X 座標\n     * @param {number} [y] - 設定する Y 座標\n     */\n    set(x, y) {\n        if (x != null) {\n            this.x = x;\n        }\n        if (y != null) {\n            this.y = y;\n        }\n    }\n    //ベクトルの長さを返す\n    length() {\n        return Math.sqrt(this.x * this.x + this.y * this.y);\n    }\n    /**\n     * 対象の Vector2 クラスのインスタンスとの距離を返す\n     * @param {Vector2} target - 距離を測る対象\n     */\n    distance(target) {\n        let x = this.x - target.x;\n        let y = this.y - target.y;\n        return Math.sqrt(x * x + y * y);\n    }\n    //内積\n    innerProduct(target) {\n        return this.x * target.x + this.y * target.y;\n    }\n    /**\n     * 対象の Vector2 クラスのインスタンスとの外積を計算する\n     * this.vector x target.vector\n     * @param {Vector2} target - 外積の計算を行う対象\n     */\n    cross(target) {\n        return this.x * target.y - this.y * target.x;\n    }\n    //半時計回り方向(マイナス方向の角度)にある法線ベクトルを返す\n    //大きさは元と同じ\n    ccwNormal() {\n        return [this.y, -this.x];\n    }\n    /**\n     * 自身を正規化する\n     */\n    normalize() {\n        // ベクトルの大きさを計算する\n        let l = this.length();\n        // 大きさが 0 の場合は XY も 0 なのでなにもしない\n        if (Math.abs(l) < EPS) {\n        }\n        // 自身の XY 要素を大きさで割る\n        // 単位化されたベクトルを返す\n        this.set(this.x / l, this.y / l);\n    }\n    //自身を回転させる\n    //axis: 回転軸の座標\n    //theta: 回転角度(rad)\n    rotate(axis, theta, norm) {\n        // 指定されたラジアンからサインとコサインを求める\n        let s = Math.sin(theta);\n        let c = Math.cos(theta);\n        //回転軸から自身の点までのベクトルの単位ベクトルを求める\n        let unit = new Vector2(this.x - axis.x, this.y - axis.y);\n        unit.normalize();\n        unit.x = unit.x * c + unit.y * -s;\n        unit.y = unit.x * s + unit.y * c;\n        //戻す\n        this.x = unit.x * norm + axis.x;\n        this.y = unit.y * norm + axis.y;\n    }\n}\nexports.Vector2 = Vector2;\n/**\n * キャラクター管理のための基幹クラス\n */\nclass Character {\n    constructor(ctx, x, y, scale, hp, imgPath) {\n        this.ctx = ctx;\n        this.position = new Vector2(x, y);\n        this.vector = new Vector2(0.0, -1.0);\n        this.angle = AngleDefault; //元画像のまま\n        this.speed = 0; //デフォルトの値\n        this.scale = scale;\n        this.image = new Image();\n        this.image.addEventListener('load', () => {\n            // 画像のロードが完了したら準備完了フラグを立てる\n            this.ready = true;\n            //元画像のサイズと指定されたスケールからサイズを決定\n            this.width = this.scale * this.image.naturalWidth;\n            this.height = this.scale * this.image.naturalHeight;\n        }, false);\n        this.image.src = imgPath;\n    }\n    /**\n     * 進行方向を設定する\n     * @param {number} x - X 方向の移動量\n     * @param {number} y - Y 方向の移動量\n     */\n    setVector(x, y) {\n        this.vector.set(x, y);\n    }\n    //自身の向きの角度(rad)を-PI 〜 PIの範囲に直す\n    limitRange() {\n        if (this.angle <= -Math.PI) {\n            this.angle += 2 * Math.PI;\n        }\n        else if (this.angle > Math.PI) {\n            this.angle -= 2 * Math.PI;\n        }\n    }\n    /**\n     * キャラクターを描画する\n     */\n    draw() {\n        // キャラクターの幅を考慮してオフセットする量\n        let offsetX = this.width / 2;\n        let offsetY = this.height / 2;\n        // キャラクターの幅やオフセットする量を加味して描画する\n        this.ctx.drawImage(this.image, this.position.x - offsetX, this.position.y - offsetY, this.width, this.height);\n    }\n    /**\n     * 自身の回転量を元に座標系を回転させる\n     */\n    rotationDraw() {\n        this.limitRange();\n        // 座標系を回転する前の状態を保存する\n        this.ctx.save();\n        // 自身の位置が座標系の中心と重なるように平行移動する\n        this.ctx.translate(this.position.x, this.position.y);\n        // 座標系を回転させる（270 度の位置を基準にするため Math.PI * 1.5 を引いている）\n        this.ctx.rotate(this.angle - AngleDefault);\n        // キャラクターの幅を考慮してオフセットする量\n        let offsetX = (this.width / 2);\n        let offsetY = (this.height / 2);\n        // キャラクターの幅やオフセットする量を加味して描画する\n        this.ctx.drawImage(this.image, -offsetX, // 先に translate で平行移動しているのでオフセットのみ行う\n        -offsetY, // 先に translate で平行移動しているのでオフセットのみ行う\n        this.width, this.height);\n        // 座標系を回転する前の状態に戻す\n        this.ctx.restore();\n    }\n}\n//tankクラス\nclass Tank extends Character {\n    constructor(ctx, x, y, scale_body, bodyImagePath, scale_turret, turretImagePath) {\n        //車体を初期化\n        super(ctx, x, y, scale_body, 5, bodyImagePath);\n        this.init_pos = new Vector2(x, y);\n        //自身の移動スピード（update 一回あたりの移動量）\n        this.speed = 3;\n        //砲塔画像読み込み\n        this.imageTurret = new Image();\n        this.imageTurret.addEventListener('load', () => {\n            // 画像のロードが完了したら準備完了フラグを立てる\n            this.ready = true;\n            //元画像のサイズと指定されたスケールからサイズを決定\n            this.width_turret = scale_turret * this.imageTurret.naturalWidth;\n            this.height_turret = scale_turret * this.imageTurret.naturalHeight;\n        }, false);\n        this.imageTurret.src = turretImagePath;\n    }\n    //キャラクターの状態を更新し描画を行う\n    update() {\n        //自身の移動方向\n        let pre_pos = new Vector2(this.position.x, this.position.y);\n        //後進\n        if (window.isKeyDown.key_s || window.isKeyDown.key_ArrowDown) {\n            //旋回\n            //後進中は旋回方向を反転する\n            if (window.isKeyDown.key_ArrowLeft || window.isKeyDown.key_a) {\n                this.angle += 2 * Math.PI / 180; // 1度\n            }\n            if (window.isKeyDown.key_ArrowRight || window.isKeyDown.key_d) {\n                this.angle -= 2 * Math.PI / 180; // 1度\n            }\n            this.position.x -= this.speed * Math.cos(this.angle);\n            this.position.y -= this.speed * Math.sin(this.angle);\n        }\n        else {\n            //旋回\n            if (window.isKeyDown.key_ArrowLeft || window.isKeyDown.key_a) {\n                this.angle -= 2 * Math.PI / 180; // 1度\n            }\n            if (window.isKeyDown.key_ArrowRight || window.isKeyDown.key_d) {\n                this.angle += 2 * Math.PI / 180; // 1度\n            }\n            //前進\n            if (window.isKeyDown.key_w || window.isKeyDown.key_ArrowUp) {\n                this.position.x += this.speed * Math.cos(this.angle);\n                this.position.y += this.speed * Math.sin(this.angle);\n            }\n        }\n        //速度ベクトルを更新\n        this.vector.set(Math.cos(this.angle), Math.sin(this.angle));\n        // 移動後の位置が画面外へ出ていないか確認して修正する\n        let canvasWidth = this.ctx.canvas.width;\n        let canvasHeight = this.ctx.canvas.height;\n        let tx = Math.min(Math.max(this.position.x, this.width / 2), canvasWidth - this.width / 2);\n        let ty = Math.min(Math.max(this.position.y, 0), canvasHeight);\n        this.position.set(tx, ty);\n        // 車体を描画する\n        this.rotationDraw();\n        //砲塔を描画する\n        this.drawTurret();\n        // 念の為グローバルなアルファの状態を元に戻す\n        this.ctx.globalAlpha = 1.0;\n    }\n    //砲塔を描画\n    drawTurret() {\n        this.limitRange();\n        // 座標系を回転する前の状態を保存する\n        this.ctx.save();\n        // 自身の位置が座標系の中心と重なるように平行移動する\n        this.ctx.translate(this.position.x, this.position.y);\n        // 座標系を回転させる（270 度の位置を基準にするため Math.PI * 1.5 を引いている）\n        this.ctx.rotate(this.angle - AngleDefault);\n        // キャラクターの幅を考慮してオフセットする量\n        let offsetX = (this.width_turret / 2);\n        let offsetY = (this.height_turret / 2);\n        // キャラクターの幅やオフセットする量を加味して描画する\n        this.ctx.drawImage(this.imageTurret, -offsetX, // 先に translate で平行移動しているのでオフセットのみ行う\n        -offsetY, // 先に translate で平行移動しているのでオフセットのみ行う\n        this.width_turret, this.height_turret);\n        // 座標系を回転する前の状態に戻す\n        this.ctx.restore();\n        //描画時の位置と角度を保存\n        //this.prePosition.set(this.position.x, this.position.y);\n        //this.preAngle = this.angle;\n    }\n}\nexports.Tank = Tank;\n\n\n//# sourceURL=webpack://woo-tank/./src/character.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst canvas2d_1 = __webpack_require__(/*! ./canvas2d */ \"./src/canvas2d.ts\");\nconst character_1 = __webpack_require__(/*! ./character */ \"./src/character.ts\");\n//キーの押下状態を調べるためのオブジェクト\nwindow.isKeyDown = {};\n(() => {\n    //canvas の幅\n    const CANVAS_WIDTH = 900;\n    //canvas の高さ\n    const CANVAS_HEIGHT = 600;\n    //Canvas2D API をラップしたユーティリティクラス\n    let util = null;\n    //描画対象となる Canvas Element\n    let canvas = null;\n    //Canvas2D API のコンテキスト\n    let ctx = null;\n    //自機キャラクターのインスタンス\n    let tank_blue = null;\n    let mainRequestID = null;\n    //ページのロードが完了したときに発火する load イベント\n    window.addEventListener('load', () => {\n        // ユーティリティクラスを初期化\n        util = new canvas2d_1.Canvas2DUtility(document.body.querySelector('#main_canvas'));\n        // ユーティリティクラスから canvas を取得\n        canvas = util.canvas;\n        // ユーティリティクラスから 2d コンテキストを取得\n        ctx = util.context;\n        // canvas の大きさを設定\n        canvas.width = CANVAS_WIDTH;\n        canvas.height = CANVAS_HEIGHT;\n        // 初期化処理を行う\n        initialize();\n        loadCheck();\n    }, false);\n    //canvas やコンテキストを初期化する\n    function initialize() {\n        // 自機キャラクターを初期化する\n        tank_blue = new character_1.Tank(ctx, CANVAS_WIDTH * 0.3, CANVAS_HEIGHT * 0.9, 1.2, './image/tank_blue.png', 0.4, './image/turret_blue.png');\n        console.log('画像の読み込み完了しました！！');\n    }\n    // 全ての準備が完了したら描画処理を開始する\n    //インスタンスの準備が完了しているか確認する\n    function loadCheck() {\n        // 準備完了を意味する真偽値\n        let ready = true;\n        // AND 演算で準備完了しているかチェックする\n        ready = ready && tank_blue.ready;\n        if (ready) {\n            // イベントを設定する\n            eventSetting();\n            //ループ処理\n            update();\n        }\n        else {\n            // 準備が完了していない場合は 0.1 秒ごとに再帰呼出しする\n            setTimeout(loadCheck, 100);\n        }\n    }\n    //イベントを設定する\n    function eventSetting() {\n        // キーの押下時に呼び出されるイベントリスナーを設定する\n        window.addEventListener('keydown', (event) => {\n            // キーの押下状態を管理するオブジェクトに押下されたことを設定する\n            window.isKeyDown[`key_${event.key}`] = true;\n            //スペースの場合\n            if (event.key === ' ') {\n                // キーの押下状態を管理するオブジェクトに押下されたことを設定する\n                window.isKeyDown['key_Space'] = true;\n                console.log('スペースキー押されてるよ');\n            }\n        }, false);\n        // キーが離された時に呼び出されるイベントリスナーを設定する\n        window.addEventListener('keyup', (event) => {\n            // キーが離されたことを設定する\n            window.isKeyDown[`key_${event.key}`] = false;\n            //スペースの場合\n            if (event.key === ' ') {\n                // キーの押下状態を管理するオブジェクトに押下されたことを設定する\n                window.isKeyDown['key_Space'] = false;\n            }\n        }, false);\n    }\n    //処理を行う\n    function update() {\n        //ゲーム実行\n        // グローバルなアルファを必ず 1.0 で描画処理を開始する\n        ctx.globalAlpha = 1.0;\n        // 描画前に画面を背景色で塗りつぶす\n        util.drawRect(0, 0, canvas.width, canvas.height, '#000000');\n        tank_blue.update();\n        // 恒常ループのために描画処理を再帰呼出しする\n        mainRequestID = requestAnimationFrame(update);\n    }\n})();\n\n\n//# sourceURL=webpack://woo-tank/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;