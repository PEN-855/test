// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Level 2":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010507070707070707070707030704010106010101010101010101010101080101060105010101010105040101010801010601060101010101010801010108010106010507070707040108010101080101060106010101010101080101010801010601060101010101010801010108010106010b09090a0101090909010108010106010101010101010101010101080101060101010101010101010101010801010201010507010507010507010108010106010106010106010106010101080101060101060101060101060101010801010b09090b09090b09090b0909090a0101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 . . 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . 2 . . . . . 2 2 . . . 2 . 
. 2 . 2 . . . . . . 2 . . . 2 . 
. 2 . 2 2 2 2 2 . . 2 . . . 2 . 
. 2 . 2 . . . . . . 2 . . . 2 . 
. 2 . 2 . . . . . . 2 . . . 2 . 
. 2 . 2 2 2 2 . . 2 2 2 . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . . 2 . 
. . . . 2 . . 2 . . 2 2 . . 2 . 
. 2 . . 2 . . 2 . . 2 . . . 2 . 
. 2 . . 2 . . 2 . . 2 . . . 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedNorth,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouthEast], TileScale.Sixteen);
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
