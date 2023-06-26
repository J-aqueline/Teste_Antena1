import React, { Fragment, useState } from "react";

const InputUsers = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { name, email, age };
          const request = await fetch("http://localhost:5000/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });

          if (request.status === 500) {
            const res = await request.json()
            window.alert(res.message);
          }

          window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Cadastro de Usuários</h1>
            <form className="d-flex flex-column mt-5" onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label for="name">Nome</label>
                    <input Type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input Type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="age">Idade</label>
                    <input Type="number" className="form-control" value={age} onChange={e => setAge(e.target.value)}/>
                </div>
                <button className="btn btn-success">Adicionar</button>
            </form>
        </Fragment>
    );
};
export default InputUsers;
