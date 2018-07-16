/**
 * A temperature reading has been received for a shipment
 * @param {org.acme.shipping.perishable.TemperatureReading} temperatureReading - the TemperatureReading transaction
 * @transaction
 */
function temperatureReading(temperatureReading) {

    var shipment = temperatureReading.shipment;
    var NS = 'org.acme.shipping.perishable';
    var contract = shipment.contract;
    var factory = getFactory();

    //console.log('Adding temperature ' + temperatureReading.celsius + ' to shipment ' + shipment.$identifier);

    if (shipment.temperatureReadings) {
        shipment.temperatureReadings.push(temperatureReading);
    } else {
        shipment.temperatureReadings = [temperatureReading];
    }

    if (temperatureReading.celsius < contract.minTemperature ||
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

    return getAssetRegistry(NS + '.Shipment')
        .then(function (shipmentRegistry) {
            // add the temp reading to the shipment
            return shipmentRegistry.update(shipment);
        });
}