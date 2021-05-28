controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    FlamingFighter.setImage(assets.image`Flaming Fighter - facing backwards`)
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
let FlamingFighter: Sprite = null
FlamingFighter = sprites.create(assets.image`Flaming Fighter`, SpriteKind.Player)
FlamingFighter.setPosition(10, 180)
tiles.setTilemap(tilemap`Level 1`)
controller.moveSprite(FlamingFighter)
scene.cameraFollowSprite(FlamingFighter)
forever(function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("A F E F D G E F ", 120)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
