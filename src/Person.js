import React from "react";

export const Person = ({ resource }) => {
    const person = resource && resource.person ? resource.person.read() : undefined;

    return <div>{person && person.name.first}</div>;
};
