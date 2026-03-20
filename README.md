<img width="469" height="638" alt="image" src="https://github.com/user-attachments/assets/df7629f5-bef0-4cd4-9b49-737b76fc9f9a" /># ⚡ Tab Optimizer – Chrome Extension

A Chrome extension that helps users identify and manage resource-heavy tabs to improve browser performance.

---

## 🚀 Features

- 🔍 Detects heavy tabs using:
  - JS heap memory
  - DOM complexity
  - Tab activity status
- 📊 Ranks tabs based on a scoring system
- 💤 Sleep tabs (free memory without closing)
- ❌ Close tabs instantly
- 🎨 Clean and modern UI dashboard
- ⚙️ Optional C++ native integration (advanced)

---

## 🧠 How It Works

Each tab is assigned a **score** based on:

- Memory usage (JS heap)
- Number of DOM nodes
- Background / inactive status

Higher score ⇒ heavier tab ⇒ recommended to close/sleep

---

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Chrome APIs: Tabs, Scripting, Storage  
- Optional: C++ (Native Messaging)  

---

## 📂 Project Structure

tab-optimizer/
│
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   ├── style.css
│
├── native/
│   ├── host.cpp
│   ├── host.json
│
└── README.md

---

## ⚙️ Setup Instructions

### 1. Load Extension

1. Open Chrome  
2. Go to chrome://extensions/  
3. Enable Developer Mode  
4. Click "Load unpacked"  
5. Select the extension/ folder  

---

### 2. (Optional) Setup Native Host

1. Compile C++:
   g++ host.cpp -o tab_host.exe  

2. Update host.json with correct path and extension ID  

3. Copy host.json to:
   C:\Users\<your-username>\AppData\Local\Google\Chrome\User Data\NativeMessagingHosts  

---

## 🎯 Usage

- Click the extension icon  
- View tab rankings  
- Use:
  - Sleep → unload tab (frees memory)
  - Close → remove tab  

---

## ⚠️ Limitations

- Cannot access exact CPU usage per tab (Chrome restriction)  
- Memory estimation is based on JS heap only  
- Native integration required for deeper system metrics  

---

## 🔥 Future Improvements

- Graph visualization (top heavy tabs)  
- Auto-sleep inactive tabs  
- Smart recommendations  
- Accurate CPU tracking via native host  
- Chrome Web Store deployment  

---

## 📸 Screenshots

<img width="466" height="638" alt="image" src="https://github.com/user-attachments/assets/d5d9aefa-b4d5-46a1-b35c-ad9444e4ee3c" />


## 👨‍💻 Author

Mayank Tyagi  


## ⭐ Contribute

Feel free to fork, improve, and submit pull requests!

---

## 📜 License

MIT License
