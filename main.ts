sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Fleder.destroy()
    Fish.destroy(effects.spray, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Fish = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . c c d d b f . . . . . . . . . . . . . . 
. . . . . . . . . . . c b d d b f f . . . . . . . . . c c c . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . c b b c . . 
. . . f f f f f f f c c c c c c f f . . . . . . . c d b c . . . 
. f f c b b b b b b b b b b b b b c f f f . . . . c d b f . . . 
f c b b b b b b b b b c b b b b b b c c c f f . c d b f . . . . 
f b c b b b b f f b b b c b c b b b c c c c c f f d c f . . . . 
f b b 1 1 1 1 f f b b b c b c b b b c c c c c c b b c f . . . . 
. f b 1 1 1 1 1 1 1 1 b b c b b b c c c c c c c c b b c f . . . 
. . f c c c 3 3 c b 1 1 b b b b c c c c c c c f f f b b f . . . 
. . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . f b b f . . 
. . . . f 3 3 c 1 1 1 c b b c c d d d d d b c . . . . f f f . . 
. . . . . f f 1 1 1 1 f d b b c c d d b c c . . . . . . . . . . 
. . . . . . . c c c c c f d b b b f c c . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, Ente, 100, 0)
    Fish.setVelocity(50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Ente.destroy()
    info.changeLifeBy(-1)
})
let Fish: Sprite = null
let Fleder: Sprite = null
let Ente: Sprite = null
Ente = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 b . 
b d d c d 5 5 b 5 4 4 4 4 4 4 b 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
Ente.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(Ente, 200, 200)
game.onUpdateInterval(2000, function () {
    Fleder = sprites.create(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c c . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f c 3 b c 3 b c f b b c c c . 
f c b b b b b b c f b c b c c . 
c c 1 b b b 1 b c b b c b b c . 
c b b b b b b b b b c c c b c . 
c b 1 f f 1 c b b c c c c c . . 
c f 1 f f 1 f b b b b f c . . . 
f f f f f f f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 2 b b b c f . . . . 
. . f 2 2 2 b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    Fleder.setPosition(180, Math.randomRange(10, 130))
    Fleder.setVelocity(Math.randomRange(-100, -30), Math.randomRange(-10, 10))
})
