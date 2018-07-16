/**
 * A temperature reading has been received for a shipment
 * @param {org.dltcamp.weatherBlocks} sensorReading - the TemperatureReading transaction
 * @transaction
 */
function sensorReading(sensorReading) {
    
        var sensor = sensorReading.sensor;
        var NS = 'org.dltcamp.weatherBlocks';
        var temperature = sensorReading.temperature;
        var dataPoint = sensorReading.sensorData
        var factory = getFactory();
    
        //console.log('Adding temperature ' + temperatureReading.celsius + ' to shipment ' + shipment.$identifier);
    
        if (sensor.dataPoints) {
            sensor.dataPoints.push(dataPoint);
        } else {
            sensor.dataPoints = [dataPoint];
        }

            //actually storing something in HyperLedger
        return getAssetRegistry(NS + '.Sensor')
            .then(function (sensorRegistry) {
                // add the temp reading to the shipment
                return sensorRegistry.update(sensor);
            });
    }

//at 8PM iterate through each contract and call
function checkPayout(contract){
    // 1) get the sensor observed 
    // iterate through its data points and calculate average temp for each day in time range

}


    
/* some function that parses Strings from MQTT like that one

    higrow/142621203621556/humidity  52.0
   
    into

   concept SensorData {
     o DateTime TimeStamp
     o DataType type
     o Double value
}
*/





/**
 * A temperature reading has been received for a shipment
 * @param {org.dltcamp.weatherBlocks} temperatureReading - the TemperatureReading transaction
 * @transaction
 */
function temperatureReading(temperatureReading) {

    var sensor = temperatureReading.sensor;
    var NS = 'org.dltcamp.weatherBlocks';
    var temperature = temperatureReading.temperature;
    var dataPoint = temperatureReading.sensorData
    var factory = getFactory();

    //console.log('Adding temperature ' + temperatureReading.celsius + ' to shipment ' + shipment.$identifier);

    if (sensor.dataPoints) {
        sensor.dataPoints.push(dataPoint);
    } else {
        sensor.dataPoints = [dataPoint];
    }

        //did event occur?
/*    if (temperatureReading.celsius < contract.minTemperature ||
        temperatureReading.celsius > contract.maxTemperature) {
        var temperatureEvent = factory.newEvent(NS, 'TemperatureThresholdEvent');
        temperatureEvent.shipment = shipment;
        temperatureEvent.temperature = temperatureReading.celsius;
        temperatureEvent.latitude = temperatureReading.latitude;
        temperatureEvent.longitude = temperatureReading.longitude;
        temperatureEvent.readingTime = temperatureReading.readingTime;
        temperatureEvent.message = 'Temperature threshold violated! Emitting TemperatureEvent for shipment: ' + shipment.$identifier;
        emit(temperatureEvent);
    }
*/
        //actually storing something in HyperLedger
    return getAssetRegistry(NS + '.Shipment')
        .then(function (shipmentRegistry) {
            // add the temp reading to the shipment
            return shipmentRegistry.update(shipment);
        });
}