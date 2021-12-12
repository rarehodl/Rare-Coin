
pragma solidity ^0.5.0;

import "./OpenZeppelin/crowdsale/Crowdsale.sol";
import "./OpenZeppelin/crowdsale/validation/CappedCrowdsale.sol";
import "./OpenZeppelin/crowdsale/validation/TimedCrowdsale.sol";
import "./OpenZeppelin/crowdsale/emission/AllowanceCrowdsale.sol";

contract RareCoinICO is Crowdsale, CappedCrowdsale, TimedCrowdsale,AllowanceCrowdsale  {

    constructor(
        uint256 rate,            // rate, in TKNbits
        address payable wallet,  // wallet to send Ether
        IERC20 token,            // the token
        address tokenWallet,     // wallet with the tokens
        uint256 cap,             // total cap, in wei
        uint256 openingTime,     // opening time in unix epoch seconds
        uint256 closingTime      // closing time in unix epoch seconds
    )
        CappedCrowdsale(cap)
        TimedCrowdsale(openingTime, closingTime)
        AllowanceCrowdsale(tokenWallet) 
        Crowdsale(rate, wallet, token)
        public{}
}