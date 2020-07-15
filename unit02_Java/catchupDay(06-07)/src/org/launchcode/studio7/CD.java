package org.launchcode.studio7;

import org.launchcode.studio7.BasicDisk;

public class CD extends BasicDisk implements OpticalDisc {

    public CD(String name, String capacity, String contents, String discType) {
        super(name, capacity, contents, discType);
    }

    // TODO: Implement your custom interface.
    @Override
    public void spinDisc(){
        System.out.println("Spinning CD");
    };

    @Override
    public void storeData(){
        System.out.println("Storing Data CD");
    };

    @Override
    public void readData(){
        System.out.println("Reading Data CD");
    };

    @Override
    public void writeData(){
        System.out.println("Writing Data CD");
    };

    // TODO: Determine which fields, methods, and constructors can be extended from the base class and which ones
    //  need to be declared separately.

}
