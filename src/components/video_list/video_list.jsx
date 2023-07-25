import React, { memo } from 'react';
import VideoItem from "../video_item/video_item";
import styles from './video_list.module.css';

const VideoList = memo((props) => {
    const displayType = props.display === 'list' ? styles.list : styles.grid;

    return (
        <ul className={`${styles.videos} ${displayType}`}>
            {props.videos && props.videos.map(video => {
                return <VideoItem
                    onVideoClick={props.onVideoClick}
                    key={video.id}
                    video={video}
                    display={props.display}
                />
            })}
        </ul>
    )
});

export default VideoList;