// node tests/firstTest.js or Run Play button
import {Builder, By, Key} from "selenium-webdriver";
import * as chai from "chai";

chai.should();

//describe block
describe("add another todo tests", function(){
    //it block
    it("successfully adds another todo to application", async function(){

        // launch the browser
        let driver = await new Builder().forBrowser("firefox").build();

        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //add a todo
        await driver
            .findElement(By.id("sampletodotext"))
            .sendKeys("Learn Selenium", Key.RETURN);

        //assert
        let todoText = await driver
            .findElement(By.xpath("//li[last()]"))
            .getText()
            .then(function(value){
                return value
            }); //find last in the list and retrieve text value

        //assert using chai should
        todoText.should.equal("Learn Selenium");

        //close the browser
        await driver.quit();
    });

});

