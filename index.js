const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
   return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};

// shorter version 
// const fareDoubler = createFareMultiplier(2);
const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2;
};

const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3;
};

const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
};
