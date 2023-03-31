export let weapons=[{
    name:"простой кинжал",
    damage:2,
    cost:20
},
{
    name:" кинжал",
    damage:12,
    cost:2000
},
{
    name:"топор",
    damage:23,
    cost:2000
},
{
    name:"молот",
    damage:41,
    cost:2000
},
{
    name:"секира",
    damage:52,
    cost:2000
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