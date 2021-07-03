controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    FlamingFighter.setImage(assets.image`Flaming Fighter - facing backwards`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Weapon`, FlamingFighter, 30, 30)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    FlamingFighter.setImage(assets.image`Flaming Fighter - facing left`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    tiles.setTilemap(tilemap`Level 2`)
    DemonSnake.setPosition(randint(30, 160), randint(30, 160))
    FlamingFighter.setPosition(220, 188)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    FlamingFighter.setImage(assets.image`Flaming Fighter - facing right`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    tiles.setTilemap(tilemap`Level 4`)
    DemonSnake.setPosition(randint(30, 160), randint(30, 160))
    FlamingFighter.setPosition(180, 188)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    DemonSnake.setPosition(randint(30, 160), randint(30, 160))
    info.changeLifeBy(-1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    FlamingFighter.setImage(assets.image`Flaming Fighter - facing forwards`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedWest, function (sprite, location) {
    tiles.setTilemap(tilemap`Level 3`)
    DemonSnake.setPosition(randint(30, 160), randint(30, 160))
    FlamingFighter.setPosition(40, 40)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    DemonSnake.setPosition(randint(30, 160), randint(30, 160))
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let DemonSnake: Sprite = null
let FlamingFighter: Sprite = null
info.setScore(0)
info.setLife(3)
FlamingFighter = sprites.create(assets.image`Flaming Fighter`, SpriteKind.Player)
DemonSnake = sprites.create(assets.image`Demon Snake`, SpriteKind.Enemy)
DemonSnake.setPosition(randint(30, 160), randint(30, 160))
FlamingFighter.setPosition(40, 180)
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
