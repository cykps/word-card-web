let data = quizData;
let dataLength = data.length;
let index = -1;
let i = data.length;
let mode = 0;

const con = document.querySelector("#console");

function nextQue() {
    if (mode == 0) {
        if (i > 0) {
            index = Math.floor(Math.random() * data.length);
            addQue(dataLength - i + 1 + "." + data[index].ex);

            mode = 1;
            i--;
        }
    } else if (mode == 1) {
        addAns(data[index].word);
        data.splice(index, 1);

        mode = 0;
    }
    scrollBy(0, 65536);
}

function addQue(text) {
    con.innerHTML += "<br>" + text;
    con.innerHTML += "<br>> ";
}

function addAns(text) {
    con.innerHTML += "<br>>> " + text;
}

window.addEventListener("keypress", function (e) {
    console.log("Key press:" + e.key);
    if (e.key == "Enter") {
        nextQue();
    }
});

// https://qiita.com/c_nnnnnn/items/4853b2dc4491f1a56f1b

let scrollFlg = false;
let isTouchFlg = false;

window.addEventListener("touchstart", () => {
    scrollFlg = true;
    isTouchFlg = true;
    console.log("start");
});

window.addEventListener("touchmove", () => {
    scrollFlg = false;
    console.log("move");
})

window.addEventListener('touchend', () => {
    console.log("end");
    if (!isTouchFlg || (isTouchFlg && scrollFlg)) {
        nextQue();
    }
});