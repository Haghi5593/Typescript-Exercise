interface WelcomeProps  {
  username: string;
  isPremium: boolean;
};

const Welcome = ({ username, isPremium }: WelcomeProps) => {
  return (
    <h1>
      {isPremium
        ? `Welcome back, premium user ${username}!`
        : `Welcome, guest ${username}`}
    </h1>
  );
};

export default Welcome;