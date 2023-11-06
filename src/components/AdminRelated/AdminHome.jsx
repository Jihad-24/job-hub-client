import BidRequests from "./BidRequests";
import BidStatus from "./BidStatus";


const AdminHome = () => {
    return (
        <div>
            <BidRequests></BidRequests>
            <BidStatus></BidStatus>
        </div>
    );
};

export default AdminHome;