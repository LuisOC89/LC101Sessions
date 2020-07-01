package restaurant;

import java.util.concurrent.TimeUnit;
import java.util.ArrayList;
import java.util.Date;

public class Menu {
    private ArrayList<MenuItem> items;
    private Date dateModified;

    public static Date getTime() {
        return new Date();
    }

    public Date getDateModified() {
        return dateModified;
    }

    public Menu(ArrayList<MenuItem> aItems) {
        items = aItems;
        dateModified = new Date();
    }

    public Menu() {
        items = new ArrayList<MenuItem>();
        dateModified = new Date();
    }

    public void setDateModified(Date dateModified) {
        this.dateModified = dateModified;
    }

    public ArrayList<MenuItem> getMenus() {
        return items;
    }

    public void setMenus(ArrayList<MenuItem> aItems) {
        items = aItems;
    }

    public void addMenuItem(MenuItem aMenuItem) {
        items.add(aMenuItem);
        setDateModified(new Date());
    }

    @Override
    public String toString() {
        return "Menu{" +
                "items=" + items +
                ", dateModified=" + dateModified +
                '}';
    }

    public void removeMenuItem(String name) {
        ArrayList<MenuItem> helperMenu = new ArrayList<MenuItem>(this.items);

        if (items.size() > 0){
            for (MenuItem item: helperMenu){
                if(item.getName().toLowerCase().equals(name.toLowerCase())){
                    items.remove(item);
                    setDateModified(new Date());
                }
            }
        }
    }

}
