import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState, useEffect } from "react";
import TableUser from "./TableUser";
import { getAllUser } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [listUser, setListUser] = useState([]);
    const fetchAllUser = async () => {
        let res = await getAllUser();
        if(res.EC === 0){
            setListUser(res.DT);
        }
    }
    useEffect(() => {
        fetchAllUser()
    }, [])
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user)
    }
    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataUpdate(user)
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><FcPlus></FcPlus>Add new users</button>
                </div>               
                <div className="table-users-container">
                    <TableUser listUser={listUser} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnView={handleClickBtnView}></TableUser>
                </div>
                <ModalCreateUser fetchAllUser={fetchAllUser} show={showModalCreateUser} setShow={setShowModalCreateUser}/>
                <ModalUpdateUser fetchAllUser={fetchAllUser} show={showModalUpdateUser} setShow={setShowModalUpdateUser} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate}/>
                <ModalViewUser show={showModalViewUser} setShow={setShowModalViewUser} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate}/>
            </div>         
        </div>
    )
}

export default ManageUser;