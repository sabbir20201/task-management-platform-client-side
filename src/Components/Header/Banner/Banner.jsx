import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/Xsw9Dk4/tasks-word-on-wooden-cubes-260nw-1904598853.webp)' }}>
                <div className="hero"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">welcome task management website</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary"><Link to="/login">Let’s Explore</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;