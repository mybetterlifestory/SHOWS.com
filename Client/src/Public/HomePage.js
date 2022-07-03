import Login from './Login';
import TopFive from './Shows/TopFive';

function HomePage() {
    return (
        <div className="Welcome">
            <div className="Info">
                <Login />
                <TopFive />
            </div>
        </div>
    );
}

export default HomePage;