export let weapons=[{
    name:"простой кинжал",
    damage:2
},
{
    name:" кинжал",
    damage:12
},
{
    name:"топор",
    damage:23
},
{
    name:"молот",
    damage:41
},
{
    name:"секира",
    damage:52
}];
export function newPlayer(){
    var player={

        health:100,
        maxHealth:100,
        weapon:weapons[0],
        money:0,
        healthPercents:function(){
            return ((this.health/this.maxHealth)*100)+"%"
        }

    };

    return player;
}