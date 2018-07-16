

function checkPayout(contract) {
    let isTimeToCheck;
    if (Date.now() - contract.last_check_timestamp >= contract.checking_status_frequency) {
        isTimeToCheck = true;
    } else {
        isTimeToCheck = false;
    }

    if(!isTimeToCheck) {
        return false;
    }

    //counting average temperature in contracts checking_status_frequency

    let frequency = contract.checking_status_frequency;

    let data_to_be_used_to_count_the_average = [];

    current_iteration = contract.observedSensor.dataPoints.len() - 1; 
    while (contract.observedSensor.dataPoints[current_iteration].TimeStamp <= frequency) {
        data_to_be_used_to_count_the_average.push(contract.observedSensor.dataPoints[current_iteration]);
        current_iteration = current_iteration - 1;
    }

    //Counting average

    let average = 0;
    let dataPointsLen = data_to_be_used_to_count_the_average.len();
    for (let i = 0; i < dataPointsLen; i++) {
        average = data_to_be_used_to_count_the_average[i] + average;
    }

    average = average / dataPointsLen;

    //Checking if should the smartContract payload

    if(average >= contract.threshold) {
        contract.end = Date.now();
        return true;
    } 

    return false;
}