package com.company;

import restaurant.Menu;
import restaurant.MenuItem;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

public class Main {

    public static void main(String[] args) throws InterruptedException {
	// write your code here

//        Menu myMenu = new Menu();
//        printElements(myMenu);
//
//        System.out.println(Menu.getTime());
//
//        System.out.println(new Menu().getMenus());
//
        MenuItem superBurger = new MenuItem(
                "Cheese Burger",
                17.99,
                "the best burger of your life",
                "main course");
//
//        myMenu.addMenuItem(superBurger);
//        printElements(myMenu);
//
//        superBurger.setPrice(18.99);
//
//        MenuItem chocolateCheeseCake = new MenuItem(
//                "Chocolate Cheese Cake",
//                10.99,
//                "A great dessert",
//                "dessert");
//
//        myMenu.addMenuItem(chocolateCheeseCake);
//        printElements(myMenu);
//
//        MenuItem invalidItem = new MenuItem(
//                "Test Item",
//                10.99,
//                "A great test",
//                "dessert1");
//
//        myMenu.addMenuItem(invalidItem);
//        printElements(myMenu);

        Menu anotherMenu = new Menu();
        anotherMenu.addMenuItem(new MenuItem("Barbecue Chicken", 12.3, "healthy barbecue chicken", "main course"));

        MenuItem crazyPizzaLoca = new MenuItem("Crazy Pizza Loca", 13, "delicious spicy pizza", "main course");


        System.out.println("\n All elements");
        printElements(anotherMenu);

        anotherMenu.removeMenuItem("Barbecue Chicken");
        System.out.println("\n Removed element");
        printElements(anotherMenu);

        System.out.println("\nCheck if item is new");
        System.out.println(crazyPizzaLoca.isNew());

        System.out.println("Check last time menu was modified");
        System.out.println(anotherMenu.getDateModified());

        TimeUnit.SECONDS.sleep(1);

        anotherMenu.addMenuItem(crazyPizzaLoca);
        anotherMenu.addMenuItem(superBurger);
        System.out.println(anotherMenu.getDateModified());

        System.out.println("\nPrint Menu Item");
        System.out.println(crazyPizzaLoca);

        System.out.println("\nPrint Menu");
        System.out.println(anotherMenu);

    }

    public static void printElements(Menu aMenu){
        for(MenuItem d: aMenu.getMenus()) {
            System.out.println(d);
        }
    }
}
