import { useState } from "react";
import styles from "./style.module.css";

const Main = () => {

	const[user,setUser]=useState([]);
        

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};



	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Courses</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;
// import React, { useEffect, useState } from "react";

// function App() { 
//   const [user, setUser] = useState([]);

//   async function fetchData() {
    // try {
	// 	const response = await axios.get("https://jsonplaceholder.typicode.com/users")
	// 	setUser(response.data)
	//   } catch (error) {
	// 	console.error(error);
	//   }
	// }
  
	// useEffect(() => {
	//   fetchData();
	// },[])

//   return (
//     <main>
//       <h1>User List</h1>
//       <ul>
//         {user && user.length > 0 && user.map((userObj, index) => (
//             <li key={userObj.id}>{userObj.name}</li>
//           ))}
//       </ul>
//     </main>
//   );
// }

// export default App;