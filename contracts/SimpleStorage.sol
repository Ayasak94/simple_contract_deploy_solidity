
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    string private data;

    // Установка значения
    function set(string calldata _data) public {
        data = _data;
    }

    // Получение значения
    function get() public view returns (string memory) {
        return data;
    }
}
