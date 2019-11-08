import React, { Suspense, useTransition, useState, useEffect } from "react";
import { createResource } from "./PersonApi";
import { Person } from "./Person";
import { Num } from "./Num";

function App() {
    const [startTransition, isPending] = useTransition({ timeoutMs: 4000 });
    const [resource, setResource] = useState();

    return (
        <div className="App">
            <Suspense fallback={<h1>loading number...</h1>}>
                <Num resource={resource} />
            </Suspense>
            <Suspense fallback={<h1>loading person...</h1>}>
                <Person resource={resource} />
            </Suspense>
            <button
                onClick={() => {
                    startTransition(() => {
                        setResource(createResource());
                    });
                }}
            >
                Fetch Data {isPending && "... loading"}
            </button>
        </div>
    );
}

export default App;
