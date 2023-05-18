const UserCard = ({ username, name, avatar, index, signIn, user  }) => {
if (user) console.log(user.name, name)

  return (
    <li key={index}>
      <img src={avatar} alt={name}></img>
      <h3>Username: {username}</h3>
      <p>Name: {name}</p>
      <div>
      {(user && user.name === username) && <p>You are logged in as {user.name}</p>}
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
