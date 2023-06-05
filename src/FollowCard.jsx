export function FollowCard({ children, userName, isFollowing }) {

    const textButton = isFollowing ? 'Siguiendo' : 'Seguir';
    const classButton = isFollowing ? 'isFollowing' : '';

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
                <button className={`followCard-button ${classButton}`}>
                    <span className="button-text">{textButton}</span>
                    <span className="button-text-stopFollow">Dejar de seguir</span>
                </button>
            </div>
        </article>
    );
}