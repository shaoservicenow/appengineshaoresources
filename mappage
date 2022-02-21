var gr = new GlideRecord('<table_scope>');
gr.query();

while (gr.next()) {

    //create a new map item to display - linked to the current incident record
    var item = map.addItem(gr);
    //add the latitude value from the incident's location
    item.latitude = gr.latitude;
    //add the longitude value from the incident's location
    item.longitude = gr.longitude;
    //link to the icon image
    item.icon = "https://maps.google.com/mapfiles/ms/micons/yellow.png";
    //set the icon size
    item.icon_width = "32";
    item.icon_height = "32";
}
