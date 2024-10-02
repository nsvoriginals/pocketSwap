import Image from "next/image";
import '../styles/style.css'

export default function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };
    return (
    <div id="main">
    <div id="box1">
        <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-27396.jpg?t=st=1727760485~exp=1727764085~hmac=e9a8b587b42b2244d10e97299657f9f26ff19013da342f993a44f619a08dda80&w=740" alt=""/>
    </div>
    <div id="box2">
       
        <form action="">
            <h1>LOGIN</h1>
           
            <input type="text" name="email" id="email" placeholder="EMAIL"/>
            <br></br>
           

            <input type="password" name="password" id="password" placeholder="PASSWORD"/>
            <br></br>
            <button type="submit">Login</button>
        </form>
    </div>
</div>
  );
}