package org.launchcode.java.studios.areaofacircle;

import java.util.Scanner;

public class Area {
    public static void main (String[] args){
        double radius = 0;
        boolean error = false;

        Scanner in = new Scanner(System.in);
        System.out.println("Enter a radius: ");
        try {
            radius = in.nextDouble();
        }
        catch (Exception e) {
            error = true;
        }
        in.close();

        if (error) {
            System.out.println("This is not a number.");
        } else if (radius<0) {
            System.out.println(radius + " is a negative number.");
        } else {
            Double areaOfCircle = Circle.getArea(radius);
            System.out.println("The area of a circle of radius " + radius + " is: " + areaOfCircle);
        }
    }
}
