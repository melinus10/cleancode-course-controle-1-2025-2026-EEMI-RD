import weapon_desc from './weaponList.json';
export let weaponList: any[] = [];

export abstract class Weapon {
    name: string;
    damage: number;
    hits : number;
    description: string;
    constructor(name: string, damage: number , hits : number) {
        this.name = name;
        this.damage = damage;
        this.hits = hits;
        this.description="";
    }

    getDamage(): number {
        if(this.hits === 1) {
        return this.damage ;
    }   
    return (this.damage * (Math.floor(Math.random() * this.hits)));
    }

}


class Chatchet extends Weapon {
    constructor() {
        super('hatchet', 1, 1);
    }
}
class Knife extends Weapon {
    constructor() {
        super('knife', 1, 1);
    }
}
class Spear extends Weapon {
    constructor() {
        super('spear', 1, 1);
    }
}
class Sword extends Weapon {
    constructor() {
        super('sword', 5, 1);
    }
}
class Halberd extends Weapon {
    constructor() {
        super('halberd', 5, 1);
    }
}
class Bow extends Weapon {
    constructor() {
        super('bow', 1, 5);
    }
}
class Crossbow extends Weapon {
    constructor() {
        super('crossbow', 2, 5);
    }
}       
class Darts extends Weapon {
    constructor() {
        super('darts', 1, 3);
    }
}
class Dagger extends Weapon {
    constructor() {
        super('dagger', 3, 1);
    }
}   


export let weapons = [new Chatchet(), new Knife(), new Spear(), new Sword(), new Halberd(), new Bow(), new Crossbow(), new Darts(), new Dagger()];


export function init() {

    weaponList = weapons;

    let playerMaxHealth = 10;
    let playerCurrentHealth = 10;
    let enemyMaxHealth = 10;
    let enemyCurrentHealth = 10;
    let playerWeapon = weaponList[Math.floor(Math.random() * weaponList.length)];
    let enemyWeapon = null;
    let hasInit = true;
    let hasRound = true;
    let hasFought = false;
    let playerWon = false;
    let playerLost = false;

    return {
        playerMaxHealth,
        playerCurrentHealth,
        enemyMaxHealth,
        enemyCurrentHealth,
        playerWeapon,
        enemyWeapon,
        hasInit,
        hasRound,
        hasFought,
        playerWon,
        playerLost
    }
}

export function newRound(hasInit: boolean) {
    if(hasInit) {
        weaponList = weapons;

        return {
            playerWeapon: weaponList[Math.floor(Math.random() * weaponList.length)],
            enemyWeapon: null,
            hasRound: true,
            hasFought: false
        }
    } else {
        throw new Error('Game not initialized');
    }
}

export function fight(playerHealth: number, enemyHealth: number, playerWeapon: any, hasInit: boolean, hasRound: boolean, hasFought: boolean): Array<number|boolean> {
    
    if(!hasInit){
        
        throw new Error('Game not initialized');
    }
        if(!hasRound){ 
            throw new Error('Round not initialized');
        
    }
            if(hasFought) { 
                throw new Error('Round already played');
            }
    
                let playerDamages: number = 0;
                let enemyDamages: number = 0;
            
                playerDamages += playerWeapon.getDamage();
                        
                let enemyWeapon = weaponList[Math.floor(Math.random() * weaponList.length)];
            
                enemyDamages += enemyWeapon.getDamage();

                if(playerDamages === enemyDamages) {
                    return [playerHealth, enemyHealth];
                }
                
                if(playerDamages < enemyDamages) {
                    
                    playerHealth -= enemyDamages - playerDamages;
                
                }
                    enemyHealth -= playerDamages - enemyDamages;
           
                // health cannot be negative
                if(playerHealth <= 0) {
                    playerHealth = 0;
                }
            
                // health cannot be negative
                if(enemyHealth <= 0) {
                    enemyHealth = 0;
                }
                
                // check if the game is over and the player has won
                if(enemyHealth === 0) {
                    return [playerHealth, enemyHealth, enemyWeapon, true, true, false];
                }


                // check if the game is over and the player has lost
                if(playerHealth === 0) {
                    return [playerHealth, enemyHealth, enemyWeapon, true, false, true];
                }
            
                return [playerHealth, enemyHealth, enemyWeapon, true, false, false];
            }
        



