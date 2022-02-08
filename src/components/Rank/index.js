export default function Rank({ user }) {
  const { name, entries } = user;
  return (
    <div>
      <div className="white f3">{`${name}, your current rank is...`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
}
