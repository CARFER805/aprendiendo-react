import { useState } from 'react';

export function TwitterFollowCard({ children, userName, initialFollowing }) {
  const imageSrc = `https://unavatar.io/${userName}`;
  //console.log(isFollowing);
  const [isFollowing, setIsFollowing] = useState(initialFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt={`El Avatar de ${name}`}
          src={imageSrc}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
