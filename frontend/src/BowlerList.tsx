import { useEffect, useState } from "react";
import {bowler} from "./types/bowler";

function BowlerList () {
    
    const [bowlers, setBowlers] = useState<bowler[]>([]);


    useEffect(() => {
        const fetchBowler = async () => {
            const response = await fetch('https://localhost:5000/Bowling/getbowlerswithteam');
            const data = await response.json();
            setBowlers(data);
        };
        fetchBowler();
    }, []);



    return (
        <>
            <h1>Bowler Information</h1>
            <table>
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //Mapping
                        bowlers.map((b) => (
                            <tr key={b.BowlerId}>
                                <td>{`${b.bowlerFirstName} ${b.bowlerMiddleInit ? b.bowlerMiddleInit + " " : ""}${b.bowlerLastName}`}</td>
                                <td>{b.teamName}</td>
                                <td>{b.bowlerAddress}</td>
                                <td>{b.bowlerCity}</td>
                                <td>{b.bowlerState}</td>
                                <td>{b.bowlerZip}</td>
                                <td>{b.bowlerPhoneNumber}</td>
                            </tr>

                        ))                        
                    }
                </tbody>
            </table>
        </>
    );
}

export default BowlerList;