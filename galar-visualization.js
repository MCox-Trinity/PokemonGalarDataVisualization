let pokemonTypes = [
    "",
    "Normal",
    "Grass",
    "Fire",
    "Water",
    "Fighting",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy"
];

//names of all locations + coordinate data to draw them
let locations = [
    { Name: "Route 1", Points: [[90, 579.5], [125, 579.5], [125, 568], [90, 568]] },
    {
        Name: "Route 2", Points: [[125, 549.5], [90, 518.5], [90, 507], [160, 507], [160, 549.5],
        [125, 549.5]]
    },
    {
        Name: "Route 3", Points: [[36, 401], [63.5, 371], [63.5, 418], [15, 418], [15, 411], [17, 411],
        [17, 401]]
    },
    { Name: "Route 4", Points: [[63.5, 360.5], [15, 360.5], [20, 365], [17, 370], [63.5, 370], [63.5, 360.5]] },
    {
        Name: "Route 5", Points: [[113, 353], [67, 353], [66.5, 356], [66.5, 360.5], [113, 360.5],
        [113, 353]]
    },
    {
        Name: "Route 6", Points: [[34, 311.5], [48, 311.5], [48, 307], [76.5, 307], [76.5, 270], [60, 270],
        [60, 277], [51, 277], [51, 285], [42, 285], [42, 287], [34, 294], [34, 311.5]]
    },
    { Name: "Route 7", Points: [[125, 315], [125, 282], [146, 282], [146, 315], [125, 315]] },
    {
        Name: "Route 8", Points: [[121, 280.5], [146, 280.5], [146, 277], [168.5, 240], [121, 240],
        [116.5, 270], [121, 280.5]]
    },
    {
        Name: "Route 9", Points: [[170.5, 320], [147.5, 320], [147.5, 277], [170, 240], [200, 240],
        [200, 285.5], [170.5, 285.5], [170.5, 320]]
    },
    {
        Name: "Route 10", Points: [[73, 216.5], [133, 216.5], [158, 136.5], [148.5, 136.5], [124, 168.5],
        [72, 168.5], [49, 136.5], [30, 136.5]]
    },
    { Name: "Axew's Eye", Points: [[85, 454], [86, 454], [89, 461], [89, 467], [85, 467], [85, 454]] },
    {
        Name: "Bridge Field", Points: [[110, 392], [124, 392], [124, 389], [113, 370], [113, 362], [86, 362],
        [86, 366], [88, 368], [96, 368], [109, 385], [110, 387]]
    },
    {
        Name: "Dappled Grove", Points: [[59, 466.5], [65.5, 466.5], [65.5, 473], [63.5, 475], [63.5, 484],
        [73, 484], [73, 500], [63, 500], [62, 499], [61, 498], [60, 497],
        [59, 496], [59, 466.5]]
    },
    {
        Name: "Dusty Bowl", Points: [[90.5, 324], [110.5, 324], [110.5, 326], [107, 330], [107, 349.5],
        [90.5, 349.5]]
    },
    {
        Name: "East Lake Axewell", Points: [[79, 431], [90, 431], [90, 436], [101, 436], [101, 431],
        [102, 431], [102, 442], [100, 442], [99, 445], [102, 454],
        [104, 455], [104, 464], [94, 464], [94, 482], [93, 483],
        [92, 483], [91, 483], [79, 471], [83.3, 465], [84, 468], [85, 469],
        [89, 469], [91, 468], [91, 460], [88, 453], [86.8, 452],
        [85, 452], [83.3, 454], [83.3, 465], [79, 471], [79, 431]]
    },
    { Name: "Galar Mine", Points: [[17, 371], [62, 371], [35, 400], [17, 400], [17, 371]] },
    {
        Name: "Galar Mine No.2", Points: [[138.5, 407], [170, 407], [154, 373], [142, 361], [125, 381.5],
        [138.5, 381.5], [138.5, 407]]
    },
    { Name: "Giant's Cap", Points: [[86.5, 324], [89.5, 324], [89.5, 343.5], [86.5, 343.5]] },
    {
        Name: "Giant's Mirror", Points: [[113, 343], [113, 331], [120, 324], [112, 324], [112, 326],
        [108.5, 330], [108.5, 343], [113, 343]]
    },
    {
        Name: "Giant's Seat", Points: [[119, 455], [128, 455], [128, 495], [127, 497], [126, 498], [124, 499.5],
        [122.5, 500], [122.5, 488], [119, 486], [119, 455]]
    },
    { Name: "Glimwood Tangle", Points: [[2, 240], [80, 240], [80, 218], [2, 218], [2, 240]] },
    {
        Name: "Hammerlocke Hills", Points: [[120, 323], [120, 316], [102, 316], [102, 318], [95, 318], [95, 316],
        [87, 316], [87, 323]]
    },
    {
        Name: "Hulbury", Points: [[142, 359.3], [122, 383], [114.5, 370], [114.5, 331], [123, 323],
        [170, 323], [170, 343], [180, 343], [180, 352], [162, 352], [162, 348],
        [145, 348], [157, 374], [142, 359.3]]
    },
    { Name: "Lake of Outrage", Points: [[86, 316], [76, 316], [76, 328], [86, 340]] },
    {
        Name: "Motostoke", Points: [[65, 382], [105, 382], [106, 383], [107, 384], [108, 385],
        [109, 386], [109, 418], [65, 418]]
    },
    { Name: "Motostoke Outskirts", Points: [[125, 418], [137, 418], [137, 383], [125, 383]] },
    { Name: "Motostoke Riverbank", Points: [[110, 418], [124, 418], [124, 394], [110, 394]] },
    {
        Name: "North Lake Miloch", Points: [[103.5, 431], [112, 431], [112, 425], [125, 425], [125, 432],
        [127, 433], [128, 434], [128.1, 453], [115, 453], [115, 450],
        [107.5, 450], [107.5, 453], [103.5, 453], [100.5, 444], [101, 443.5],
        [103.5, 443.5], [103.5, 431]]
    },
    {
        Name: "Rolling Fields", Points: [[112, 500], [98, 500], [98, 488], [84, 488], [84, 500], [74.4, 500],
        [74.4, 484], [78, 484], [78, 475], [73.5, 472], [73.5, 465.5],
        [77.5, 465.5], [77.5, 472], [89.5, 484], [93, 485], [95, 484],
        [95.5, 484.5], [96, 465.5], [104.5, 465.5], [104.5, 491], [111, 495],
        [112, 500]]
    },
    { Name: "Slumbering Weald", Points: [[57, 560], [78, 605], [56, 605], [45, 590]] },
    {
        Name: "South Lake Miloch", Points: [[106, 455], [109, 455], [109, 452], [113, 452], [113, 455],
        [117, 455], [117, 487], [121, 489], [121, 500], [113.5, 500],
        [112.5, 494], [106, 490], [106, 455]]
    },
    {
        Name: "Stony Wilderness", Points: [[113, 352], [113, 344.5], [108.5, 344.5], [108.5, 351], [89.5, 351],
        [89.5, 345], [86, 345], [86, 352]]
    },
    {
        Name: "Watchtower Ruins", Points: [[65, 431], [77, 431], [77, 447], [65, 447], [65, 465],
        [59, 465], [59, 447]]
    },
    {
        Name: "West Lake Axewell", Points: [[67, 449], [77, 449], [77, 464], [72, 464], [72, 473], [76, 476],
        [76, 482], [65, 482], [65, 476], [67, 474], [67, 449]]
    },
    // {
    //     Name: "Wyndon", Points: [[78, 60], [118, 60], [137, 83], [158, 83], [158, 135],
    //     [148, 135], [123, 167], [73, 167], [50, 135], [38, 135],
    //     [38, 83], [58, 83]]
    // },
    // { Name: "Postwick", Points: [[79.5, 605], [135, 605], [135, 581], [68.5, 581], [80, 605]] },

    // { Name: "Wedgehurst", Points: [[90, 566.5], [125, 566.5], [125, 551], [90, 520], [90, 566.5]] },    
    // {
    //     Name: "Turffield", Points: [[66, 353], [65.5, 355], [65, 356], [64.5, 357], [64, 358], [63.5, 359],
    //     [13, 359], [3, 353], [3, 315], [11, 315], [11, 296], [33, 296], [33, 313],
    //     [53, 313], [55.5, 314], [57.5, 315], [59.5, 316], [61.5, 317], [62, 318],
    //     [63, 319], [63.5, 320], [64.5, 321], [65, 322], [66, 323], [66.5, 324],
    //     [67, 325], [67.5, 326], [68, 327], [68.5, 328], [69, 329], [69.5, 330],
    //     [70, 331], [70, 344], [69.5, 345], [68, 350], [67.5, 352], [66, 353]]
    // },
    // {
    //     Name: "Hammerlocke", Points: [[78, 306], [124, 306], [124, 290], [115, 270], [105, 270],
    //     [105, 290], [92, 290], [92, 270], [78, 270], [78, 306]]
    // },
    // { Name: "Spikemuth", Points: [[172, 287], [200, 287], [200, 320], [172, 320], [172, 287]] },    
    // {
    //     Name: "Chirchester", Points: [[128, 238.5], [196, 238.5], [196, 215], [185, 198], [185, 190],
    //     [196, 180], [196, 160], [185, 148], [185, 127], [159.5, 127], [159.5, 136],
    //     [128, 238.5]]
    // },
]
 
