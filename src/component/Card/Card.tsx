import "./card.css";

export const Card = (props: {
    img: string;
    name: string;
    status: string;
    race: string;
    lastLocation: string;
    firstAp: string;
}) => {
    return (
        <div className="card">
            <div className="container">
                <div className="containerUser">
                    <div className="containerInfo">
                        <img src={props.img} alt="404" />
                    </div>
                    <div className="containerInfo">
                        <h1>{props.name}</h1>
                        <h2>
                            {props.status} - {props.race}
                        </h2>
                        <p>Last known location:</p>
                        <div>
                            <p>{props.lastLocation}</p>
                        </div>
                        <p>First seen in:</p>
                        <div>
                            <p>{props.firstAp}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
