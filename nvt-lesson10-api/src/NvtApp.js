
import './App.css';
import NvtListUsers from './components/NvtListUsers';
import axios from './api/NvtApi'
import { useEffect, useState } from 'react';
import NvtFormAddOrEdit from './components/NvtFormAddOrEdit';
function NvtApp() {
  
  const [nvtListUsers,setNvtListUsers] = useState([]);

  // đọc dữ liệu từ api
  const nvtGetAllUsers = async  ()=>{
    const nvtResponse = await axios.get("nvtUsers");
    console.log("Api Data:",nvtResponse.data);
    setNvtListUsers(nvtResponse.data)
  }

  
  useEffect(()=>{
    nvtGetAllUsers();
    console.log("State Data:",nvtListUsers);
  },[])

  const [nvtAddOrEdit, setNvtAddOrEdit] = useState(false);
  const nvtInitUser = {
      UserName: "Nguyễn Văn Thạo",
      Password: "17/05/2004",
      Email: "vanthao@gmail.com",
      Phone: "0382658414",
      id: "2210900125"
  }
  const [nvtUser, setNvtUser] = useState(nvtInitUser);

  // Hàm xử lý nút thêm mới
  const nvtHandleAddNew = ()=>{
    setNvtAddOrEdit(true);
  }
  const nvtHandleClose=(param)=>{
    setNvtAddOrEdit(param);
  }
  const nvtHandleSubmit =(param)=>{
    nvtGetAllUsers();
    setNvtAddOrEdit(param);
  }
  const nvtHandleDelete=()=>{
    nvtGetAllUsers();
  }
  let nvtElementForm = nvtAddOrEdit===true?
      <NvtFormAddOrEdit renderUsers={nvtUser} 
                        onNvtClose={nvtHandleClose}
                        onNvtSubmitForm={nvtHandleSubmit}/>:"";
  return (
    <div className="container border my-3">
        <h1>Làm việc với MockApi</h1>
        <hr/>
        <NvtListUsers  renderNvtListUsers={nvtListUsers} onNvtDelete={nvtHandleDelete}/>
        <button className='btn btn-primary' name='btnNvtThemMoi' onClick={nvtHandleAddNew}>Thêm mới</button>
        <hr/>
        {nvtElementForm}
    </div>
  );
}

export default NvtApp;