let TypeColors = [];
//#region Type Color Defs
TypeColors[""] = "#FFFFFF";
TypeColors["Normal"] = "#BBB9AB";
TypeColors["Grass"] = "#8AD54F";
TypeColors["Fire"] = "#FA5643";
TypeColors["Water"] = "#56AEFF";
TypeColors["Fighting"] = "#A65545";
TypeColors["Flying"] = "#76A0FF";
TypeColors["Poison"] = "#AA5DA1";
TypeColors["Ground"] = "#E7C753";
TypeColors["Rock"] = "#CCBB71";
TypeColors["Bug"] = "#C2D21F";
TypeColors["Ghost"] = "#726ECB";
TypeColors["Electric"] = "#FDE039";
TypeColors["Psychic"] = "#F562B1";
TypeColors["Ice"] = "#96F1FF";
TypeColors["Dragon"] = "#8774FF";
TypeColors["Dark"] = "#8A6955";
TypeColors["Steel"] = "#C4C2DB";
TypeColors["Fairy"] = "#F9AEFF";
//#endregion


var PokemonData = [];
var PokemonGalarList = [];
function loadData() {
    d3.csv("./galar_pokedex.csv").then(function (pokedex_data) {
        pokedex_data.forEach(pokemon => {
            // console.log(pokemon)
            PokemonGalarList.push(pokemon["NAME"]);
            PokemonData[pokemon["NAME"]] = {
                Name: pokemon["NAME"],
                Type1: pokemon["TYPE1"],
                Type2: pokemon["TYPE2"],
                Ability1: pokemon["ABILITY1"],
                Ability2: pokemon["ABILITY2"],
                AbilityHidden: pokemon["ABILITY HIDDEN"],
                Height: pokemon["HEIGHT"],
                Weight: pokemon["WEIGHT"],
                HP: pokemon["HP"],
                Attack: pokemon["ATK"],
                Defense: pokemon["DEF"],
                SpecialAttack: pokemon["SP_ATK"],
                SpecialDefense: pokemon["SP_DEF"],
                Speed: pokemon["SPD"],

            }
        });
        // console.log(PokemonData);
    })
    d3.csv("./galar_locations.csv").then(function (location_data) {
        location_data.forEach(pokemon => {
            var locs = pokemon["LOCATIONS"].split("!");
            var locationsAndChances = [];
            var locationNames = [];
            locs.forEach(loc => {
                var locInfo = loc.split(":");
                var locName = locInfo[0];
                if (locName == "") {
                    //null location
                }
                else {
                    var locChance = locInfo[1];
                    locationsAndChances[locName] = {
                        LocationName: locName,
                        SpawnChance: locChance,
                        Point: generatePointInRegion(locations.filter(l => l["Name"])[0]["Points"])
                    }
                    locationNames.push(locName);
                }
            });
            PokemonData[pokemon["NAME"]]["SpawnLocations"] = locationsAndChances;
            PokemonData[pokemon["NAME"]]["SpawnLocationNames"] = locationNames;
        })
    });
    // console.log(PokemonData)
}

