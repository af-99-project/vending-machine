import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { animateScroll as scroll } from 'react-scroll';

const VODPage = () => {
    const [videos, setVideos] = useState([
        { id: 1, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', playing: false },
        { id: 2, url: 'https://www.youtube.com/watch?v=Uk8SWL1IK2Q&list=RDUk8SWL1IK2Q&start_radio=1', playing: false },
        { id: 3, url: 'https://www.youtube.com/watch?v=aip80BfeuDg', playing: false },
        // Add more videos as needed
    ]);

    const fetchMoreVideos = () => {
        // Example: Fetch more videos from an API or generate new random URLs
        const newVideos = [
            ...videos,
            { id: videos.length + 1, url: getRandomVideoUrl(), playing: false },
            { id: videos.length + 2, url: getRandomVideoUrl(), playing: false },
        ];
        setVideos(newVideos);
    };

    const getRandomVideoUrl = () => {
        // Example: Generating random video URLs
        const videoUrls = [
            'https://www.youtube.com/watch?v=Uk8SWL1IK2Q&list=RDUk8SWL1IK2Q&start_radio=1',
            'https://www.youtube.com/watch?v=11iZcYbq_is&list=RDUk8SWL1IK2Q&index=2',
            'https://www.youtube.com/watch?v=Rj7N4ThLGQY',
            // Add more video URLs as needed
        ];
        const randomIndex = Math.floor(Math.random() * videoUrls.length);
        return videoUrls[randomIndex];
    };

    const handleVideoClick = (videoId) => {
        const updatedVideos = videos.map(video =>
            video.id === videoId ? { ...video, playing: !video.playing } : { ...video, playing: false }
        );
        setVideos(updatedVideos);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <VODContainer>
            <h2>VOD 페이지</h2>
            <ScrollToTopButton onClick={scrollToTop}>위로가기</ScrollToTopButton>
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchMoreVideos}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                style={{ overflow: 'hidden' }}
            >
                {videos.map((video) => (
                    <div key={video.id} onClick={() => handleVideoClick(video.id)}>
                        <ReactPlayer
                            url={video.url}
                            playing={video.playing}
                            controls={true} // 재생 컨트롤 보이기
                            width="100%"
                            height="400px"
                        />
                    </div>
                ))}
            </InfiniteScroll>
        </VODContainer>
    );
};

const VODContainer = styled.div`
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f0f0f0;
`;

const ScrollToTopButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    z-index: 1000;

    &:hover {
        background-color: #0056b3;
    }
`;

export default VODPage;
