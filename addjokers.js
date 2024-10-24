let jokers = [
  {
    name: "The Sad Onion",
    text: [
      "{C:chips}+70{} Chips Up"
    ],
    image_url: "img/thesadonion.png",
    rarity: "Rare"
  },
  {
    name: "The Inner Eye",
    text: [
      "{C:hands}+3{} Hands"
    ],
    image_url: "img/theinnereye.png",
    rarity: "Uncommon"
  },
  {
    name: "Spoon Bender",
    text: [
      "Balances {C:chips}Chips{} and {C:mult}Mult{}"
    ],
    image_url: "img/spoonbender.png",
    rarity: "Rare"
  },
  {
    name: "Cricket's Head",
    text: [
      "{C:mult}+5{} Mult",
      "{X:mult,C:white}1.5x{} Mult"
    ],
    image_url: "img/cricketshead.png",
        rarity: "Legendary"
  },
  {
    name: "My Reflection",
    text: [
      "{C:blue}+2{} Hand Size"
    ],
    image_url: "img/myreflection.png",
    rarity: "Uncommon"
  },
  {
    name: "Number One",
    text: [
      "{C:chips}+150{} Chips",
      "{C:blue}-1{} Hand Size"
    ],
    image_url: "img/numberone.png",
    rarity: "Uncommon"
  }
]

 
let consumables = [
  {
    name: "Blood of The Martyr",
    text: [
      ""
    ],
    image_url: "img/bloodofthemartyr.png",
    rarity: "Rare",
  },
  {
    name: "Brother Bobby",
    text: [
      ""
    ],
    image_url: "img/brotherbobby.png",
    rarity: "Common"
  },
  {
    name: "Skatole",
    text: [
      ""
    ],
    image_url: "img/skatole.png",
    rarity: "Legendary"
  },
  {
    name: "Halo of Flies",
    text: [
      ""
    ],
    image_url: "img/haloofflies.png",
    rarity: "Uncommon"
  },
  {
    name: "1up!",
    text: [
      ""
    ],
    image_url: "img/1up!.png",
    rarity: "Uncommon"
  },
  {
    name: "Magic Mushroom",
    text: [
      ""
    ],
    image_url: "img/magicmushroom.png",
    rarity: "Legendary"
  },
  {
    name: "The Virus",
    text: [
      ""
    ],
    image_url: "img/thevirus.png",
    rarity: "Uncommon"
  },
  {
    name: "Roid Rage",
    text: [
      ""
    ],
    image_url: "img/roidrage.png",
    rarity: "Uncommon"
  },
  {
    name:"<3",
    text: [
      ""
    ],
    image_url: "img/heart.png",
    rarity: "Uncommon"
  }
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