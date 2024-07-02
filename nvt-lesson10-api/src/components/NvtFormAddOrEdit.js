import axios from '../api/NvtApi'
import React, { useEffect, useState } from 'react'

export default function NvtFormAddOrEdit({onNvtClose, onNvtSubmitForm, renderUsers}) {

    console.log(renderUsers);
    const [nvtId, setNvtId] = useState(0);
    const [nvtUserName, setNvtUserName] = useState("");
    const [nvtPassword, setNvtPassword] = useState("");
    const [nvtEmail, setNvtEmail] = useState("");
    const [nvtPhone, setNvtPhone] = useState("");

    useEffect(()=>{
        setNvtId(renderUsers.id)
        setNvtUserName(renderUsers.UserName)
        setNvtPassword(renderUsers.Password)
        setNvtEmail(renderUsers.Email)
        setNvtPhone(renderUsers.Phone)
    },[renderUsers])


    const nvtHandleClose = ()=>{
        onNvtClose(false);
    }

    const nvtHandleSubmit= async (event)=>{
        event.preventDefault();
        console.log(nvtId,nvtUserName,nvtPassword,nvtEmail,nvtPhone);
        // post -> api
        let nvtObjUser = {
            UserName: nvtUserName,
            Password: nvtPassword,
            Email: nvtEmail,
            Phone: nvtPhone,
            id: nvtId
        }
        const nvtRes = await axios.post("nvtUsers",nvtObjUser);

        onNvtSubmitForm(false)

    }
  return (
    <div className=''>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="id">Id</span>
            <input type="text" class="form-control" 
                name='id' value={nvtId} onChange={(ev)=>setNvtId(ev.target.value)}
                placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="UserName">UserName</span>
            <input type="text" class="form-control" 
                name='UserName' value={nvtUserName} onChange={(ev)=>setNvtUserName(ev.target.value)}
                placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Password">Password</span>
            <input type="password" class="form-control" 
                name='Password' value={nvtPassword} onChange={(ev)=>setNvtPassword(ev.target.value)}
                placeholder="Password" aria-label="Password" aria-describedby="Password"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Email">Email</span>
            <input type="email" class="form-control" 
                name='Email' value={nvtEmail} onChange={(ev)=>setNvtEmail(ev.target.value)}
                placeholder="Email" aria-label="Email" aria-describedby="Email"/>
        </div>
        
        <div className="input-group mb-3">
            <span className="input-group-text" id="Phone">Phone</span>
            <input type="number" class="form-control" 
                name='Phone' value={nvtPhone} onChange={(ev)=>setNvtPhone(ev.target.value)}
                placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
        </div>
        <button className='btn btn-primary' name='btnNvtSave' onClick={(ev)=>nvtHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={nvtHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
