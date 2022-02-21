(function executeQuery(v_table, v_query) {
    var requestBody = {};
    var restMessage = new sn_ws.RESTMessageV2();
    restMessage.setHttpMethod("get");
    restMessage.setEndpoint("https://api.data.gov.sg/v1/transport/carpark-availability");
    restMessage.setRequestBody(JSON.stringify(requestBody));
    var response = restMessage.execute();
    var responseBody = response.getBody();
    var responseObj = JSON.parse(responseBody).items[0];

    for (var i = 0, len = responseObj.carpark_data.length; i < len; ++i) {
        v_table.addRow({
            sys_id: gs.generateGUID(),
            carpark_number: responseObj.carpark_data[i].carpark_number,
			total_lots: responseObj.carpark_data[i].carpark_info[0].total_lots,
			lots_available: responseObj.carpark_data[i].carpark_info[0].lots_available
        });
    }
})(v_table, v_query);
