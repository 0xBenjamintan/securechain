// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleDonation {
    // Mapping to track user donations for each recipient
    mapping(address => mapping(address => uint256)) public userDonations;

    // Event to log donations
    event DonationMade(address indexed donor, address indexed recipient, uint256 amount);

    // Function to donate to a specific recipient
    function donate(address recipient) public payable {
        require(recipient != address(0), "Invalid recipient address");
        require(msg.value > 0, "Donation must be greater than zero");

        // Transfer funds to the recipient
        payable(recipient).transfer(msg.value);

        // Track the donation amount for the user
        userDonations[msg.sender][recipient] += msg.value;

        emit DonationMade(msg.sender, recipient, msg.value);
    }

    // Function to get the donation amount a user has donated to a specific recipient
    function getUserDonation(address donor, address recipient) public view returns (uint256) {
        return userDonations[donor][recipient];
    }
}