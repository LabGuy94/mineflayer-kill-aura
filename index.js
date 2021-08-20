function inject (bot) {
    bot.killaura = {}
    let attacking = false
    const attackSpeeds = {
        "wooden_sword": 1.6,
        "golden_sword": 1.6,
        "stone_sword": 1.6,
        "iron_sword": 1.6,
        "diamond_sword": 1.6,
        "netherite_sword": 1.6,
        "trident": 1.1,
        "wooden_shovel": 1.0,
        "golden_shovel": 1.0,
        "stone_shovel": 1.0,
        "iron_shovel": 1.0,
        "diamond_shovel": 1.0,
        "netherite_shovel": 1.0,
        "wooden_pickaxe": 1.2,
        "golden_pickaxe": 1.2,
        "stone_pickaxe": 1.2,
        "iron_pickaxe": 1.2,
        "diamond_pickaxe": 1.2,
        "netherite_pickaxe": 1.2,
        "wooden_axe": 0.8,
        "golden_axe": 1.0,
        "stone_axe": 0.8,
        "iron_axe": 0.9,
        "diamond_axe": 1.0,
        "netherite_axe": 1.0,
        "wooden_hoe": 1.0,
        "golden_hoe": 1.0,
        "stone_hoe": 2.0,
        "iron_hoe": 3.0,
        "diamond_hoe": 4.0,
        "netherite_hoe": 4.0,
        "other": 4.0,
        "fist": 0.3
      }
    function getCooldown(weapon) {
        if(weapon){
          if(attackSpeeds[weapon]){
            return attackSpeeds[weapon]
          }else{
            return attackSpeeds["other"]
          }
        }else{
          return attackSpeeds["fist"]
        }
      } 
    bot.killaura.aura = () => {
        const filter = e => e.type === 'mob' && e.position.distanceTo(bot.entity.position) < 3.5 &&
        e.mobType !== 'Armor Stand' 
        const entity = bot.nearestEntity(filter)
        if (entity) {
        const heldItem = bot.inventory.slots[bot.getEquipmentDestSlot('hand')];
        const cooldown = getCooldown(heldItem?.name);
        console.log("Target Found Entity Name: " +  entity.name + ", Position: " + entity.position)
        //Delayed Attack
        if(!attacking){
            attacking = true
            setTimeout(function (){
            if (entity) {
                bot.setControlState('jump', true)
                bot.lookAt(entity.position)
                setTimeout(function (){
                bot.lookAt(entity.position)
                bot.attack(entity);
                bot.clearControlStates();
                attacking = false;
                }, 400)
            }
            }, (cooldown * 1000) - 400);
        }
        }else{
        console.log("Target Not Found")
        }
    }

}
module.exports = {
    killaura: inject,
}