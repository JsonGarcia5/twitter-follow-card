export function FollowCard({ children, userName }) {
    return (
        <article className="followCard">
            <img className="avatar" alt="Avatar"
                src={`https://unavatar.io/${userName}`} />
            <div className="followCard-content">
                <div className="followCard-info">
                    <strong>{children}</strong>
                    <span className='followCard-infoUserName'>@{userName}</span>
                </div>
                <button className="followCard-buttonFollow">Seguir</button>
            </div>
        </article>
    );
}