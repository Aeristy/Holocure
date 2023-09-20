
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/CameraController');
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/MenuController');
require('./assets/Script/Controller/Movement');
require('./assets/Script/Controller/OptionGenerator');
require('./assets/Script/Controller/OptionTest');
require('./assets/Script/Controller/SlotController');
require('./assets/Script/Controller/UIController');
require('./assets/Script/Controller/Utils');
require('./assets/Script/Controller/WorldScrolling');
require('./assets/Script/Enemy/EnemyController');
require('./assets/Script/Enemy/EnemyManager');
require('./assets/Script/Item/BaneOfRegeneration');
require('./assets/Script/Item/BloodyTear');
require('./assets/Script/Item/Dumbbell');
require('./assets/Script/Item/EyePatch');
require('./assets/Script/Item/GrowthPill');
require('./assets/Script/Item/HastePotion');
require('./assets/Script/Item/Item');
require('./assets/Script/Item/KnightyMilk');
require('./assets/Script/Item/MightyStone');
require('./assets/Script/Item/Shield');
require('./assets/Script/Item/WisdomStone');
require('./assets/Script/Manager/Level');
require('./assets/Script/Manager/ObjectPooling');
require('./assets/Script/Manager/ProjectilePooling');
require('./assets/Script/Menu/BarslideEffect');
require('./assets/Script/Menu/Button');
require('./assets/Script/Menu/Sound');
require('./assets/Script/Other Object/Coin');
require('./assets/Script/Other Object/DeathHeart');
require('./assets/Script/Other Object/DestroyableObject');
require('./assets/Script/Other Object/Experience');
require('./assets/Script/Other Object/Food');
require('./assets/Script/Other Object/Magnet');
require('./assets/Script/Other Object/Pickup');
require('./assets/Script/Player/EnemyDetector');
require('./assets/Script/Player/HealthAndShield');
require('./assets/Script/Player/OverallStats');
require('./assets/Script/Player/PlayerController');
require('./assets/Script/SlerpTest');
require('./assets/Script/TerrainTile');
require('./assets/Script/Weapon/AxeThrower');
require('./assets/Script/Weapon/Bow');
require('./assets/Script/Weapon/Melee');
require('./assets/Script/Weapon/MollyThrower');
require('./assets/Script/Weapon/OrbitProjectile');
require('./assets/Script/Weapon/Projectile');
require('./assets/Script/Weapon/ShurikenThrower');
require('./assets/Script/Weapon/SpiderCooking');
require('./assets/Script/Weapon/SpiralProjectile');
require('./assets/Script/Weapon/StartWeapon');
require('./assets/Script/Weapon/Sword');
require('./assets/Script/Weapon/ThrowableProjectile');
require('./assets/Script/Weapon/Trident');
require('./assets/Script/Weapon/Weapon');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();