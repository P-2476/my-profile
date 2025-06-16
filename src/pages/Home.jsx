import profile from "../assets/pema.jpeg";

function Home() {
    return (
        <div className="home">
            <img src={profile} alt="Profile" className="profile-img" />
            <h1>Peyma Karzi</h1>
            <p>Frontend Developer | React Enthusiast</p>
        </div>
    );
}

export default Home;