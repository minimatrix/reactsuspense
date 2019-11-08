import React from "react";

export const Num = ({ resource }) => {
    const n = resource && resource.num ? resource.num.read() : undefined;
    return <div>your random number is: {n ? n : "not got one"}</div>;
};
