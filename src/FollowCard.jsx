import { useState } from "react";

export function FollowCard({ children, userName, isFollowingInitial }) {
    const [isFollowing, setIsFollowing] = useState(isFollowingInitial);

    const textButton = isFollowingInitial ? 'Siguiendo' : 'Seguir';
    const classButton = isFollowingInitial ? 'isFollowing' : '';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="followCard">
            <img className="avatar" alt="Avatar"
                src={`https://unavatar.io/${userName}`} />
            <div className="followCard-content">
                <div className="followCard-info">
                    <strong className={`followCard-user ${classButton}`}>
                        {children}
                    </strong>
                    <span className='followCard-info-userName'>
                        @{userName}
                    </span>
                </div>
                <button className={`followCard-button ${classButton}`} onClick={handleClick}>
                    <span className="button-text">{textButton}</span>
                    <span className="button-text-stopFollow">Dejar de seguir</span>
                </button>
            </div>
        </article>
    );
}