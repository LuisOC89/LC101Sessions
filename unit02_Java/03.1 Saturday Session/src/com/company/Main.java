package com.company;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Main {

    public static void main(String[] args) {
	// write your code here
        HashMap<String, Integer> job = new HashMap<>();
        HashMap<String, Integer> person = new HashMap<>();

        job.put("Developer", 40000);
        job.put("Sales Associate", 30000);
        job.put("Engineer", 20000);

        System.out.println("\nUsing Items");
        for (Map.Entry<String, Integer> aKeyValuePair : job.entrySet()) {
            System.out.println(aKeyValuePair.getKey() + ": " + aKeyValuePair.getValue());
        }

        System.out.println("\nUsing Keys");
        for (String key : job.keySet()) {
            System.out.println(key + ": " + job.get(key));
        }

        System.out.println("\nUsing Values");
        for (Integer value : job.values()) {
            System.out.println(value);
        }

        person.put("Alex", 19);
        person.put("Karla", 14);
        person.put("Anthony", 29);

        ArrayList<String> names = new ArrayList<>();

        names.add("Rama");
        names.add("Max");
        names.add("Luis");
        names.add("Dave");
        names.add("Marla");

        System.out.println("\nUsing forEach");
        for (String aName : names){
            System.out.println(aName);
        }

        System.out.println("\nUsing for regular Loop");
        for (int i = 0; i < names.size(); i++) {
            System.out.println(names.get(i));
        }

    }
}
