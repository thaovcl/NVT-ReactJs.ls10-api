import React from 'react'
import axios from '../api/NvtApi'
export default function NvtListUsers({renderNvtListUsers, onNvtDelete}) {
    console.log("NvtListUsers:",renderNvtListUsers);
    // hiener thi đữ liệu
    let nvtElementUser = renderNvtListUsers.map((nvtUser,index)=>{
        return(
                <tr key={index}>
                    <td>{nvtUser.id}</td>
                    <td>{nvtUser.UserName}</td>
                    <td>{nvtUser.Password}</td>
                    <td>{nvtUser.Email}</td>
                    <td>{nvtUser.Phone}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>nvtHandleDelete(nvtUser)}> Delete </button>
                    </td>
                </tr>
        )
    })
 
    const nvtHandleDelete =  async (param)=>{
        if(window.confirm('Bạn có muốn xóa thật không?')){
            const nvtRes = await axios.delete("nvtUsers/"+param.id);
        }
        onNvtDelete();
    }
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                {nvtElementUser}
                </tbody>

            </table>
        </div>
    </div>
  )
}