const UserCard = ({ username, name, avatar, index, signIn, user }) => {
  return (
    <li
      key={index}
      className={user && user.name === username ? "selected" : "notSelected"}
    >
      <img src={avatar} alt={name}></img>
      <h3>Username: {username}</h3>
      <p>Name: {name}</p>
      <div>
        {user && user.name === username && (
          <h5>You are logged in as {user.name}</h5>
        )}
      </div>
      <form name="userForm" onSubmit={signIn}>
        <input type="hidden" name="name" value={username}></input>
        <input type="hidden" name="avatar" value={avatar}></input>
        <button type="submit" id={name} name="button">
          Sign in
        </button>
      </form>
    </li>
  );
};

export default UserCard;
