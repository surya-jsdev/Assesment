// const submit = document.getElementById("submit");
// const form = document.getElementsByTagName("form")
// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     const newlist = { username: username, email: email, password: password }

//     fetch("https://68a582352a3deed2960dbd2c.mockapi.io/form/name", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(newlist),
//     })
//         .then(res => {
//             if (res.ok) {
//                 return res.json();
//             }
//             throw new Error("Failed to Create")
//         })
//         .then((data) => {
//             const responseMessage = document.getElementById("responseMessage");
//             responseMessage.style.display = "block";
//             responseMessage.textContent = "Task created successfully";
//             document.getElementById("errorMessage").style.display = "none";
//         })
//         .catch((error) => {
//             const errorMessage = document.getElementById("errorMessage");
//             errorMessage.style.display = "block";
//             errorMessage.textContent = "Error: " + error.message;
//             document.getElementById("responseMessage").style.display = "none";
//         });
// })

// const login = document.getElementById("login");
// const dataURL = "https://68a582352a3deed2960dbd2c.mockapi.io/form/name";

// login.addEventListener("click", (e) => {
//     e.preventDefault();

//     const loginemail = document.getElementById("loginemail").value.trim();
//     const loginpassword = document.getElementById("loginpassword").value.trim();

//     fetch(dataURL, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//     })
//         .then(res => res.json())
//         .then(users => {
//             // Find user with matching email and password
//             const user = users.find(u => u.email === loginemail && u.password === loginpassword);

//             const responseMessage = document.getElementById("responseMessage");
//             const errorMessage = document.getElementById("errorMessage");

//             if (user) {
//                 responseMessage.style.display = "block";
//                 responseMessage.textContent = "Login successful!";
//                 errorMessage.style.display = "none";
//             } else {
//                 responseMessage.style.display = "none";
//                 errorMessage.style.display = "block";
//                 errorMessage.textContent = "Invalid email or password!";
//             }
//         })
//         .catch(err => {
//             console.error("Error fetching data:", err);
//             alert("Something went wrong. Please try again later.");
//         });
// });

let arr = [];
arr = [1, 2, 34, 5, 6, 7, 8, 20]
const result = arr.filter((num) => num % 2 === 0 )
console.log(result)
