function eth(){
  setTimeout(function(){
  if (document.getElementById('100chestswrapper').style.display != "none"){ //check this id - indicative of winning placeholder? id change?
    document.getElementsByClassName('allchests')[0].children[Math.round(Math.random() * (2 - 0) + 0)].children[0].click(); //random chest index in range 0-2
  }

  if (document.getElementsByClassName('disablebtn')[0].disabled == false){
    document.getElementsByClassName('disablebtn')[0].click();
  }
  eth();
  }, 1000)
}
eth();