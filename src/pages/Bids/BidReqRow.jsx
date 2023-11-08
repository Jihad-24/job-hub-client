/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const BidReqRow = ({ Bid, handleBidReject, handleBidAccept }) => {
    const { _id, jobTitle, email, status, deadline, price } = Bid;

    // console.log(status);
    return (
        <tr>
            <th>
                {jobTitle}
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
                        <span className="font-bold text-primary">Canceled</span>
                    ) : status === 'complete' ? (
                        <span className="font-bold text-primary">Complete</span>
                    ) : status === 'in progress' ? (
                        <span className="font-bold text-primary">In Progress</span>
                    ) : (status === 'pending' && <span className="font-bold text-primary">Pending</span>)
                }

            </td>
            <th className="w-24">
                {
                    status === 'in progress' || status === 'reject' || status === 'complete' ? (
                        <ProgressBar
                            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                            percent={
                                status === 'in progress' ? 50 :
                                    status === 'reject' ? 0 :
                                        status === 'complete' ? 100 : 0
                            }
                        />
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