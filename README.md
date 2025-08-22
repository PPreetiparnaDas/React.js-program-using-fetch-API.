# React Fetch API Example

This is a simple **React.js project** that demonstrates how to fetch data from an external API using the **Fetch API** and display it in a table.

## 🚀 Features
- Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- Displays user details in a table (ID, Name, Email, City)
- Shows **Loading...** while fetching
- Handles errors gracefully

## 📂 Project Setup

### 1. Create React App
```bash
npx create-react-app fetch-demo
cd fetch-demo
2. Install Dependencies (Optional: For Styling)
bash
Copy
Edit
npm install bootstrap
3. Run the App
bash
Copy
Edit
npm start
Now open http://localhost:3000 in your browser.

📝 Code Overview
The main logic is inside App.js:

javascript
Copy
Edit
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch data");
      return response.json();
    })
    .then((data) => setUsers(data))
    .catch((error) => setError(error.message));
}, []);
Uses useEffect to fetch data when the component mounts

Stores data in React state using useState

Handles loading and error states

📊 Output
Displays data in a table format

Example:

ID	Name	Email	City
1	Leanne Graham	Sincere@april.biz	Gwenborough

📦 Technologies Used
React.js

Fetch API

Bootstrap (for styling, optional)

🤝 Contributing
Feel free to fork this repo and submit a pull request with improvements.
