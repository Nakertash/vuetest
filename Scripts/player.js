var player={ health:100, maxHealth:100};
player.healthChanged=[];
player.TakeDamage= (amount)=>{
    if(this.health-amount>0)
    {
        this.health=this.health-amount
    }else{
        this.health=0;
    }
    this.healthChanged.forEach(element => element());
};