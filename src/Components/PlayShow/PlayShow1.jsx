import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./playShow.css";
import ReactPlayer from "react-player";
import { Player, ControlBar, BigPlayButton } from "video-react";
import { RiForward10Fill, RiReplay10Fill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { BsPauseFill } from "react-icons/bs";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Button from "@mui/material";
import {
    Slider,
    withStyles,
    Button,
    Tooltip,
    Popover,
} from "@material-ui/core";
import {
    FastForward,
    FastRewind,
    Pause,
    PlayArrow,
    SkipNext,
    VolumeUp,
} from "@material-ui/icons";
// GrForwardTen
import "./playShow.css";
import { Typography } from "@mui/material";

// const useStyles = makeStyles({
//     playerWrapper: {
//         width: "100%",
//         position: "relative",
//     },
//     controlsWrapper: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: "rgba(0,0,0,0.6)",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         zIndex: 1,
//     },
// });

export const PlayShow1 = () => {
    let { id } = useParams();
    const [details, setDetails] = useState(null);

    // const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://academics.newtonschool.co/api/v1/ott/show/${id}`,

                    {
                        headers: {
                            projectId: "zxke0qiu2960",
                        },
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setDetails(data);
                } else {
                    console.log("Failed to fetch data:", response.statusText);
                }
            } catch (err) {
                console.log("Failed to fetch data:", response.statusText);
            }
            // finally {
            // }
        };
        fetchData();
    }, [id]);

    if (!details) {
        return <div>Loading...</div>; // Show a loading message while data is being fetched
    }

    return (
        <div style={{ color: "white" }}>
            {/* <Container maxWidth="lg"> */}
            <div className="playerWrapper">
                <ReactPlayer
                    url={details.data.video_url}
                    controls={true}
                    width={"100%"}
                    height={"100%"}
                    className="player"
                    muted={false}
                    playing={true}
                />
            </div>

            <div className="controlsWrapper">
                <Typography style={{ color: "white" }}>Hello</Typography>
                {/* <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    style={{ padding: "16px" }}
                >
                    <Grid item>
                        <Typography variant="h5" style={{ color: "white" }}>
                            {details.data.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary">
                            Bookmark
                        </Button>
                    </Grid>
                </Grid> */}
            </div>
            {/* </Container> */}
        </div>
    );
};
