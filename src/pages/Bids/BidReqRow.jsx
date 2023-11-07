/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const BidReqRow = ({ Bid, handleBidReject, handleBidAccept }) => {
    const { _id, jobTitle, email, status, deadline, price } = Bid;

    console.log(status);
    return (
        <tr>
            <th>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {jobTitle}
                    </div>
                </div>
            </th>
            <td>
                {email}
            </td>
            <td>
                {deadline}
            </td>
            <td>${price}</td>
            <td>
                {
                    status === 'reject' ? (
                        <span className="font-bold text-primary">Rejected</span>
                    ) : status === 'in progress' ? (
                        <span className="font-bold text-primary">Accepted</span>
                    ) : <span className="font-bold text-primary">Pending</span>
                }

            </td>
            <th>
                {
                    status === 'in progress' || status === 'reject' ? (
                        <span></span>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <button onClick={() => handleBidAccept(_id)} className="btn btn-xs">Accept</button>
                            <button onClick={() => handleBidReject(_id)} className="btn btn-xs">Reject</button>
                        </div>
                    )
                }
            </th>
        </tr>
    );
};

export default BidReqRow;