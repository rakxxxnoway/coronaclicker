var maxHealtH = 1000000000000000;
var totalHealth = 1000000000000000;
var dpsTotal = 1;
var coins = 0;

var price1 = 200;
var price2 = 600;
var price3 = 1800;
var price4 = 5400;
var price5 = 16200;

var coinsPerHit = 1;

var healt = document.getElementById("health")
var dps = document.getElementById("dps")
var coin = document.getElementById("coins")
var hit = document.getElementById("hit");

healt.innerHTML = "Health: "+totalHealth+" / "+maxHealtH;
dps.innerHTML = "DPC: "+dpsTotal;
coin.innerHTML = "Coins: "+coins;

hit.addEventListener("click", function(){
    coins += coinsPerHit;
    totalHealth -= dpsTotal;
    healt.innerHTML = "Health: "+totalHealth+" / "+maxHealtH;
    dps.innerHTML = "DPC: "+dpsTotal;
    coin.innerHTML = "Coins: "+coins;

    if (totalHealth === 0)
    {
        alert("Yey! You killed Corona!");
        if (confirm("Do you want to kill it again?"))
        {
            window.location.reload();
            alert("Have fun!")
        } else {alert("Ok then!");}
    }
});

var price11 = document.getElementById("price1");
var price22 = document.getElementById("price2");
var price33 = document.getElementById("price3");
var price44 = document.getElementById("price4");
var price55 = document.getElementById("price5");
var up1 = document.getElementById("up1");
var up2 = document.getElementById("up2");
var up3 = document.getElementById("up3");
var up4 = document.getElementById("up4");
var up5 = document.getElementById("up5");

price11.innerHTML = "Price: "+price1;
price22.innerHTML = "Price: "+price2;
price33.innerHTML = "Price: "+price3;
price44.innerHTML = "Price: "+price4;
price55.innerHTML = "Price: "+price5;

up1.addEventListener("click", function(){
    if (coins < price1)
    {
        alert("Not enough with coins!");
    } else
    {
        coins -= price1;
        price1 *= 1.5
        dpsTotal += 1;
        coinsPerHit += 1;
        price11.innerHTML = "Price: "+price1;
        healt.innerHTML = "Health: "+totalHealth+" / "+maxHealtH;
        dps.innerHTML = "DPC: "+dpsTotal;
        coin.innerHTML = "Coins: "+coins;
    }
});

up2.addEventListener("click", function(){
    if (coins < price2)
    {
        alert("Not enough with coins!");
    } else if (coins >= price2)
    {
        coins -= price2;
        price2 *= 1.5
        dpsTotal += 10
        coinsPerHit += 2;

        
        dps.innerHTML = "DPC: "+dpsTotal;
        coin.innerHTML = "Coins: "+coins;
        price22.innerHTML = "Price: "+price2;
    }
});

up3.addEventListener("click", function(){
    if (coins < price3)
    {
        alert("Not enough with coins!");
    } else if (coins >= price3)
    {
        coins -= price3;
        price3 *= 1.5
        dpsTotal += 25;
        coinsPerHit += 3;

        dps.innerHTML = "DPC: "+dpsTotal;
        coin.innerHTML = "Coins: "+coins;
        price33.innerHTML = "Price: "+price3;
    }
});

up4.addEventListener("click", function(){
    if (coins < price4)
    {
        alert("Not enough with coins!");
    } else if (coins >= price4)
    {
        coins -= price4;
        price4 *= 1.5
        dpsTotal += 50;
        coinsPerHit += 4;

        dps.innerHTML = "DPC: "+dpsTotal;
        coin.innerHTML = "Coins: "+coins;
        price44.innerHTML = "Price: "+price4;
    }
});

up5.addEventListener("click", function(){
    if (coins < price5)
    {
        alert("Not enough with coins!");
    } else
    {
        coins -= price5;
        price5 *= 1.5
        dpsTotal += 100;
        coinsPerHit += 50;
        
        dps.innerHTML = "DPC: "+dpsTotal;
        coin.innerHTML = "Coins: "+coins;
        price55.innerHTML = "Price: "+price5;
    }
});