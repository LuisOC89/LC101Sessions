package org.launchcode.studio7;

import org.launchcode.studio7.BasicDisk;

public class DVD extends BasicDisk implements OpticalDisc{

    // TODO: Implement your custom interface.
    public DVD(String name, String capacity, String contents, String discType) {
        super(name, capacity, contents, discType);
    }

    // TODO: Implement your custom interface.
    @Override
    public void spinDisc(){
        System.out.println("Spinning DVD");
    };

    @Override
    public void storeData(){
        System.out.println("Storing Data DVD");
    };

    @Override
    public void readData(){
        System.out.println("Reading Data DVD");
    };

    @Override
    public void writeData(){
        System.out.println("Writing Data DVD");
    };

    // TODO: Determine which fields, methods, and constructors can be extended from the base class and which ones
    //  need to be declared separately.

}
