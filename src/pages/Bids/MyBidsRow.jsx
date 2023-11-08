/* eslint-disable react/prop-types */
import { AiTwotoneDelete } from 'react-icons/ai';

const MyBidsRow = ({ handleDelete, booking, handleBidComplete }) => {
    const { _id, jobTitle, email, status, deadline } = booking;
    // console.log(status);
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                <AiTwotoneDelete></AiTwotoneDelete>
                </button>
            </th>
            <td>
                {jobTitle}
            </td>
            <td> {email}</td>
            <td>{deadline}</td>
            <td>
                {
                    status === 'reject' ? (
                        <span className="font-bold text-primary">Rejected</span>
                    ) : status === 'complete' ? (
                        <span className="font-bold text-primary">Complete</span>
                    ) : status === 'in progress' ? (
                        <span className="font-bold text-primary">In Progress</span>
                    ) : (status === 'pending' && <span className="font-bold text-primary">Pending</span>)
                }
            </td>
            <th>
                {
                    status === 'in progress' ? (
                        <button className="btn btn-xs" onClick={() => handleBidComplete(_id)}>complete</button>
                    ) : ''
                }
            </th>
        </tr>
    );
};

export default MyBidsRow;