'use strict'

/**
 * This transaction's processor goal is to create a new contract between the farmer and underwriter.
 * @param {org.dltcamp.weatherBlocks}  farmer instance of farmer in new contract.
 * @param {org.dltcamp.weatherBlocks}  underWriter instance of underWriter in new contract.
 * @param {org.dltcamp.weatherBlocks}  sensor instance of the sensor which monitors the weather to provide data for checkPayout().
 * @param {org.dltcamp.weatherBlocks}  premium instance of the amount that is payed by the farmer on the start of the contract.
 * @param {org.dltcamp.weatherBlocks}  notional instance of the amount that is payed by the underWriter(insurer) when the contract needs to be payout.
 * @param {org.dltcamp.weatherBlocks}  threshold instance of number above which the insurence contract needs to be executed.
 * @param {org.dltcamp.weatherBlocks}  checkingStatusFrequency instance of contract checkings frequency.
 * @param {org.dltcamp.weatherBlocks}  end instance of contract end date.
 * @transaction
 */

 function createNewContract(farmer, underWriter, sensor, premium, notional, threshold, checkingStatusFrequency, end) {
     var contractId = "getAssets(Contract).len()"; //TODO 
     var contractFarmer = farmer;
     var contractUnderwriter = underWriter;
     var contractSensor = sensor;
     var contractPremium = premium;
     var contractNotional = notional;
     var contractThreshold = threshold;
     var contractChekingStatusFrequency = checkingStatusFrequency;
     var contractStart = Date.now();
     var contractEnd = end;
     var contractStatus = "SETTLED";

 }