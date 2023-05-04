import videoHomepage from '../../assets/video-1920.mp4';

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomepage} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default HomePage;