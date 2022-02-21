var gr = new GlideRecord('<table_scope>');
gr.query();
while (gr.next()) {
    var carrier = gr.carrier.getDisplayValue();
    var item = map.addItem(gr);
    if (carrier == "FedEx") {
        //add the latitude value from the incident's location
        item.latitude = gr.destination.latitude;
        //add the longitude value from the incident's location
        item.longitude = gr.destination.longitude;
        //link to the icon image
        item.icon = "https://swt5demo.service-now.com/1f0044451b698550cc5662cde54bcb69.iix";
        //set the icon size
        item.icon_width = "32";
        item.icon_height = "32";
    } else if (carrier == "UPS") {
        item.latitude = gr.destination.latitude;
        item.longitude = gr.destination.longitude;
        item.icon = "https://swt5demo.service-now.com/0a204c451b698550cc5662cde54bcb83.iix";
        item.icon_width = "32";
        item.icon_height = "32";
    } else {
        item.latitude = gr.destination.latitude;
        item.longitude = gr.destination.longitude;
        item.icon = "https://swt5demo.service-now.com/f7b63bf41b298550cc5662cde54bcba2.iix";
        item.icon_width = "32";
        item.icon_height = "32";
    }

}
