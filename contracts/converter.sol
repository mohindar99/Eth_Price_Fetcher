// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract converter {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(
            0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
        );
    }
    //sending value of eth
    function getETHPrice(int256 val) public view returns (int256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return (price * val)/100000000;
    }
}
