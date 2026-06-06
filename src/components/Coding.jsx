export default function CodingProfiles() {
  const leetcodeStats = {
    solved: 158,
    easy: 111,
    medium: 42,
    hard: 5,
  };

  return (
    <section id="coding" className="coding-section">
      <h2>Coding Profiles</h2>

      <div className="coding-card">
        <h3>💻 LeetCode</h3>

        <p className="solved-count">
          <strong>{leetcodeStats.solved}+</strong> Problems Solved
        </p>

        <div className="stats-container">
          <div className="stat-card easy">
            <h4>{leetcodeStats.easy}</h4>
            <span>Easy</span>
          </div>

          <div className="stat-card medium">
            <h4>{leetcodeStats.medium}</h4>
            <span>Medium</span>
          </div>

          <div className="stat-card hard">
            <h4>{leetcodeStats.hard}</h4>
            <span>Hard</span>
          </div>
        </div>

        <a
          href="https://leetcode.com/u/fYhkY5jXR/"
          target="_blank"
          rel="noreferrer"
          className="profile-btn"
        >
          View Profile →
        </a>
      </div>
    </section>
  );
}