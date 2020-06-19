package com.company;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class ArrayListExercises {
    public static void main(String[] args) {
//        int arrayT[];
//        arrayT = {};

//        int arrayT[] = new int[10];

        String example = "whatever";

        example = "example";

//        example[0] = 'p';

        String newWord;

        ArrayList<Integer> numbers = new ArrayList<>();

//        Integer anInteger = 5;
//
//        int anotherInteger = 5;
//        anInteger += 1;
//
//        anInteger = anInteger + 1;
//        anotherInteger = 7;

        for (int i = 0; i < 10; i++) {
            numbers.add(i);
        }

        System.out.println(numbers);

        int sum = sumEvenNumbers(numbers);

        System.out.println("Sum of even numbers: ".concat(String.valueOf(sum)));

        ArrayList<String> words = new ArrayList<>();

//        String[] stus = {"word1","word2","word3","word4","word5"};
//
//        for (String stu : stus) {
//            words.add(stu);
//        }

//        for (int i = 0; i < 5; i++) {
//            words.add("word".concat(String.valueOf(i+1)));
//        }

        words.add("World");
        words.add("pecan");
        words.add("bride");
        words.add("titan");
        words.add("Apple");
        System.out.println(words);

        printWords(words);

////      Third task
//        Scanner input = new Scanner(System.in);
//
//        ArrayList<String> stus2 = new ArrayList<>();
//        for (int i = 0; i < 5; i++) {
//            System.out.print("Insert a word: ");
//            newWord = input.nextLine();
//            if (!newWord.equals("")) {
//                stus2.add(newWord);
//            }
//        }
//        input.close();

//        printWords(stus2);

        String paragraph = "I would not, could not, in a box. I would not, could not with a fox. " +
                "I will not eat them in a house. I will not eat them with a mouse.";

        String stus3[] = paragraph.split("\\.");

        ArrayList<String> words4 = new ArrayList<>();
        for (String stu : stus3) {
            words4.add(stu);
        }

        printWords(words4);

    }

    public static int sumEvenNumbers(ArrayList<Integer> numbers){
        int sum = 0;
        for (int number : numbers) {
            System.out.println(number);
            if (number % 2 == 0) {
                sum += number;
                System.out.println("added");
            }
        }
        return sum;
    }

    public static void printWords(ArrayList<String> words){
        for (String word : words) {
            System.out.println(word);
        }
    }
}
