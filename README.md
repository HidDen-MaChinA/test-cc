# <center>Complexity analysis<center>
# ```addRice()``` :

#### My code
~~~
this.addRice = () => {
    this.ricePresent ? console.log("there are already rice") : (()=>{this.ricePresent=true;console.log("rice has been added")})()
}
~~~

the addRice method is just a function change the value of a variable in fact there are just statement inside the function the complexity is constant / O(1).

#### Source code
~~~
addRice() {
    if (!this.ricePresent) {
      this.ricePresent = true;
      console.log('Rice has been added.');
    } else {
      console.log('There\'s already rice in the rice cooker.');
    }
}
~~~
same things here, the addRice Function just change the value of a variable so the complexity is constant O(1)
#### What changed
in fact I didn't see much things to change, I only refactor it to match in one line, and now it's unreadable.

# ```delaySync(ms)``` 
#### My code
~~~
this.delaySync = (ms) => {
    //O(1)
    const start = Date.now()
    //created the start date, and everytime the loop execute we take the Date.now() and substract it with the start until it match ms
    //n(1)
    while(Date.now() - start < ms) {
        
    }
}

The delaySync method takes on a parameter "ms" and it's fonction is to delay the execution of the program by the parameter ms in milliseconds, so in this method "Date.now() - start < ms" will be executed n time, I'll assume Date.now() complexity is O(1) so it's just that we will execute some constant statements, n time, so the complexity is linear O(n).
~~~
#### Source Code
~~~
delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
},
~~~
this is the same code, there is no point for a refactor for this because the goal of the function is to stop the execution of the application, so the complexity is linear O(n) as well

#### What changed
nothing really changed because the purpose of this function is to freeze the user input, since it could have used asyncronous function in order for the programme to not be stopped when backend process where running
# ```cookRice()``` 

#### My code
~~~
this.cookRice = () => {
    //O(1)
    if(!this.ricePresent){
        console.log("cannot cook")
    }
    //O(1)
    else if(this.riceCooked){
        console.log("the rice is already cooked")
    }else{
        //O(1)
        console.log('cooking rice...')
        //O(1) because we set the value to 1500 on purpose
        this.delaySync(1500)
        this.riceCooked = true
        console.log('rice has been cooked')
    }
}

the cookRice method is is a methode that cook the Rice, it just update the ricePresent variable, the two first block of if and else if are just some console.log so there complexity is O(1) not the case of the last block that execute the delaySync function witch have a complexity of O(n), but, in fact we put 1500 as parameter for delaySync in purpose, the value of ms in delaySync(ms) is static, then the complexity become constatn o the complexity of delaySync here is O(1), the complexity of this method is then constant O(1)

~~~
#### Source code
~~~
cookRice() {
    if (this.ricePresent && !this.riceCooked) {
      console.log('Cooking rice...');
      this.delaySync(1500);
      this.riceCooked = true;
      console.log('The rice has been cooked!');
    } else if (!this.ricePresent) {
      console.log('Cannot cook. The rice cooker is empty.');
    } else {
      console.log('The rice is already cooked.');
    }
},
~~~
the complexity here is the same as my code, but the difference is the position of the condition block in the code, the complexity is constant O(1)
#### What changed
I changed the placement of the block of code in order to remove some statement that could have been avoided, if you ask if there are no rice first, you don't have to ask it later because yes, you already know there are no rice
# ```steam()```

#### My code
~~~
this.steam = () => {
    //O(1) it's just a statement
    if(!this.ricePresent){
        console.log("cannot steam")
    //O(1) it's just a statement too
    }else if(this.steamingInProgress){
        console.log("steaming in progress")
    }else {
    //O(1) just a statement
        console.log('steaming')
    // right here it should be O(n) but it will be O(1) because we set the the value of ms = 1500 in purpose
        this.delaySync(1500)
        console.log("terminated")
    }
}

the steam function is a function made to steam things in the rice cooker, like the precedent one, all of those block are just if else that run some console.log, all of them but it's not the fact of the last else block, that invoke the delaySync function, but like the precedent one, ms is 1500, so this as no effect one the compexity, the complexity is then O(1)
~~~
#### Source code
~~~
steam() {
    if (this.ricePresent && !this.steamingInProgress) {
      console.log('Steaming in progress...');
      this.steamingInProgress = true;
      this.delaySync(1500);
      this.steamingInProgress = false;
      console.log('Steaming completed!');
    } else if (!this.ricePresent) {
      console.log('Cannot steam. The rice cooker is empty.');
    } else {
      console.log('Steaming is already in progress.');
    }
},
same things here, the complexity is the same still O(1)
~~~
#### What changed
I changed the placement of the block of code in order to remove some statement that could have been avoided, if you ask if there are no rice first, you don't have to ask it later because yes, you already know there are no rice
# ```keepWarm()``` :
#### My code
~~~
this.keepWarm = () => {
  //O(1)
  if(!this.ricePresent){
    console.log("cannot warm")
  //O(1)
  }else if(!this.riceCooked){
    console.log("not cooked")
  }
  //O(1)
  else if(!this.heatingInProgress){
    console.log("the rice is now being kept warm")
    this.heatingInProgress = true
  }
}
~~~
the keepWarm method is to keep your food warm, like the method name, anyway it just change the value of the heatingInProgress variable, so the complexity is just constant O(1)
#### Source code
~~~
keepWarm() {
if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
  console.log('The rice is now being kept warm.');
  this.heatingInProgress = true;
} else if (!this.ricePresent) {
  console.log('Cannot keep warm. The rice cooker is empty.');
} else if (!this.riceCooked) {
  console.log('Cannot keep warm. The rice is not cooked.');
} else {
  console.log('Keeping warm is already in progress.');
}
}
~~~
just like my code, the complexity is O(1)
#### What changed
I changed the placement of the block of code in order to remove some statement that could have been avoided, if you ask if there are no rice first, you don't have to ask it later because yes, you already know there are no rice, and and now I'm asking if the rice is Cooked more earlier in the block of code, if order to avoid to ask it again later

# ```removeRice()``` 
#### My code
~~~
this.removeRice = () => {
  //O(1)
  if(!this.ricePresent){
    console.log('no rice to take')
  //O(1)
  }else if(this.riceCooked || this.heatingInProgress){
    //O(1)
    this.ricePresent = false;
    this.riceCooked = false
    this.steamingInProgress = false
    this.heatingInProgress = false
    console.log("oke bro")
  }
}
the removeRice method is to remove the rice in the rice-cooker, the method don't do that much things in term of complexity, it just console.log something, and set some variable value, the complexity is constant O(1)
~~~
#### Source code
~~~
  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
    } else {
      console.log('There\'s no rice to remove or it is not cooked yet.');
    }
  }
~~~
same things here, don't do much of thing, it's constant O(1)
#### What changed
I changed the placement of the block of code in order to remove some statement that could have been avoided, if you ask if there are no rice first, you don't have to ask it later because yes, you already know there are no rice
