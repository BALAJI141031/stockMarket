let ppEl = document.querySelector("#pp");

let quantEl = document.querySelector("#quant");

let SpEl = document.querySelector("#sp");

let outputEl = document.querySelector("#output");

let btnEl = document.querySelector("#btn");
let outPutCon = document.querySelector("#con");

// console.log(ppEl, quantEl, SpEl, outputEl);

btnEl.addEventListener("click", function () {
  if (ppEl.value == "" || quantEl.value == "" || SpEl.value == "") {
    outputEl.innerText = "please give valid prices";
  } else {
    outputEl.innerText = "";
    if (Number(ppEl.value) > Number(SpEl.value)) {
      outputEl.innerText = "Ohh you are in losS...";
      let imageEl = document.createElement("img");
      imageEl.src =
        "https://ei.marketwatch.com/Multimedia/2015/09/16/Photos/ZH/MW-DU426_profit_20150916172421_ZH.jpg?uuid=4c1d6be2-5cb9-11e5-9170-0015c588e0f6";
      outPutCon.appendChild(imageEl);
    } else if (Number(ppEl.value) < Number(SpEl.value)) {
      outputEl.innerText = "yess profit mode";
      let imageEl = document.createElement("img");
      imageEl.src =
        "https://www.ecalculator.co/imgs/blog/2021/02/1613821938profit-stock-png.png";
      outPutCon.appendChild(imageEl);
    } else {
      outputEl.innerText = "no loss no gain...stable";
    }
  }
});
