﻿addLayer("ip", {
    name: "Infinity Points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "∞", // This appears on the layer's node. Default is the id with the first letter capitalized
    row: 1,
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,

        diceRuns: new Decimal(0),
        rocketFuelRuns: new Decimal(0),
    }
    },
    automate() {
    },
    nodeStyle() {
        return {
            background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)",
            "background-origin": "border-box",
            "border-color": "#7c5423",
        };
      },
    
    tooltip: "Infinity",
    color: "white",
    update(delta) {
        let onepersec = new Decimal(1)
    },
    branches: ["ad"],
    clickables: {
        1: {
            title() { return "<h2>Return" },
            canClick() { return true },
            unlocked() { return true },
            onClick() {
                player.tab = "in"
            },
            style: { width: '100px', "min-height": '50px' },
        },
    },
    bars: {
    },
    upgrades: {
        11:
        {
            title: "Upgrade (1, 1)",
            unlocked() { return true },
            description: "Unlocks Antimatter Dimensions.",
            cost: new Decimal(1),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
        },
        12:
        {
            title: "Upgrade (1, 2)",
            unlocked() { return true },
            description: "Boosts antimatter based on completed dice runs.",
            cost: new Decimal(2),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
            effect() {
                return player.ip.diceRuns.pow(1.1).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }, 
        13:
        {
            title: "Upgrade (1, 3)",
            unlocked() { return true },
            description: "Boosts 7th dimensions based on completed rocket fuel runs.",
            cost: new Decimal(2),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
            effect() {
                return player.ip.rocketFuelRuns.pow(0.9).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },  
        14:
        {
            title: "Upgrade (1, 4)",
            unlocked() { return true },
            description: "Boosts factor power based on antimatter.",
            cost: new Decimal(6),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
            effect() {
                return player.ad.antimatter.plus(1).log10().pow(1.2).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }, 


        21:
        {
            title: "Upgrade (2, 1)",
            unlocked() { return hasUpgrade("ip", 11) },
            description: "Boosts factor power and prestige points based on infinities.",
            cost: new Decimal(1),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
            effect() {
                return player.in.infinities.pow(1.4).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }, 
        22:
        {
            title: "Upgrade (2, 2)",
            unlocked() { return hasUpgrade("ip", 11) },
            description: "Boosts tree and leaf gain based on infinities.",
            cost: new Decimal(4),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
            effect() {
                return player.in.infinities.pow(1.2).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }, 
        23:
        {
            title: "Upgrade (2, 3)",
            unlocked() { return hasUpgrade("ip", 11) },
            description: "Boosts mod and lines of code gain based on infinities.",
            cost: new Decimal(9),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
            effect() {
                return player.in.infinities.pow(1.15).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }, 
        24:
        {
            title: "Upgrade (2, 4)",
            unlocked() { return hasUpgrade("ip", 11) },
            description: "Boosts golden grass gain based on infinities.",
            cost: new Decimal(16),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
            effect() {
                return player.in.infinities.add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }, 


        31:
        {
            title: "Upgrade (3, 1)",
            unlocked() { return hasUpgrade("ip", 21) },
            description: "Unlocks more check back content.",
            cost: new Decimal(1),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
        },
        32:
        {
            title: "Upgrade (3, 2)",
            unlocked() { return hasUpgrade("ip", 21) },
            description: "Boosts grasshoppers based on infinity points.",
            cost: new Decimal(3),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
            effect() {
                return player.in.infinityPoints.mul(0.5).pow(0.7).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }, 
        33:
        {
            title: "Upgrade (3, 3)",
            unlocked() { return hasUpgrade("ip", 31) },
            description: "Boosts code experience based on infinity points.",
            cost: new Decimal(25),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
            effect() {
                return player.in.infinityPoints.mul(0.65).pow(0.65).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }, 
        34:
        {
            title: "Upgrade (3, 4)",
            unlocked() { return hasUpgrade("ip", 31) },
            description: "Boosts dice points and rocket fuel based on infinity points.",
            cost: new Decimal(69),
            currencyLocation() { return player.in },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinityPoints",
            effect() {
                return player.in.infinityPoints.mul(0.3).pow(0.5).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        }, 
    },
    buyables: {
        11: {
            cost(x) { return new Decimal(100).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect(x) { return new Decimal.pow(2, getBuyableAmount(this.layer, this.id)) },
            unlocked() { return true },
            canAfford() { return player.in.infinityPoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>IP Doubler"
            },
            display() {
                return "which are multiplying infinity points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " IP"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 100
                if (player.buyMax == false)
                {
                    let buyonecost = new Decimal(growth).pow(getBuyableAmount(this.layer, this.id)).mul(base)
                    player.in.infinityPoints = player.in.infinityPoints.sub(buyonecost)
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                } else
                {
    
                let max = Decimal.affordGeometricSeries(player.in.infinityPoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.in.infinityPoints = player.in.infinityPoints.sub(cost)

                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            }
            },
            style: { width: '275px', height: '150px', }
        },
    },
    milestones: {
        11: {
            requirementDescription: "<h3>2 Infinities",
            effectDescription: "Keeps grass and prestige upgrades on all resets.",
            done() { return player.in.infinities.gte(2) },
            style: { width: '800px', "min-height": '75px' },
        },
        12: {
            requirementDescription: "<h3>3 Infinities",
            effectDescription: "Keep check back unlocked, gain 5% of prestige points per second.",
            done() { return player.in.infinities.gte(3) },
            style: { width: '800px', "min-height": '75px' },
        },
        13: {
            requirementDescription: "<h3>4 Infinities",
            effectDescription: "Gain 5% of grass per second.",
            done() { return player.in.infinities.gte(4) },
            style: { width: '800px', "min-height": '75px' },
        },
        14: {
            requirementDescription: "<h3>5 Infinities",
            effectDescription: "Keep antimatter progress on regular infinity resets.",
            done() { return player.in.infinities.gte(5) },
            style: { width: '800px', "min-height": '75px' },
        },
        15: {
            requirementDescription: "<h3>6 Infinities",
            effectDescription: "Keeps pent milestones on infinity.",
            done() { return player.in.infinities.gte(6) },
            style: { width: '800px', "min-height": '75px' },
        },
        16: {
            requirementDescription: "<h3>8 Infinities",
            effectDescription: "Unlock challenges.",
            done() { return player.in.infinities.gte(8) },
            style: { width: '800px', "min-height": '75px' },
        },
        17: {
            requirementDescription: "<h3>25 Infinities",
            effectDescription: "Autobuys grass studies and mod buyables.",
            done() { return player.in.infinities.gte(25) && hasChallenge("ip", 14) },
            unlocked() { return hasChallenge("ip", 14) },
            style: { width: '800px', "min-height": '75px' },
        },
        18: {
            requirementDescription: "<h3>50 Infinities",
            effectDescription: "Gain an option to keep OTFs on infinity reset.",
            done() { return player.in.infinities.gte(50) && hasChallenge("ip", 14) },
            unlocked() { return hasChallenge("ip", 14) },
            style: { width: '800px', "min-height": '75px' },
        },
        19: {
            requirementDescription: "<h3>80 Infinities",
            effectDescription() { return "Autobuy universe 1 upgrades." },
            done() { return player.in.infinities.gte(80) },
            unlocked() { return hasChallenge("ip", 14) },
            style: { width: '800px', "min-height": '90px' },
            toggles: [
                ["i", "auto"], // Each toggle is defined by a layer and the data toggled for that layer
            ],
        },
        21: {
            requirementDescription: "<h3>150 Infinities",
            effectDescription() { return "You get an option to skip the big crunch animation, and automatically reset." },
            done() { return player.in.infinities.gte(150) },
            unlocked() { return hasChallenge("ip", 14) },
            style: { width: '800px', "min-height": '90px' },
            toggles: [
                ["bigc", "skip"], // Each toggle is defined by a layer and the data toggled for that layer
            ],
        },
        22: {
            requirementDescription: "<h3>300 Infinities",
            effectDescription() { return "Gain 10% of grasshoppers and code experience per second." },
            done() { return player.in.infinities.gte(300) },
            unlocked() { return hasChallenge("ip", 14) },
            style: { width: '800px', "min-height": '90px' },
        },
        23: {
            requirementDescription: "<h3>1500 Infinities",
            effectDescription() { return "Unlocks the point halter (in portal)." },
            done() { return player.in.infinities.gte(1500) },
            unlocked() { return hasChallenge("ip", 14) },
            style: { width: '800px', "min-height": '90px' },
        },
    },
    challenges: {
        11: {
            name: "Challenge I",
            challengeDescription() { return "<h4>You can't pick an otherworldy feature." },
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) },
            rewardDescription: "Unlock new grass studies.",
            onEnter() {
                player.in.infinityPause = new Decimal(6)
            },
            onExit() {
                player.in.infinityPause = new Decimal(6)
            },
            style: { width: '350px', height: '275px', }

        },
        12: {
            name: "Challenge II",
            challengeDescription() { return "<h4>Introduces pests, which do bad things to your grass :(" },
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) },
            rewardDescription: "Unlocks a new check back button at level 125.",
            unlocked() { return hasChallenge("ip", 11) },
            onEnter() {
                player.in.infinityPause = new Decimal(6)
            },
            onExit() {
                player.in.infinityPause = new Decimal(6)
            },
            style: { width: '350px', height: '275px', }

        },
        13: {
            name: "Challenge III",
            challengeDescription() { return "<h4>Hex... A feature seemingly coming from thin air. No check back effects either..." },
            goalDescription() { return "Hex 4" },
            goal() { return new Decimal("4") },
            canComplete: function () { return player.h.hex.gte(4) },
            rewardDescription: "Permanently unlocks hex as an otherworldly feature.",
            unlocked() { return hasChallenge("ip", 12) },
            onEnter() {
                player.in.infinityPause = new Decimal(6)
            },
            onExit() {
                player.in.infinityPause = new Decimal(6)
            },
            style: { width: '350px', height: '275px', }

        },
        14: {
            name: "Challenge IV",
            challengeDescription() { return "<h4>IP and AD upgrades are disabled, some IP milestones are disabled, and pent divides point gain, but is necessary to unlock OTFs." },
            goalDescription() { return "Pent 30" },
            goal() { return new Decimal("30") },
            canComplete: function () { return player.r.pent.gte(30) },
            rewardDescription: "Unlocks infinity point buyables and new milestones.",
            unlocked() { return hasChallenge("ip", 13) },
            onEnter() {
                player.in.infinityPause = new Decimal(6)
            },
            onExit() {
                player.in.infinityPause = new Decimal(6)
            },
            style: { width: '350px', height: '275px', }

        },
        15: {
            name: "Challenge V",
            challengeDescription() { return "<h4>You are stuck in dice, the booster dice automatically rolls but on every roll, it does a reset equivalent to a big crunch. There are also general debuffs." },
            goalDescription() { return "1.79e308 celestial points" },
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) },
            rewardDescription: "Unlock new booster dice effects, and booster dice automation.",
            unlocked() { return hasChallenge("ip", 14) },
            onEnter() {
                player.in.infinityPause = new Decimal(6)

                player.d.challengeDicePoints = new Decimal(0)
                player.d.buyables[21] = new Decimal(0)
                player.d.buyables[22] = new Decimal(0)
                player.d.buyables[23] = new Decimal(0)
                player.d.buyables[24] = new Decimal(0)
        
                for (let i = 0; i < player.d.upgrades.length; i++) {
                    if (+player.d.upgrades[i] < 100) {
                        player.d.upgrades.splice(i, 1);
                        i--;
                    }
                }
            },
            onExit() {
                player.in.infinityPause = new Decimal(6)
            },
            style: { width: '350px', height: '275px', }

        },
        16: {
            name: "Challenge VI",
            challengeDescription() { return "<h4>You are stuck in rocket fuel, and point gain is raised to the ^0.02." },
            goalDescription() { return "1.79e308 prestige points" },
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.p.prestigePoints.gte(1.79e308) },
            rewardDescription: "Unlock new rocket fuel abilities, and ability automation, and gain 20% of rocket fuel per second.",
            unlocked() { return hasChallenge("ip", 15) },
            onEnter() {
                player.in.infinityPause = new Decimal(6)
            },
            onExit() {
                player.in.infinityPause = new Decimal(6)
            },
            style: { width: '350px', height: '275px', }

        },
        17: {
            name: "Challenge VII",
            challengeDescription() { return "<h4>Does an XPBoost-equivalent reset, and XP is being constantly drained. When XP reaches 0, you are sent back a level with very little XP." },
            goalDescription() { return "Level 75" },
            goal() { return new Decimal("75") },
            canComplete: function () { return player.cb.level.gte(75) },
            rewardDescription: "Check back buyables.",
            unlocked() { return hasChallenge("ip", 16) },
            onEnter() {
                player.in.infinityPause = new Decimal(6)

                player.cb.level = new Decimal(1)
                player.cb.xp = new Decimal(0)
            },
            onExit() {
                player.in.infinityPause = new Decimal(6)
            },
            style: { width: '350px', height: '275px', }

        },
        18: {
            name: "Challenge VIII",
            challengeDescription() { return "<h4>Debuff Hell. You'd hate it, but there will still be worse things to come." },
            goalDescription() { return "1.79e308 celestial points" },
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) },
            rewardDescription: "....???",
            unlocked() { return hasChallenge("ip", 17) },
            onEnter() {
                player.in.infinityPause = new Decimal(6)
            },
            onExit() {
                player.in.infinityPause = new Decimal(6)
            },
            style: { width: '350px', height: '275px', }

        },
    },
    infoboxes: {
    },
    microtabs: {
        stuff: {
            "Upgrades": {
                buttonStyle() { return { 'color': 'white' } },
                unlocked() { return true },
                content:
                [
                        ["blank", "25px"],
                        ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14]]],
                        ["row", [["upgrade", 21], ["upgrade", 22], ["upgrade", 23], ["upgrade", 24]]],
                        ["row", [["upgrade", 31], ["upgrade", 32], ["upgrade", 33], ["upgrade", 34]]],
                ]

            },
            "Milestones": {
                buttonStyle() { return { 'color': 'white' } },
                unlocked() { return true },
                content:
                [
                        ["blank", "25px"],
                        ["raw-html", function () { return "You have <h3>" + formatWhole(player.in.infinities) + "</h3> infinities." }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["milestone", 11]]],
                        ["row", [["milestone", 12]]],
                        ["row", [["milestone", 13]]],
                        ["row", [["milestone", 14]]],
                        ["row", [["milestone", 15]]],
                        ["row", [["milestone", 16]]],
                        ["row", [["milestone", 17]]],
                        ["row", [["milestone", 18]]],
                        ["row", [["milestone", 19]]],
                        ["row", [["milestone", 21]]],
                        ["row", [["milestone", 22]]],
                        ["row", [["milestone", 23]]],
                ]

            },
            "Challenges": {
                buttonStyle() { return { 'color': 'white' } },
                unlocked() { return hasMilestone("ip", 16) },
                content:
                [
                        ["blank", "25px"],
                        ["row", [["challenge", 11], ["challenge", 12], ["challenge", 13], ["challenge", 14]]],
                        ["row", [["challenge", 15], ["challenge", 16], ["challenge", 17], ["challenge", 18]]],
                ]

            },
            "Buyables": {
                buttonStyle() { return { 'color': 'white' } },
                unlocked() { return hasChallenge("ip", 14) },
                content:
                [
                        ["blank", "25px"],
                        ["row", [["buyable", 11]]],
                ]

            },
        },
    }, 

    tabFormat: [                        ["raw-html", function () { return "You have <h3>" + format(player.in.infinityPoints) + "</h3> infinity points." }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
         ["raw-html", function () { return "You will gain <h3>" + format(player.in.infinityPointsToGet) + "</h3> on reset." }, { "color": "white", "font-size": "16px", "font-family": "monospace" }],
                        ["row", [["clickable", 1]]],
                        ["microtabs", "stuff", { 'border-width': '0px' }],
        ],
    layerShown() { return player.startedGame == true && player.in.unlockedInfinity}
})
