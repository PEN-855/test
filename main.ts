controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    FlamingFighter.setImage(assets.image`Flaming Fighter - facing backwards`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Knife`, FlamingFighter, 30, 30)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    FlamingFighter.setImage(assets.image`Flaming Fighter - facing left`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    FlamingFighter.setImage(assets.image`Flaming Fighter - facing right`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    FlamingFighter.setImage(assets.image`Flaming Fighter - facing forwards`)
})
let projectile: Sprite = null
let FlamingFighter: Sprite = null
info.setScore(0)
info.setLife(3)
FlamingFighter = sprites.create(assets.image`Flaming Fighter`, SpriteKind.Player)
let DemonSnake = sprites.create(assets.image`Demon Snake`, SpriteKind.Enemy)
DemonSnake.setPosition(randint(30, 160), randint(30, 160))
FlamingFighter.setPosition(10, 180)
tiles.setTilemap(tilemap`Level 1`)
controller.moveSprite(FlamingFighter)
scene.cameraFollowSprite(FlamingFighter)
game.onUpdate(function () {
    DemonSnake.follow(FlamingFighter, 50)
})
forever(function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("E F G C C5 B A G ", 120)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
