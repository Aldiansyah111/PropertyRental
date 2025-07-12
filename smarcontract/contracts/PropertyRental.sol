// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PropertyRental {
    address public owner;
    address public tenant;
    uint256 public rentAmount;       // Jumlah sewa (ETH)
    uint256 public rentDuration;     // Lama sewa dalam detik
    uint256 public rentStart;        // Waktu mulai sewa (timestamp)
    bool public isRented;

    constructor(uint256 _rentAmount, uint256 _rentDurationInDays) {
        owner = msg.sender;
        rentAmount = _rentAmount;
        rentDuration = _rentDurationInDays * 1 days;
        isRented = false;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Hanya pemilik");
        _;
    }

    modifier onlyTenant() {
        require(msg.sender == tenant, "Hanya penyewa");
        _;
    }

    function rent() external payable {
        require(!isRented, "Sudah disewa");
        require(msg.value >= rentAmount, "Pembayaran kurang");

        tenant = msg.sender;
        rentStart = block.timestamp;
        isRented = true;

        // Kirim pembayaran ke pemilik
        payable(owner).transfer(msg.value);
    }

    function getRemainingTime() public view returns (uint256) {
        if (!isRented) return 0;
        uint256 end = rentStart + rentDuration;
        if (block.timestamp >= end) return 0;
        return end - block.timestamp;
    }

    function isRentalActive() public view returns (bool) {
        return isRented && (block.timestamp < rentStart + rentDuration);
    }

    function resetRental() external onlyOwner {
        require(block.timestamp >= rentStart + rentDuration, "Sewa masih aktif");
        isRented = false;
        tenant = address(0);
        rentStart = 0;
    }
}
