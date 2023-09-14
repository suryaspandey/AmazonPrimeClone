import React, { useEffect, useState } from "react";

export const WatchInYourLanguage = () => {
    const [mydata, setMyData] = useState([]);
    const bearerToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM0NTc0MjhiYWJjMTExMDE5MmNmYiIsImlhdCI6MTY5NDcxMzIwNCwiZXhwIjoxNzI2MjQ5MjA0fQ.DKJz5ZvO667Ht9irDWLfynH2rhqPxGMxSrncaSPeU5w";
    const projectId = "zxke0qiu2960";

    useEffect(() => {
        const url = "https://academics.newtonschool.co/api/v1/ott/show";
        const webSeriesurl = `https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "web series"}`;

        const headers = {
            projectId: projectId,
            Authorization: `Bearer ${bearerToken}`,
        };
        fetch(url, { method: "GET", headers: headers })
            .then((response) => response.json())
            .then((exdata) => {
                const allData = exdata;
                console.log(allData);
                setMyData(exdata.data);
            });
    }, [projectId, bearerToken]);

    return (
        <div>
            {mydata.map((item) => (
                <div key={item._id}>
                    <h2>{item.title}</h2>
                    <p>Description: {item.description}</p>
                    <p>Director: {item.director}</p>
                    <p>Type: {item.type}</p>
                    <p>Cast: {item.cast.join(", ")}</p>
                    <p>Keywords: {item.keywords.join(", ")}</p>
                    <p>Video URL: {item.video_url}</p>
                    <p>
                        Thumbnail: <img src={item.thumbnail} alt={item.title} />
                    </p>
                </div>
            ))}
        </div>
    );
};
