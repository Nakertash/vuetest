var names=["Гоблин","Орк","Волк","Паук"];
var attackTimer=["Гоблин","Орк","Волк","Паук"];
var enemies=[{
    name:"Гоблин",
    health:20,
    damage: 5,
    money:5,
    attackTimer:500
},
{
    name:"Орк",
    health:200,
    damage: 20,
    money:100,
    attackTimer:2000
},
{
    name:"Волк",
    health:30,
    damage: 10,
    money:30,
    attackTimer:800
},
{
    name:"Паук",
    health:15,
    damage: 50,
    money:150,
    attackTimer:2000
}];
export function newEnemy(){
    var rnd=enemies.random();
    var player={
        name:rnd.name,
        state:"спокоен",
        health:rnd.health,
        maxHealth:rnd.health,
        damage:rnd.damage,
        attackTimer:rnd.attackTimer,
        attackTime:rnd.attackTimer,
        money:rnd.money,
        canAttack:function(){
            var result=false;
            if(this.attackTimer/this.attackTime>0.25)
            {
                this.state="Спокоен";
            }
            if(this.attackTimer/this.attackTime>0.1&&this.attackTimer/this.attackTime<0.25)
            {
                this.state="Готовится";
            }
            if(this.attackTimer/this.attackTime<0.1)
            {
                this.state="Атакует";
            }
            if(this.attackTimer<=0)
            {
                result=true;
                this.attackTimer=this.attackTime;
            }else{
                this.attackTimer-=1;
            }
            return result;
        }

    };

    return player;
}