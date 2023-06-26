import React, {Fragment, useState} from 'react';
 

const EditUser = ({user}) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);


    const updateName = async (e) => {
        e.preventDefault(); 
        try {
          const body = {name, email, age};
          const response = await fetch(`http://localhost:5000/api/users/${user.id}`, {
            method: "PUT",
            headers: {"content-type": "application/json" },
            body: JSON.stringify(body)
          });
          window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return <Fragment>
    <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${user.id}`}>
      Editar
    </button>

    <div class="modal" id={`id${user.id}`}>
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h4 class="modal-title">Editar informações</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <div class="modal-body">
           <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
           <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
           <input type="text" className="form-control" value={age} onChange={e => setAge(e.target.value)}/>
          </div>
    
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateName(e)}>Salvar</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Fechar
              </button>
          </div>
    
        </div>
      </div>
    </div></Fragment>
};

export default EditUser;