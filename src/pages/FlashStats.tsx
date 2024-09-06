import Stats from "../components/Stats";
import {flash} from "../../db.json"

function FlashStats() {
    const columns = ['score', 'percent', 'created_at'];

    return (
        <>
            <Stats data={flash} columns={columns}/>
        </>        
    )
}

export default FlashStats;