let MaxHP = 200;
let MinHP = 0;

let MaxChance = 100;
let MinChance = 0;

var screenWidth = null,
    screenHeight = null,
    leftWidth = null,
    leftHeight = null,
    middleWidth = null,
    middleHeight = null,
    rightWidth = null,
    rightHeight = null;

var overlay = null;

//The SVGs
var left = null,
    middle = null,
    right = null;

//this var states if the left panel is currently displaying the detail view or the filter view
var leftInDetailMode = false;

//functions
function render() {
    renderLeft();
    renderMiddle();
    renderRight();
}

function renderLeft() {
    if (leftInDetailMode) {
        //render the detail view for the selected pokemon 
        let vizID = "left-data";
        let existing = document.getElementById(vizID);
        if (existing !== null) {
            existing.remove();
        }
        left = d3.select("#left")
            .append("svg")
            .attr("id", vizID)
            .attr("width", leftWidth)
            .attr("height", leftHeight);
    }
    else {
        //render the sort & filter view 
        let leftScreen = document.getElementById('left');
        leftScreen.innerHTML = "";
        let sortFilter = document.createElement('div');
        sortFilter.className = "sortFilter";

        //title
        let title = document.createElement("h1");
        title.innerHTML = 'Sort & Filter';
        sortFilter.appendChild(title);
        sortFilter.appendChild(document.createElement("br"));

        //name
        let nameLabel = document.createElement("label");
        nameLabel.innerHTML = "Name";
        nameLabel.for = "name";
        sortFilter.appendChild(nameLabel);
        sortFilter.appendChild(document.createElement("br"));
        let name = document.createElement("input");
        name.type = "text";
        name.name = "name";
        name.autocomplete = "off";
        sortFilter.appendChild(name);
        sortFilter.appendChild(document.createElement("br"));

        //Type 1 
        let type1Label = document.createElement("label");
        type1Label.innerHTML = "Type 1"
        sortFilter.appendChild(type1Label);
        sortFilter.appendChild(document.createElement("br"));
        let type1 = document.createElement("select");
        pokemonTypes.forEach(pokemon => {
            let type = document.createElement("option");
            type.value = pokemon;
            type.innerHTML = pokemon;
            type1.appendChild(type);
        });
        sortFilter.appendChild(type1);
        sortFilter.appendChild(document.createElement("br"));

        //Type 2
        let type2Label = document.createElement("label");
        type2Label.innerHTML = "Type 2"
        sortFilter.appendChild(type2Label);
        sortFilter.appendChild(document.createElement("br"));
        let type2 = document.createElement("select");
        pokemonTypes.forEach(pokemon => {
            let type = document.createElement("option");
            type.value = pokemon;
            type.innerHTML = pokemon;
            type2.appendChild(type);
        });
        sortFilter.appendChild(type2);
        sortFilter.appendChild(document.createElement("br"));

        //Locations
        let locationsLabel = document.createElement("label");
        locationsLabel.innerHTML = "Location";
        sortFilter.appendChild(locationsLabel);
        sortFilter.appendChild(document.createElement("br"));
        let locationsSection = document.createElement("select");
        let blankLocItem = document.createElement("option");
        locationsSection.appendChild(blankLocItem);
        locations.forEach(loc => {
            let locItem = document.createElement("option");
            locItem.value = loc["Name"];
            locItem.innerHTML = loc["Name"];
            locationsSection.appendChild(locItem);
        });
        sortFilter.appendChild(locationsSection);
        sortFilter.appendChild(document.createElement("br"));

        //Generations
        let genLabel = document.createElement("label");
        genLabel.innerHTML = "Generation";
        sortFilter.appendChild(genLabel);
        let genSection = document.createElement("div");
        genSection.id = "gen";
        for (var i = 1; i <= 8; i++) {
            let genBox = document.createElement('table');
            genBox.innerHTML =
                `<tr>
                <td class="verticalCheckbox">
                    <input type="checkbox" id="${i}" name="delete" value=${i} align="" checked="true"><br>${i}
                </td>
            </tr>`
            genSection.appendChild(genBox);
        }
        sortFilter.appendChild(genSection);
        sortFilter.appendChild(document.createElement("br"));

        //HP
        let HPLabel = document.createElement("label");
        HPLabel.innerHTML = "HP";
        sortFilter.appendChild(HPLabel);
        let HPSection = document.createElement("div");
        HPSection.id = "HP";
        noUiSlider.create(HPSection, {
            start: [MinHP, MaxHP],
            connect: true,
            range: {
                'min': MinHP,
                'max': MaxHP
            },
            tooltips: true,
            pips: null,
            format: wNumb({
                decimals: 0,
            })
        });
        sortFilter.appendChild(HPSection);

        //Chance
        let ChanceLabel = document.createElement("label");
        ChanceLabel.innerHTML = "Spawn Chance";
        sortFilter.appendChild(ChanceLabel);
        let ChanceSection = document.createElement("div");
        ChanceSection.id = "Chance";
        noUiSlider.create(ChanceSection, {
            start: [MinChance, MaxChance],
            connect: true,
            range: {
                'min': MinChance,
                'max': MaxChance
            },
            tooltips: true,
            pips: null,
            format: wNumb({
                decimals: 0,
                suffix: '%'
            })
        });
        sortFilter.appendChild(ChanceSection);


        leftScreen.appendChild(sortFilter);
    }
}


