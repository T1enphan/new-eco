import { useState } from "react";
import axios from "axios";



function ActionRegister(){
    const [errors, setErros] = useState({});
    const [input, setInput] = useState({
        name : "",
        email : "",
        password: "",
        phone: "",
        address : "",
        level : "",
    });


    function handleChange(e) {
        const nameInput = e.target.name;
        const value = e.target.value;
        setInput((state) => ({ ...state, [nameInput]: value }));
      }
    
    function handleSubmit(e){
        e.preventDefault();
        let errorSubmit = {}
        let flag = true

        if(input.name == "") {
            errorSubmit.name = "vui long nhap name"
            console.log(errorSubmit.name = "vui long nhap name");
            flag = false;
        }
        
        
        if(input.email == "") {
            errorSubmit.email = "vui long nhap email"
            console.log(errorSubmit.email = "vui long nhap email");
            flag = false;
        }

        if (input.password == "") {
            errorSubmit.password = "vui long nhap password";
            console.log(errorSubmit.password = "vui long nhap password");
            flag = false;
        }
        if (input.phone == "") {
            errorSubmit.phone = "vui long nhap phone";
            console.log(errorSubmit.phone = "vui long nhap phone");
            flag = false;
        }

        if (input.address == "") {
            errorSubmit.address = "vui long nhap dia chi";
            console.log(errorSubmit.address = "vui long nhap dia chi");
            flag = false;
        }

        if (input.level == "") {
            errorSubmit.level = "vui long nhap level";
            console.log(errorSubmit.level = "vui long nhap level");
            flag = false;
        }

        if(!flag){
            setErros(errorSubmit)
        } else {
           setErros({});
        }

        const payload = {
            name: input.name,
            email: input.email,
            password: input.password,
            phone: input.phone,
            address: input.address,
            level: input.level,
        }
        axios.post("https://localhost/laravel8/public/api/register", payload)
        .then((res)=>{
            console.log(res);
        })
        .catch((error) => {
            console.error("There was an error making the request:", error);
        });
    }

    function renderError() {
        if (Object.keys(errors).length > 0) {
          return Object.keys(errors).map((key, index) => {
            return <li key={index}>{errors[key]}</li>;
          });
        }
      }

    return (
    <>
        {renderError()}
        {/* <form onSubmit={handleSubmit}> */}
        <section id="form">
          <div class="container">
            <div class="row">
              {/* register */}
              <div class="col-sm-4">
                <div class="signup-form">
                  <h2>New User Signup!</h2>
                  <form onSubmit={handleSubmit}>
                    <input name="name" type="text" placeholder="Name" value={input.name} onChange={handleChange}   />
                    <input name="email" type="email" placeholder="Email Address" value={input.email} onChange={handleChange}   />
                    <input name="password" type="text" placeholder="Password" value={input.password} onChange={handleChange}   />
                    <input name="phone" type="tel" placeholder="Phone Number" value={input.phone} onChange={handleChange}   />
                    <input name="address" type="text" placeholder="Address" value={input.address} onChange={handleChange}   />
                    <input name="level" type="number" placeholder="Level" value={input.level} onChange={handleChange}   />
                    {/* <input name="" type="file" placeholder="File avatar" value={input} onChange={handleChange}   /> */}
                    <button type="submit" class="btn btn-default">
                      Signup
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </form> */}
    </>
  );
}
export default ActionRegister