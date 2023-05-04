import React from 'react';

function TableUser(props) {
    const {listUser, handleClickBtnUpdate, handleClickBtnView, handleClickBtnDelete} = props
    
    return (
        <div>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 && listUser.map((item, index) => (
                        <tr key={`table-users-${index}`}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                        <td>
                            <button className='btn btn-primary' onClick={() => handleClickBtnView(item)}>View</button>
                            <button className='btn btn-secondary mx-3' onClick={() => handleClickBtnUpdate(item)}>Update</button>
                            <button className='btn btn-warning' onClick={() => handleClickBtnDelete(item)}>Delete</button>
                        </td>
                        </tr>
                    ))}
                    {listUser && listUser.length === 0 && 
                    <tr>
                        <td colSpan={'4'}>
                            Not found data
                        </td>
                    </tr>}
                </tbody>
            </table>
        </div>
    );
}

export default TableUser;