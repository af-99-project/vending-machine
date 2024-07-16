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
    const [newVideoUrl, setNewVideoUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
        const videoUrls = [
            'https://www.youtube.com/watch?v=Uk8SWL1IK2Q&list=RDUk8SWL1IK2Q&start_radio=1',
            'https://www.youtube.com/watch?v=11iZcYbq_is&list=RDUk8SWL1IK2Q&index=2',
            'https://www.youtube.com/watch?v=Rj7N4ThLGQY',
            'https://www.youtube.com/watch?v=UCmgGZbfjmk&list=RD211aaP1-_aw&index=2',
            'https://www.youtube.com/watch?v=UCmgGZbfjmk&list=RD211aaP1-_aw&index=3',
            'https://www.youtube.com/watch?v=MtiHSv1iwXs'
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

    const handleInputChange = (e) => {
        setNewVideoUrl(e.target.value);
    };

    const addNewVideo = () => {
        if (newVideoUrl.trim() === '') {
            setErrorMessage('URL을 입력해주세요.');
        } else {
            const newVideo = {
                id: videos.length + 1,
                url: newVideoUrl.trim(),
                playing: false,
            };
            setVideos([...videos, newVideo]);
            setNewVideoUrl('');
            setErrorMessage('');
            alert('영상이 추가 되었다 아래 랜덤중에 이제 하나임 ㅅㄱㅇ.');
        }
    };

    return (
        <VODContainer>
            <TitleContainer>
                <h2>나만의 플레이리스트</h2>
                <RecommendButton onClick={() => window.open('https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl', '_blank')}>
                    추천 받기
                </RecommendButton>
            </TitleContainer>
            <InputContainer>
                <StyledInput
                    type="text"
                    placeholder="유튜브 URL을 입력하세요"
                    value={newVideoUrl}
                    onChange={handleInputChange}
                />
                <StyledButton onClick={addNewVideo}>영상 추가</StyledButton>
            </InputContainer>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <ScrollToTopButton onClick={scrollToTop}>위로가기</ScrollToTopButton>
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchMoreVideos}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                style={{ overflow: 'hidden' }}
            >
                {videos.map((video, index) => (
                    <div key={video.id}>
                        <ReactPlayer
                            url={video.url}
                            playing={video.playing}
                            controls={true}
                            width="100%"
                            height="400px"
                        />
                        {index !== videos.length - 1 && <Divider />} {/* Add divider if not the last video */}
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

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const StyledInput = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;

    &::placeholder {
        color: #aaa;
    }
`;

const StyledButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ffee00;
    color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        background-color: #ffc800;
    }
`;

const RecommendButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
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

const ErrorMessage = styled.div`
    color: red;
    margin-top: 5px;
`;

const Divider = styled.hr`
    margin: 20px 0;
    border: none;
    border-top: 1px solid #ccc;
`;

export default VODPage;
