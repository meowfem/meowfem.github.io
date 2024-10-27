let jokers = [
  {
    name: "The Sad Onion",
    text: [
      "{C:chips}+70{} Chips"
    ],
    image_url: "img/thesadonion.png",
    rarity: "Quality 3"
  },
  {
    name: "The Inner Eye",
    text: [
      "{C:blue}+3{} Hands"
    ],
    image_url: "img/theinnereye.png",
    rarity: "Quality 2"
  },
  {
    name: "Spoon Bender",
    text: [
      "Balances {C:chips}Chips{} and {C:mult}Mult{}"
    ],
    image_url: "img/spoonbender.png",
    rarity: "Quality 2"
  },
  {
    name: "Cricket's Head",
    text: [
      "{C:mult}+5{} Mult",
      "{X:mult,C:white}1.5x{} Mult"
    ],
    image_url: "img/cricketshead.png",
        rarity: "Quality 4"
  },
  {
    name: "My Reflection",
    text: [
      "{C:attention}+2{} Hand Size"
    ],
    image_url: "img/myreflection.png",
    rarity: "Quality 2"
  },
  {
    name: "Number One",
    text: [
      "{C:chips}+150{} Chips",
      "{C:attention}-1{} Hand Size"
    ],
    image_url: "img/numberone.png",
    rarity: "Quality 2"
  },
  {
    name: "Blood of The Martyr",
    text: [
      "{C:mult}+10{} Mult"
    ],
    image_url: "img/bloodofthemartyr.png",
    rarity: "Quality 3",
  },
  {
    name: "1up!",
    text: [
      "Prevents death {C:attention}once{}",
      "{C:red}Self destructs{}"
    ],
    image_url: "img/1up!.png",
    rarity: "Quality 2"
  },
  {
    name: "Magic Mushroom",
    text: [
      "{X:attention,C:white}0.9x{} Blind Requirement",
      "{C:mult}+10{} Mult",
      "{X:mult,C:white}1.5x{} Mult",
      "{C:attention}+3{} Hand Size"
    ],
    image_url: "img/magicmushroom.png",
    rarity: "Quality 4"
  },
  {
    name: "The Virus",
    text: [
      "{C:mult}+12{} Mult if {C:attention}first{} hand of blind"
    ],
    image_url: "img/thevirus.png",
    rarity: "Quality 2"
  },
  {
    name: "Roid Rage",
    text: [
      "{C:blue}+1{} Hand Size",
      "Gains {C:blue}+1{} Hand Size permanently per {C:attention}Blind Skipped{}"
    ],
    image_url: "img/roidrage.png",
    rarity: "Quality 2"
  },
  {
    name: "<3",
    text: [
      "{X:attention,C:white}0.9x{} Blind Requirement"
    ],
    image_url: "img/heart.png",
    rarity: "Quality 2"
  },
  {
    name: "Raw Liver",
    text: [
      "{X:attention,C:white}0.85x{} Blind Requirement"
    ],
    image_url: "img/rawliver.png",
    rarity: "Quality 2"
  },
  {
    name: "Lunch",
    text: [
      "{X:attention,C:white}0.95x{} Blind Requirement"
    ],
    image_url: "img/lunch.png",
    rarity: "Quality 1"
  },
  {
    name: "Dinner",
    text: [
      "{X:attention,C:white}0.95x{} Blind Requirement"
    ],
    image_url: "img/dinner.png",
    rarity: "Quality 1"
  },
  {
    name: "Dessert",
    text: [
      "{X:attention,C:white}0.95x{} Blind Requirement"
    ],
    image_url: "img/dessert.png",
    rarity: "Quality 1"
  },
  {
    name: "Breakfast",
    text: [
      "{X:attention,C:white}0.95x{} Blind Requirement"
    ],
    image_url: "img/breakfast.png",
    rarity: "Quality 1"
  },
  {
    name: "Rotten Meat",
    text: [
      "{X:attention,C:white}0.95x{} Blind Requirement"
    ],
    image_url: "img/rottenmeat.png",
    rarity: "Quality 1"
  },
  {
    name: "Mom's Underwear",
    text: [
      "{C:attention}+3{} Hand Size"
    ],
    image_url: "img/momsunderwear.png",
    rarity: "Quality 1"
  },
  {
    name: "Mom's Heels",
    text: [
        "{C:attention}+3{} Hand Size"
    ],
    image_url: "img/momsheels.png",
    rarity: "Quality 1"
  },
  {
    name: "Mom's Lipstick",
    text: [
        "{C:attention}+3{} Hand Size"
    ],
    image_url: "img/momslipstick.png",
    rarity: "Quality 1"
  },
  {
    name: "Wire Coat Hanger",
    text: [
      "{C:chips}+70{} Chips"
    ],
    image_url: "img/wirecoathanger.png",
    rarity: "Quality 3"
  },
  {
    name: "Mr. Boom",
    text: [
      "{C:chips}+333{} Chips if {C:attention}last{} hand of blind"
    ],
    image_url: "img/mrboom.png",
    rarity: "Quality 1"
  },
]

 
let consumables = [
  {
    name: "Brother Bobby",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/brotherbobby.png",
    rarity: "Quality 1"
  },
  {
    name: "Skatole",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/skatole.png",
    rarity: "Quality 0"
  },
  {
    name: "Halo of Flies",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/haloofflies.png",
    rarity: "Quality 2"
  },
  {
    name: "Skeleton Key",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/skeletonkey.png",
    rarity: "Quality 3"
  },
  {
    name: "A Dollar",
    text: [
      "{X:attention,C:white}99{} {C:attention}Sell Value{}",
      "{C:inactive}(No other effects){}"
    ],
    image_url: "img/adollar.png",
    rarity: "Quality 3"
  },
  {
    name: "Boom!",
    text: [
      "{C:red}+10{} {C:attention}Temporary{} discards"
    ],
    image_url: "img/boom!.png",
    rarity: "Quality 0"
  },
  {
    name: "Transcendence",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/transcendence.png",
    rarity: "Quality 3"
  },
  {
    name: "The Compass",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url:"img/thecompass.png",
    rarity: "Quality 2"
  },
  {
    name: "Wooden Spoon",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/woodenspoon.png",
    rarity: "Quality 1"
  },
  {
    name: "The Belt",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/thebelt.png",
    rarity: "Quality 1"
  },
  {
    name: "The Bible",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/thebible.png",
    rarity: "Quality 1"
  },
  {
    name: "The Book of Belial",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/thebookofbelial.png",
    rarity: "Quality 2"
  },
  {
    name: "The Necronomicon",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/thenecronomicon.png",
    rarity: "Quality 1"
  },
  {
    name: "The Poop",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/thepoop.png",
    rarity: "Quality 0"
  },
  {
    name: "Tammy's Head",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/tammyshead.png",
    rarity: "Quality 2"
  },
  {
    name: "Mom's Bra",
    text: [
      "{C:attention}Disables{} Boss Blind abilities for {C:attention}2{} Hands"
    ],
    image_url: "img/momsbra.png",
    rarity: "Quality 1"
  },
  {
    name: "Kamikaze",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/kamikaze.png",
    rarity: "Quality 0"
  },
  {
    name: "Mom's Pad",
    text: [
        "{C:attention}Disables{} Boss Blind abilities for {C:attention}2{} Hands"
    ],
    image_url: "img/momspad.png",
    rarity: "Quality 0"
  },
  {
    name: "Bob's Rotten Head",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/bobsrottenhead.png",
    rarity: "Quality 1"
  },
  {
    name: "Teleport",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/teleport.png",
    rarity: "Quality 0"
  },
  {
    name: "Yum Heart",
    text: [
      "{C:inactive}TBD{}"
    ],
    image_url: "img/yumheart.png",
    rarity: "Quality 1"
  },
  {
    name: "Lucky Foot",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/luckyfoot.png",
    rarity: "Quality 2"
  },
  {
    name: "Doctor's Remote",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/doctorsremote.png",
    rarity: "Quality 1"
  },
  {
    name: "Cupid's Arrow",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/cupidsarrow.png",
    rarity: "Quality 3"
  },
  {
    name: "Shoop Da Whoop!",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/shoopdawhoop.png",
    rarity: "Quality 2"
  },
  {
    name: "Steven",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/steven.png",
    rarity: "Quality 3"
  },
  {
    name: "Pentagram",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/pentagram.png",
    rarity: "Quality 3"
  },
  {
    name: "Dr. Fetus",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/drfetus.png",
    rarity: "Quality 4"
  },
  {
    name: "Magneto",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/magneto.png",
    rarity: "Quality 1"
  },
  {
    name: "Treasure Map",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/treasuremap.png",
    rarity: "Quality 2"
  },
  {
    name: "Mom's Eye",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/momseye.png",
    rarity: "Quality 1"
  },
  {
    name: "Lemon Mishap",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/lemonmishap.png",
    rarity: "Quality 0"
  },
  {
    name: "Distant Admiration",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/distantadmiration.png",
    rarity: "Quality 2"
  },
  {
    name: "Book of Shadows",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/bookofshadows.png",
    rarity: "Quality 3"
  },
  {
    name: "The Ladder",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/theladder.png",
    rarity: "Quality 0"
  },
  {
    name: "Charm of The Vampire",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/charmofthevampire.png",
    rarity: "Quality 1"
  },
  {
    name: "The Battery",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/thebattery.png",
    rarity: "Quality 2"
  },
  {
    name: "Steam Sale",
    text: [
    "{C:inactive}TBD{}"
    ],
    image_url: "img/steamsale.png",
    rarity: "Quality 2"
  },
  
]

let card_modifications = [

]

let decks = [

]

let stickers = [

]

let blinds = [

]

let shop_items = [

]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
  "Quality 0": "#c2c2c2",
  "Quality 1": "#90ff51",
  "Quality 2": "#65d5ff",
  "Quality 3": "#ff54ec",
  "Quality 4": "#ffd100"
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}