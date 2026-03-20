#include <iostream>
#include <string>
#include <vector>
#include <unistd.h>

// Read message from Chrome
std::string read_message() {
    uint32_t length = 0;
    std::cin.read(reinterpret_cast<char*>(&length), 4);

    std::string message(length, '\0');
    std::cin.read(&message[0], length);

    return message;
}

// Send message to Chrome
void send_message(const std::string& message) {
    uint32_t length = message.size();
    std::cout.write(reinterpret_cast<char*>(&length), 4);
    std::cout << message;
    std::cout.flush();
}

int main() {
    while (true) {
        std::string input = read_message();

        // TODO: Add real CPU + memory logic here
        std::string response = R"({
            "cpu": 10,
            "memory": 200
        })";

        send_message(response);
    }
    return 0;
}