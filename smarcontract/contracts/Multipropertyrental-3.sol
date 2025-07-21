// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultiPropertyRental {
    struct Property {
        address owner;
        address tenant;
        string name;          // ✅ Nama properti
        string location;      // ✅ Alamat properti
        uint256 rentAmount;
        uint256 rentDuration;
        uint256 rentStart;
        bool isRented;
    }

    mapping(uint256 => Property) public properties;
    uint256 public propertyCount;

    // ✅ Event baru untuk mencakup info properti
    event PropertyCreated(
        uint256 propertyId,
        address owner,
        string name,
        string location,
        uint256 rentAmount
    );

    event PropertyRented(uint256 propertyId, address tenant);
    event PropertyReset(uint256 propertyId);

    // ✅ Tambah nama & lokasi ke parameter
    function createProperty(
        string memory _name,
        string memory _location,
        uint256 _rentAmount,
        uint256 _rentDurationInDays
    ) external {
        properties[propertyCount] = Property({
            owner: msg.sender,
            tenant: address(0),
            name: _name,
            location: _location,
            rentAmount: _rentAmount,
            rentDuration: _rentDurationInDays * 1 days,
            rentStart: 0,
            isRented: false
        });

        emit PropertyCreated(propertyCount, msg.sender, _name, _location, _rentAmount);
        propertyCount++;
    }

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

    function isRentalActive(uint256 _id) public view returns (bool) {
        Property storage prop = properties[_id];
        return prop.isRented && (block.timestamp < prop.rentStart + prop.rentDuration);
    }

    function getRemainingTime(uint256 _id) public view returns (uint256) {
        Property storage prop = properties[_id];

        if (!prop.isRented) return 0;
        uint256 end = prop.rentStart + prop.rentDuration;
        if (block.timestamp >= end) return 0;
        return end - block.timestamp;
    }

    function resetRental(uint256 _id) external {
        Property storage prop = properties[_id];

        require(msg.sender == prop.owner, "Bukan pemilik");
        require(block.timestamp >= prop.rentStart + prop.rentDuration, "Sewa masih aktif");

        prop.tenant = address(0);
        prop.rentStart = 0;
        prop.isRented = false;

        emit PropertyReset(_id);
    }

    // ✅ Update getProperty agar bisa ambil semua info
    function getProperty(uint256 _id) public view returns (
        address owner,
        address tenant,
        string memory name,
        string memory location,
        uint256 rentAmount,
        uint256 rentDuration,
        uint256 rentStart,
        bool isRented
    ) {
        Property storage p = properties[_id];
        return (
            p.owner,
            p.tenant,
            p.name,
            p.location,
            p.rentAmount,
            p.rentDuration,
            p.rentStart,
            p.isRented
        );
    }
}
