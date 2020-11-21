var screenWidth = null,
    screenHeight = null,
    leftWidth = null,
    leftHeight = null,
    middleWidth = null,
    middleHeight = null,
    rightWidth = null,
    rightHeight = null;

var overlay = null;

var left = null,
    middle = null,
    right = null;

function render() {
    renderLeft();
    renderMiddle();
    renderRight();
}

function renderLeft() {
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

function renderMiddle() {
    let vizID = "middle-data";
    let existing = document.getElementById(vizID);
    if (existing !== null) {
        existing.remove();
    }
    left = d3.select("#middle")
        .append("svg")
        .attr("id", vizID)
        .attr("width", middleWidth)
        .attr("height", middleHeight);
}

function renderRight() {
    //This renders the section where the map is
    let vizID = "map";
    let existing = document.getElementById(vizID);
    if(existing !== null){
        existing.remove();
    }
    right = d3.select("#right")
        .append("svg")
        .attr("id", vizID)
        .attr("width", rightWidth)
        .attr("height", rightHeight)
        .attr("style", "position: absolute;");

    let locations = [
        { Name: "Lake of Outrage", Points: [(0, 0), (1, 1)] }
    ]
    locations.forEach(location => {
        console.log(location["Name"])
    })
}


function resized() {
    // let screen = document.getElementById('visualization').getBoundingClientRect();
    // screenWidth = screen["width"];
    // screenHeight = screen["height"];
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