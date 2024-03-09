import type { Character } from "../../models/Character";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Card } from "../Card/Card";
import "./Character.css";
export const Characters = () => {
    const [page, setPage] = useState(1);
    const [mPage, setmPage] = useState(42);
    const [char, setChar] = useState<Character[]>([]);
    useEffect(() => {
        (async () => {
            const arrayCharacters = await axios
                .get(`https://rickandmortyapi.com/api/character?page=${page}`)
                .catch();
            setChar(arrayCharacters.data.results);
            setmPage(arrayCharacters.data.info.pages);
        })();
    }, [page]);
    return (
        <>
            <div className="container-button">
                <button
                    disabled={page <= 1}
                    onClick={() => {
                        setPage(page - 1);
                    }}
                >
                    prev page
                </button>

                <p>{page}</p>
                <button
                    disabled={page >= mPage}
                    onClick={() => {
                        setPage(page + 1);
                    }}
                >
                    next page
                </button>
            </div>
            <div>
                {char.map((c) => (
                    <Card
                        img={c.image}
                        name={c.name}
                        status={c.status}
                        race={c.species}
                        lastLocation={c.location.name}
                        firstAp={c.episode[0]}
                    ></Card>
                ))}
            </div>
        </>
    );
};
