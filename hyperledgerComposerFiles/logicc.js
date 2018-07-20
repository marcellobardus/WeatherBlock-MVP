'use strict'

/**
 * Sample transaction processor function.
*/

// function checkPayout(contract) {
//     var isTimeToCheck;
//     if (Date.now() - contract.last_check_timestamp >= contract.checking_status_frequency) {
//         isTimeToCheck = true;
//     } else {
//         isTimeToCheck = false;
//     }

//     if(!isTimeToCheck) {
//         return false;
//     }

//     //counting average temperature in contracts checking_status_frequency

//     var frequency = contract.checking_status_frequency;

//     var data_to_be_used_to_count_the_average = [];

//     current_iteration = contract.observedSensor.dataPoints.len() - 1; 
//     while (contract.observedSensor.dataPoints[current_iteration].TimeStamp <= frequency) {
//         data_to_be_used_to_count_the_average.push(contract.observedSensor.dataPoints[current_iteration]);
//         current_iteration = current_iteration - 1;
//     }

//     //Counting average

//     var average = 0;
//     var dataPointsLen = data_to_be_used_to_count_the_average.len();
//     for (var i = 0; i < dataPointsLen; i++) {
//         average = data_to_be_used_to_count_the_average[i] + average;
//     }

//     average = average / dataPointsLen;

//     //Checking if should the smartContract payload

//     if(average >= contract.threshold) {
//         contract.end = Date.now();
//         return true;
//     } 

//     return false;
// }

function sensorReading(sensorReading) {
        var sensor = sensorReading.sensor;
        var namespace = 'org.dltcamp.weatherBlocks';
        var dataPoint = sensorReading.sensorData
    
        //console.log('Adding temperature ' + temperatureReading.celsius + ' to shipment ' + shipment.$identifier);
    
        if (sensor.sensorReadings) {
            sensor.sensorReadings.push(sensorReadings);
        } else {
            sensor.sensorReadings = [sensorReadings];
        }

            //actually storing something in HyperLedger
        return getAssetRegistry(namespace + '.Sensor')
            .then(function (sensorRegistry) {
                // add the temp reading to the shipment
                return sensorRegistry.update(sensor);
            });
    }