// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultiPropertyRental {
    struct Property {
        address owner;
        address tenant;
        uint256 rentAmount;
        uint256 rentDuration;
        uint256 rentStart;
        bool isRented;
    }

    mapping(uint256 => Property) public properties;
    uint256 public propertyCount;

    // Event agar frontend bisa dengar
    event PropertyCreated(uint256 propertyId, address owner, uint256 rentAmount);
    event PropertyRented(uint256 propertyId, address tenant);
    event PropertyReset(uint256 propertyId);

    // ✅ Fungsi buat daftar properti baru
    function createProperty(uint256 _rentAmount, uint256 _rentDurationInDays) external {
        properties[propertyCount] = Property({
            owner: msg.sender,
            tenant: address(0),
            rentAmount: _rentAmount,
            rentDuration: _rentDurationInDays * 1 days,
            rentStart: 0,
            isRented: false
        });

        emit PropertyCreated(propertyCount, msg.sender, _rentAmount);
        propertyCount++;
    }

    // ✅ Fungsi buat nyewa properti
    function rentProperty(uint256 _id) external payable {
        Property storage prop = properties[_id];

        require(!prop.isRented, "Properti sudah disewa");
        require(msg.value >= prop.rentAmount, "Pembayaran kurang");

        prop.tenant = msg.sender;
        prop.rentStart = block.timestamp;
        prop.isRented = true;

        payable(prop.owner).transfer(msg.value);
        emit PropertyRented(_id, msg.sender);
    }

    // ✅ Ambil status sewa
    function isRentalActive(uint256 _id) public view returns (bool) {
        Property storage prop = properties[_id];
        return prop.isRented && (block.timestamp < prop.rentStart + prop.rentDuration);
    }

    // ✅ Ambil sisa waktu sewa
    function getRemainingTime(uint256 _id) public view returns (uint256) {
        Property storage prop = properties[_id];

        if (!prop.isRented) return 0;
        uint256 end = prop.rentStart + prop.rentDuration;
        if (block.timestamp >= end) return 0;
        return end - block.timestamp;
    }

    // ✅ Fungsi buat reset (hanya owner properti)
    function resetRental(uint256 _id) external {
        Property storage prop = properties[_id];

        require(msg.sender == prop.owner, "Bukan pemilik");
        require(block.timestamp >= prop.rentStart + prop.rentDuration, "Sewa masih aktif");

        prop.tenant = address(0);
        prop.rentStart = 0;
        prop.isRented = false;

        emit PropertyReset(_id);
    }

    // (Optional) Lihat info properti lengkap
    function getProperty(uint256 _id) public view returns (
        address, address, uint256, uint256, uint256, bool
    ) {
        Property storage p = properties[_id];
        return (
            p.owner,
            p.tenant,
            p.rentAmount,
            p.rentDuration,
            p.rentStart,
            p.isRented
        );
    }
}
