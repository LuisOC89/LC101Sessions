package org.launchcode.java.demos.lsn5unittesting.test;


import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.launchcode.java.demos.lsn5unittesting.main.Car;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

public class CarTest {
    Car testCar;

    @Before
    public void createCarObject() {

        testCar = new Car("Toyota", "Prius", 10, 50);
    }

    @After
    public void deleteDataCarObject() {
        testCar = new Car("null", "null", 0, 0);
    }

    //TODO: add emptyTest so we can configure our runtime environment (remove this test before pushing to your personal GitLab account)
    @Test
    public void emptyTest() {
        //“expected:”, “actual:”, and “delta:”.
        assertEquals(10,10,.001);
    }
    /*
    * The third argument, called delta, is the amount of allowed
    * difference between the expected and actual values. If the
    * difference between the two values is within that range, then
    * the test still passes. This argument is optional for some
    * comparisons and required for others. One scenario in which
    * it is required is when comparing doubles.
    * */


    //TODO: constructor sets gasTankLevel properly
    @Test
    public void testInitialGasTank() {
        assertEquals(10, testCar.getGasTankLevel(), .001);
    }

    /*
    * JUnit4 Assertion Methods
    Assertion	Description
    assertEquals(expected, actual, optional_delta)	Asserts that two values, expected and actual, are equal to each other (optionally, within a given range of difference)
    assertFalse(condition)	Asserts that a given condition is false
    assertTrue(condition)	Asserts that a given condition is true
    assertNotNull(object)	Asserts that a given object is not null
    * */


    //TODO: gasTankLevel is accurate after driving within tank range
    @Test
    public void testGasTankLevelAfterDrive() {
        double initialTankLevel = testCar.getGasTankLevel();
        double someMiles = 10;
        testCar.drive(someMiles);

        double maxDistance = testCar.getMilesPerGallon() * testCar.getGasTankLevel();
        double milesAbleToTravel = someMiles > maxDistance ? maxDistance : someMiles;
        double gallonsUsed = milesAbleToTravel / testCar.getMilesPerGallon();
        double tankLevel = initialTankLevel - gallonsUsed;

        assertEquals(tankLevel, testCar.getGasTankLevel(), .001);
    }


    //TODO: gasTankLevel is accurate after attempting to drive past tank range
    @Test
    public void testGasTankLevelAfterDrivePastTankRange() {
        double initialTankLevel = testCar.getGasTankLevel();
        double maxDistance = testCar.getMilesPerGallon() * testCar.getGasTankLevel();
        double exceededDistance = maxDistance + 100;
        double milesAbleToTravel = exceededDistance > maxDistance ? maxDistance : exceededDistance;
        testCar.drive(exceededDistance);
        double gallonsUsed = milesAbleToTravel / testCar.getMilesPerGallon();
        double tankLevel = initialTankLevel - gallonsUsed;
        assertEquals(tankLevel, testCar.getGasTankLevel(), .001);
    }

    //TODO: can't have more gas than tank size, expect an exception
    @Test(expected = IllegalArgumentException.class)
    public void testGasOverfillException() {
        System.out.println(testCar.getGasTankLevel());
        testCar.addGas(5);
        fail("Shouldn't get here, car cannot have more gas in tank than the size of the tank");
    }
}
