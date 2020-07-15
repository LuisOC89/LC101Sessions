package org.launchcode.studio7;

public abstract class BasicDisk {
    private String name;
    private String capacity;
    private String contents;
    private String discType;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public String getDiscType() {
        return discType;
    }

    public void setDiscType(String discType) {
        this.discType = discType;
    }

    public BasicDisk(String name, String capacity, String contents, String discType) {
        this.name = name;
        this.capacity = capacity;
        this.contents = contents;
        this.discType = discType;
    }
}