//function to render the table in the visualization
function renderMiddle() {
    let vizID = "middle-data";
    let existing = document.getElementById(vizID);
    if (existing !== null) {
        existing.remove();
    }
    middle = d3.select("#middle")
        .append("svg")
        .attr("id", vizID)
        .attr("width", middleWidth)
        .attr("height", middleHeight);

    //Table code goes here 

}

function renderRight() {
    //This renders the section where the map is
    let vizID = "map";
    let existing = document.getElementById(vizID);
    if (existing !== null) {
        existing.remove();
    }

    right = d3.select("#right")
        .append("svg")
        .attr("id", vizID)
        .attr("width", rightWidth)
        .attr("height", rightHeight)
        .attr("style", "position: absolute;");


    //line used to draw locations
    var lineGenerator = d3.line();

    //line used to draw locations
    var lineGenerator = d3.line();


    locations.forEach(location => {
        //creating area "drawings"
        var loc = lineGenerator(location["Points"])
        right.append("path")
            .attr('d', loc)
            .attr('fill', '#fe019a')
            .attr('opacity', 0.5)
            .attr('stroke', '#fe019a');

    });

    PokemonGalarList.forEach(pokemon => {
        var color = TypeColors[PokemonData[pokemon]["Type1"]];
        var spawnLocations = PokemonData[pokemon]["SpawnLocationNames"];
        // console.log(spawnLocations);
        spawnLocations.forEach(loc => {
            // console.log(loc);
            var point = PokemonData[pokemon]["SpawnLocations"][loc]["Point"];
            // console.log(point);
            right.append("circle")
                .attr("r", 5)
                .attr("transform", `translate(${point[0]}, ${point[1]})`)
                .attr("fill", color)
                .attr("stroke", "white")
                .attr('opacity', 0.9)
                .on('mouseover', function (d){
                    console.log(`${pokemon} at ${loc}`);
                })
        })
    })

}

//function to resize the visualization with window
function resized() {
    let leftScreen = document.getElementById('left').getBoundingClientRect();
    leftWidth = leftScreen["width"]
    leftHeight = leftScreen["height"]
    let middleScreen = document.getElementById('middle').getBoundingClientRect();
    middleWidth = middleScreen["width"];
    middleHeight = middleScreen["height"];
    let rightScreen = document.getElementById('right').getBoundingClientRect();
    rightWidth = rightScreen["width"];
    rightHeight = rightScreen["height"];
    render();
}

function generatePointInRegion(points){
    // console.log(points);
    let x1 = d3.min(points, function(d){
        return d[0];
    });
    let x2 = d3.max(points, function(d){
        return d[0];
    });
    let y1 = d3.min(points, function(d){
        return d[1];
    });
    let y2 = d3.max(points, function(d){
        return d[1];
    });
    let x = Math.floor((Math.random() * x2) + x1);
    let y = Math.floor((Math.random() * y2) + y1)-500;
    // console.log(`points: ${points} \n x1: ${x1} x2: ${x2} \n y1: ${y1} y2: ${y2} \n x: ${x} y: ${y}`);
    return [x,y];
}



//does the initial rendering of the visualization
window.onload = () => {
    loadData();
    resized();
}