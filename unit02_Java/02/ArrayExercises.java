package com.company;

import java.util.Arrays;

public class ArrayExercises {
    public static void main(String[] args) {
//        int[] anArray = {1, 1, 2, 3, 5, 8};
//        int[] anArray = {};
        int anArray[] = new int[6];

        for (int j = 0; j < anArray.length; j++) {
            anArray[j] = j;
        }

        for (int i : anArray) {
            if (i%2 != 0){
                System.out.println(i);
            }
        }

        String theString = "I would not, could not, in a box. I would not, could not with a fox. " +
                "I will not eat them in a house. I will not eat them with a mouse.";

        String[] myArray = theString.split(" ");
        System.out.println(Arrays.toString(myArray));

        String[] myArray2 = theString.split("\\.");
        System.out.println(Arrays.toString(myArray2));
    }
}
