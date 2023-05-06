import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState, useEffect } from "react";
import { getAllUser, getUserWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
    const LIMIT_USER = 6;
    const [pageCount, setPageCount] = useState(0);
    const [pagePos, setPagePos] = useState(1);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalAnnouce, setShowModalAnnouce] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [listUser, setListUser] = useState([]);
    const fetchAllUserWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if(res.EC === 0){
            setListUser(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }
    useEffect(() => {
        fetchAllUserWithPaginate(1)
    }, [])
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user)
    }
    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataUpdate(user)
    }
    const handleClickBtnDelete = (user) => {
        setShowModalAnnouce(true);
        setDataDelete(user)
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
                    {/* <TableUser listUser={listUser} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnView={handleClickBtnView} handleClickBtnDelete={handleClickBtnDelete}></TableUser> */}
                    <TableUserPaginate setPagePos={setPagePos} listUser={listUser} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnView={handleClickBtnView} handleClickBtnDelete={handleClickBtnDelete} pageCount={pageCount} fetchAllUserWithPaginate={fetchAllUserWithPaginate}/>
                </div>
                <ModalCreateUser pagePos={pagePos} fetchAllUserWithPaginate={fetchAllUserWithPaginate} show={showModalCreateUser} setShow={setShowModalCreateUser}/>
                <ModalUpdateUser pagePos={pagePos} fetchAllUserWithPaginate={fetchAllUserWithPaginate} show={showModalUpdateUser} setShow={setShowModalUpdateUser} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate}/>
                <ModalViewUser show={showModalViewUser} setShow={setShowModalViewUser} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate}/>
                <ModalDeleteUser pagePos={pagePos} show={showModalAnnouce} setShow={setShowModalAnnouce} dataDelete={dataDelete} setDataDelete={setDataDelete} fetchAllUserWithPaginate={fetchAllUserWithPaginate}/>
            </div>         
        </div>
    )
}

export default ManageUser;