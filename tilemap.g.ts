// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level 1":
            case "level1":return tiles.createTilemap(hex`100010000101010101010101010101010101010101020303030303030303030b0d0b04010109010101010101010101010101050101090102010b03030303040101010501010901090101010101010101010105010109010807070707070706010203040101090101010101010101010109010501010c010b0401010101010101090105010109010105010203030304010c010501010901010501090101010501010105010108070706010901010105010c010501010a010101010901010105010901050101020b010b03030b010b030109010501010901010101010101010101090105010108070707070707070707070807060101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 . . 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . 2 . . 2 2 2 2 2 . . . 2 . 
. 2 . 2 . . . . . . . . . . 2 . 
. 2 . 2 2 2 2 2 2 2 . . 2 2 2 . 
. 2 . . . . . . . . . . 2 . 2 . 
. 2 . . 2 . . . . . . . 2 . 2 . 
. 2 . . 2 . 2 2 2 2 2 . . . 2 . 
. 2 . . 2 . 2 . . . 2 . . . 2 . 
. . 2 2 2 . 2 . . . 2 . 2 . 2 . 
. . . . . . 2 . . . 2 . 2 . 2 . 
. 2 2 . . 2 2 2 . . 2 . 2 . 2 . 
. 2 . . . . . . . . . . 2 . 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.doorClosedWest,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.doorClosedNorth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
