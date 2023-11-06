/* eslint-disable react/prop-types */


const MyBidsRow = ({ handleDelete, booking, handleBidConfirm }) => {
    const {_id, jobTitle, email, status,deadline } = booking;
console.log(status);
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {jobTitle}
                    </div>
                </div>
            </td>
            <td>
                {email}
            </td>
            <td>{deadline}</td>
            <td>
                {
                    status === 'reject' ? <span className="font-bold text-primary">In Progress</span> :
                        <button onClick={() => handleBidConfirm(_id)} className="btn btn-ghost btn-xs">Pending</button>
                }
            </td>
            <th>
                {
                    status === 'in progress' && <button>complete</button>
               }
            </th>
        </tr>
    );
};

export default MyBidsRow;